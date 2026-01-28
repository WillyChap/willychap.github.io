# Course Slides

HTML presentations created with [Quarto](https://quarto.org) and reveal.js.

## Quick Start

### Install Quarto

**macOS:**
```bash
brew install quarto
```

Or download from: https://quarto.org/docs/get-started/

### Render Slides

```bash
# Render a single presentation
quarto render atoc4815-demo.qmd

# Preview while editing (auto-refresh)
quarto preview atoc4815-week01.qmd --no-browser

# Render all .qmd files
quarto render

```

The HTML output will be generated in the same directory and automatically works with Jekyll.

## Creating New Slides

1. Copy `atoc4815-demo.qmd` as a template
2. Edit the YAML header (title, date, etc.)
3. Write content in Markdown
4. Render with `quarto render filename.qmd`
5. Commit both `.qmd` and `.html` files

## Features

### Basic Slide Syntax

```markdown
## Slide Title

Content here

::: {.fragment}
This appears on click
:::
```

### Two Columns

```markdown
:::: {.columns}
::: {.column width="50%"}
Left content
:::
::: {.column width="50%"}
Right content
:::
::::
```

### Code Blocks with Execution

```markdown
```{python}
#| echo: true
#| eval: true
import numpy as np
print(np.mean([1, 2, 3]))
```
```

### Speaker Notes

```markdown
::: {.notes}
These notes only appear in presenter mode (press 'S')
:::
```

### Math

```markdown
$$
\frac{\partial u}{\partial t} = -u \frac{\partial u}{\partial x}
$$
```

## Keyboard Shortcuts

- **Arrow keys**: Navigate slides
- **ESC**: Overview mode
- **S**: Speaker notes
- **F**: Fullscreen
- **?**: Help menu

## Tips

- Keep slides simple (one idea per slide)
- Use code blocks with syntax highlighting
- Include speaker notes for teaching
- Test on mobile (responsive design)
- Export to PDF: `?print-pdf` in URL, then print

## More Resources

- [Quarto reveal.js docs](https://quarto.org/docs/presentations/revealjs/)
- [reveal.js demos](https://revealjs.com/)
