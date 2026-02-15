---
layout: page
title: "Course Slides"
permalink: /slides/
---

HTML presentations for courses taught by the Chapman Research Group.

---

## ATOC 4815/5815: Scientific Programming, Data Analysis and Visualization

**Spring 2026**

- [Week 0: Course Introduction](/slides/atoc4815-week00-intro.html) - Welcome, syllabus, AI/LLM policy, setup, and getting started
- [Demo Lecture: Python & Data Analysis](/slides/atoc4815-demo.html) - Introduction to course structure and basic Python
- [Week 1: Python Fundamentals](/slides/atoc4815-week01.html) - Variables, types, strings, lists, dictionaries, control flow, loops, and functions
- [Week 2: Functions and Reusable Code](/slides/atoc4815-week02.html) - Advanced functions, error handling, file I/O, and object-oriented programming
- [Week 3: NumPy and Basic Plotting](/slides/atoc4815-week03.html) - NumPy arrays, vectorized operations, matplotlib basics, and data visualization
- [Week 4: Numerical Integration & Explicit Euler](/slides/atoc4815-numerical-integration.html) - Solving ODEs with Forward Euler, stability analysis, and Lorenz63
- *Week 5: Midterm* | [Post-Test Review](/slides/midterm-post-test.html) - The date, nested loops, and why integration needs a loop
- [Week 5.5: Linking Python Scripts Together](/slides/atoc4815-week05.5.html) - Modules, imports, `if __name__ == "__main__"`, and multi-file project structure
- [Week 6: Git for Scientists](/slides/git-for-science-beginners.html) - 5 commands to survive: clone, status, add, commit, push ([practice repo](https://github.com/WillyChap/atoc4815-git-practice)) | [Collaboration](/slides/git-for-science-collaboration.html) - Branches, merging, pull requests, and .gitignore
- [Week 7: Tabular Data & Pandas](/slides/atoc4815-week04.html) - Series and DataFrames, time series analysis, resampling, rolling windows, and aggregation
- [Week 8: Multi-Dimensional Data with xarray](/slides/atoc4815-week05-xarray.html) - NetCDF files, DataArrays, Datasets, coordinate-based selection, climatologies, and gridded data analysis
- [Week 9: Python Parallelization](/slides/atoc4815-week09.html) - GIL, vectorization, multiprocessing, concurrent.futures, Dask, and best practices for making code faster

*More slides will be added throughout the semester*

### Course Materials

- [Course Syllabus (PDF)](/files/ATOC4815_5815_syllabus.pdf)
- [Final Project Guidelines - Graduate Students](/slides/final-project-grad.html)
- [Git for Scientific Software Development](/slides/git-for-science.html) - Version control for atmospheric science (adapted from Jack Atkinson)
- [IDE Setup Guide - Mac (PDF)](/files/ATOC4815_IDE_SETUP_MAC.pdf)
- [IDE Setup Guide - Windows (PDF)](/files/ATOC4815_IDE_SETUP_WINDOWS.pdf)
- [Conda Environment File (YML)](/files/atoc-2025-lite.yml)

---

## ATOC 5860: Objective Data Analysis Laboratory

**Fall 2025**

*Slides coming soon*

---

## Creating Your Own Slides

These slides are created using [Quarto](https://quarto.org) with reveal.js. The source files (.qmd) can be found in the course GitHub repositories.

### For Students

If you'd like to run the code examples from the slides:
1. Download the `.qmd` source file
2. Install Quarto
3. Render with: `quarto render filename.qmd`

### Key Features

- **Live code examples**: Execute Python directly in slides
- **Math equations**: LaTeX support for atmospheric equations
- **Interactive navigation**: Arrow keys, overview mode (ESC), speaker notes (S)
- **PDF export**: Print to PDF for offline viewing
