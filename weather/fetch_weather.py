#!/usr/bin/env python3
"""Fetch 14 days of weather observations from the CU Boulder Sundowner station.

Parses fixed-width text files from sundowner.colorado.edu and outputs
weather/data.json for the Quarto dashboard.

No external dependencies -- uses only the Python standard library.
"""

import json
import os
import re
import sys
import urllib.request
from datetime import datetime, timedelta

STATION_URL = "https://sundowner.colorado.edu/weather/atoc1/wxobs{date}.txt"
OUTPUT_PATH = os.path.join(os.path.dirname(os.path.abspath(__file__)), "data.json")
DAYS_TO_FETCH = 14


def parse_time(date_str, time_str):
    """Parse '2/15/26' + '12:05a' into an ISO 8601 datetime string."""
    # Normalize the am/pm suffix
    time_str = time_str.strip()
    if time_str.endswith("a"):
        time_str = time_str[:-1] + " AM"
    elif time_str.endswith("p"):
        time_str = time_str[:-1] + " PM"
    # Handle midnight (12:00a) which is 12:00 AM, and noon (12:00p)
    try:
        dt = datetime.strptime(f"{date_str.strip()} {time_str}", "%m/%d/%y %I:%M %p")
    except ValueError:
        return None
    return dt.isoformat()


def safe_float(value):
    """Convert a string to float, returning None on failure."""
    try:
        return float(value.strip())
    except (ValueError, AttributeError):
        return None


def parse_weather_file(text):
    """Parse a Sundowner weather data file into a list of observation dicts."""
    lines = text.splitlines()
    records = []

    for line in lines:
        # Skip header lines (start with spaces + non-date text, or dashes)
        if not line.strip():
            continue
        if line.strip().startswith("---"):
            continue
        # Data lines start with a date like " 2/15/26"
        match = re.match(r"\s*(\d{1,2}/\d{1,2}/\d{2})\s+(\d{1,2}:\d{2}[ap])\s+(.+)", line)
        if not match:
            continue

        date_str, time_str, rest = match.groups()
        dt = parse_time(date_str, time_str)
        if dt is None:
            continue

        # Split the remaining columns by whitespace
        cols = rest.split()
        if len(cols) < 25:
            continue

        # Column mapping (0-indexed from `rest`):
        #  0: Temp Out   1: Hi Temp  2: Low Temp  3: Out Hum  4: Dew Pt.
        #  5: Wind Speed 6: Wind Dir 7: Wind Run  8: Hi Speed 9: Hi Dir
        # 10: Wind Chill 11: Heat Index 12: THW  13: THSW
        # 14: Bar  15: Rain  16: Rain Rate
        # 17: Solar Rad.  18: Solar Energy  19: Hi Solar Rad.
        temp_f = safe_float(cols[0])
        humidity = safe_float(cols[3])
        dew_point_f = safe_float(cols[4])
        wind_speed = safe_float(cols[5])
        wind_dir = cols[6] if cols[6] != "---" else None
        wind_gust = safe_float(cols[8])
        pressure_mb = safe_float(cols[14])
        rain_in = safe_float(cols[15])
        solar_rad = safe_float(cols[17])

        # Computed fields
        temp_c = round((temp_f - 32) * 5 / 9, 1) if temp_f is not None else None

        records.append({
            "datetime": dt,
            "temp_f": temp_f,
            "temp_c": temp_c,
            "humidity": humidity,
            "dew_point_f": dew_point_f,
            "wind_speed": wind_speed,
            "wind_gust": wind_gust,
            "wind_dir": wind_dir,
            "pressure_mb": pressure_mb,
            "rain_in": rain_in,
            "solar_rad": solar_rad,
        })

    return records


def fetch_day(date):
    """Fetch one day's weather file. Returns text or None on failure."""
    url = STATION_URL.format(date=date.strftime("%Y%m%d"))
    try:
        req = urllib.request.Request(url, headers={"User-Agent": "CU-Weather-Dashboard/1.0"})
        with urllib.request.urlopen(req, timeout=30) as resp:
            return resp.read().decode("utf-8", errors="replace")
    except Exception as exc:
        print(f"  Skipping {date.strftime('%Y-%m-%d')}: {exc}")
        return None


def main():
    today = datetime.utcnow().date()
    all_records = []

    for days_ago in range(DAYS_TO_FETCH, -1, -1):
        date = today - timedelta(days=days_ago)
        print(f"Fetching {date.strftime('%Y-%m-%d')}...")
        text = fetch_day(date)
        if text:
            records = parse_weather_file(text)
            all_records.extend(records)
            print(f"  Parsed {len(records)} records")

    print(f"\nTotal records: {len(all_records)}")

    with open(OUTPUT_PATH, "w") as f:
        json.dump(all_records, f)

    file_size = os.path.getsize(OUTPUT_PATH)
    print(f"Wrote {OUTPUT_PATH} ({file_size / 1024:.0f} KB)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
