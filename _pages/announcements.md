---
layout: page
title: "Announcements"
permalink: /announcements/
---

Stay updated with the latest news, opportunities, and events from the Chapman Research Group.

---

{% for announcement in site.data.announcements %}
<article class="announcement announcement--{{ announcement.type }}">
  <header class="announcement__header">
    <h2 class="announcement__title">{{ announcement.title }}</h2>
    <time class="announcement__date">{{ announcement.date | date: "%B %d, %Y" }}</time>
    {% if announcement.type == "hiring" %}
    <span class="announcement__badge announcement__badge--hiring">Hiring</span>
    {% elsif announcement.type == "event" %}
    <span class="announcement__badge announcement__badge--event">Event</span>
    {% elsif announcement.type == "news" %}
    <span class="announcement__badge announcement__badge--news">News</span>
    {% endif %}
  </header>

  <div class="announcement__content">
    {{ announcement.content | markdownify }}
  </div>

  {% if announcement.link %}
  <div class="announcement__footer">
    <a href="{{ announcement.link }}" class="announcement__link" target="_blank" rel="noopener noreferrer">
      {{ announcement.link_text | default: "Learn More" }} →
    </a>
  </div>
  {% endif %}
</article>

<hr class="announcement__divider">

{% endfor %}

---

## Subscribe to Updates

To receive email notifications about new opportunities and announcements, please contact us at [wchapman@colorado.edu](mailto:wchapman@colorado.edu?subject=Subscribe to Chapman Group Announcements).
