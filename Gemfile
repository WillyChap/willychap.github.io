source "https://rubygems.org"

# GitHub Pages gem (includes Jekyll and approved plugins)
gem "github-pages", group: :jekyll_plugins

# Development server (for Jekyll 3.x on macOS)
gem "webrick"

# Additional plugins in the GitHub Pages whitelist
group :jekyll_plugins do
  gem "jekyll-feed"
  gem "jekyll-sitemap"
end

# Windows and JRuby does not include zoneinfo files
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.0", :platforms => [:mingw, :x64_mingw, :mswin]
