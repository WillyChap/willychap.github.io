# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is an academic personal website built with Jekyll, forked from the [Minimal Mistakes Jekyll Theme](https://mmistakes.github.io/minimal-mistakes/). It is hosted on GitHub Pages and showcases research, publications, talks, and projects for Will Chapman, a Project Scientist at NCAR focused on weather and climate predictability.

## Development Commands

### Local Development

```bash
# Install dependencies (if Gemfile.lock issues occur, delete it first)
bundle install

# Serve the site locally with live reload
bundle exec jekyll serve

# Use the development config for local testing
bundle exec jekyll serve --config _config.yml,_config.dev.yml
```

The site will be available at `http://localhost:4000` by default. Jekyll will automatically rebuild and refresh pages on changes.

### Building

```bash
# Build the site (outputs to _site/)
bundle exec jekyll build
```

## Architecture

### Jekyll Collections

The site uses Jekyll collections to organize different content types. Each collection has its own directory and is configured in `_config.yml`:

- **`_publications/`**: Research papers and publications (collection: publications, permalink: /publication/:path/)
- **`_talks/`**: Conference talks and presentations (collection: talks, permalink: /talks/:path/)
- **`_teaching/`**: Teaching materials and courses (collection: teaching, permalink: /teaching/:path/)
- **`_portfolio/`**: Portfolio projects (collection: portfolio, permalink: /portfolio/:path/)
- **`_posts/`**: Blog posts (standard Jekyll posts)
- **`_pages/`**: Static pages like About, CV, Projects, Code

### Content Structure

Collection items are Markdown files with YAML front matter. Example structure:

```yaml
---
title: "Paper Title"
collection: publications
permalink: /publication/2015-10-01-paper-title
excerpt: 'Brief description'
date: 2015-10-01
venue: 'Journal Name'
paperurl: 'http://example.com/paper.pdf'
citation: 'Author. (2015). "Title." <i>Journal</i>. 1(3).'
---
```

### Layout and Theming

- **`_layouts/`**: Page templates (default, single, archive, talk, splash, compress)
- **`_includes/`**: Reusable components (header, footer, sidebar, author-profile, analytics, comments)
- **`_sass/`**: SCSS stylesheets organized by component (_base.scss, _navigation.scss, _archive.scss, etc.)
- **`assets/`**: Static assets (JS, CSS, images)

### Configuration

- **`_config.yml`**: Main site configuration (site metadata, author info, collections, plugins, defaults)
- **`_config.dev.yml`**: Development overrides (merge with main config using `--config` flag)
- **`_data/navigation.yml`**: Site navigation menu structure
- **`_data/authors.yml`**: Author information for multi-author sites

### Static Files

- **`files/`**: PDFs, documents, and downloadable files (accessible at `/files/filename.pdf`)
- **`images/`**: Image assets used throughout the site
- **`talkmap/`**: Talk location mapping functionality

### Markdown Generators

The `markdown_generator/` directory contains Python scripts and Jupyter notebooks to bulk-generate markdown files from structured data:

- **`publications.py` / `publications.ipynb`**: Generate publication markdown from TSV data
- **`pubsFromBib.py` / `PubsFromBib.ipynb`**: Generate publications from BibTeX files
- **`talks.py` / `talks.ipynb`**: Generate talk pages from TSV data

These scripts convert TSV files into individual markdown files formatted for Jekyll collections.

## Important Notes

- The site uses `github-pages` gem, which locks to specific Jekyll and plugin versions compatible with GitHub Pages
- Main branch for PRs: `master`
- Site URL: https://willychap.github.io
- When adding new publications, talks, or teaching materials, follow the YAML front matter structure of existing files in those collections
- Images referenced in content should be placed in `/images/` and files in `/files/`
- Navigation is controlled via `_data/navigation.yml` - add menu items there
