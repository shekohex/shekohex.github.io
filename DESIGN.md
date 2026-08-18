---
version: alpha
name: Shady's Personal Computer
description: A crisp, text-first personal website inspired by terminal output and readable source documents.
colors:
  primary: "#08080A"
  secondary: "#6B6B73"
  neutral: "#F7F7F8"
  neutral-dark: "#151516"
  selection: "#FFFF00"
  selection-text: "#000000"
typography:
  heading:
    fontFamily: ui-monospace
    fontSize: 0.75rem
    fontWeight: 700
    lineHeight: 1.25rem
  body:
    fontFamily: ui-monospace
    fontSize: 0.75rem
    fontWeight: 400
    lineHeight: 1.25rem
  masthead:
    fontFamily: ui-monospace
    fontSize: 0.75rem
    fontWeight: 400
    lineHeight: 1.125rem
rounded:
  none: 0px
spacing:
  page: 40px
  page-mobile: 24px
  section: 20px
  masthead-gap: 80px
components:
  page-light:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.primary}"
    typography: "{typography.body}"
    padding: "{spacing.page}"
  page-dark:
    backgroundColor: "{colors.neutral-dark}"
    textColor: "#F0F0F2"
    typography: "{typography.body}"
    padding: "{spacing.page}"
  heading:
    textColor: "{colors.primary}"
    typography: "{typography.heading}"
  link:
    textColor: "{colors.primary}"
    typography: "{typography.body}"
  selection:
    backgroundColor: "{colors.selection}"
    textColor: "{colors.selection-text}"
---

## Overview

Shady's Personal Computer is a deliberately sparse, text-first portfolio. It should feel like a well-formatted README rendered directly in the browser: technically confident, honest, fast, and free of decorative interface chrome. The design takes inspiration from Pierre Computer Company's public website while keeping Shady's own biography, work, links, and voice.

## Colors

- **Neutral (#F7F7F8):** The default paper-like canvas.
- **Primary (#08080A):** Near-black foreground for strong, crisp contrast.
- **Secondary (#6B6B73):** Markdown markers and quiet structural details.
- **Neutral dark (#151516):** Automatic dark-mode canvas.
- **Selection (#FFFF00):** A bright source-code-style selection highlight.
- The page follows the operating system color scheme; it does not include a manual theme switch.

## Typography

Use the native monospace stack so text stays sharp at every device pixel ratio and loads without layout shift. The base size is 12px with a 20px line height. Headings use the same size and become prominent through weight, uppercase treatment, Markdown markers, and whitespace—not through oversized display type.

## Layout

- Use a single left-aligned reading column capped at 480px.
- Apply 40px page padding on desktop and 24px on compact screens.
- Keep an 80px pause between the masthead and the document body.
- Preserve ordinary text wrapping with aggressive overflow protection for long URLs.
- Keep the page naturally tall; avoid viewport-height centering.

## Elevation & Depth

There are no shadows, gradients, panels, glass effects, or raised controls. Hierarchy comes from typography and spacing only.

## Shapes

Use square, unframed content. No cards, pills, or rounded buttons.

## Components

- **Masthead:** Three compact lines—name, document label, and current year—with a blinking block cursor.
- **Section heading:** Uppercase bold text prefixed by a muted Markdown marker (`#` for the opening section and `##` thereafter).
- **Link:** Inherits foreground color and remains underlined. Hovering swaps foreground and background to resemble terminal selection.
- **Lists:** Use visible hyphens and Markdown-style `[label](destination)` notation where appropriate.
- **Footer:** A small ornamental copyright line and build note.

## Do's and Don'ts

### Do

- Keep the composition sparse and readable.
- Preserve semantic HTML beneath the document-like presentation.
- Support keyboard focus, reduced motion, dark mode, and high-DPI text rendering.
- Let content and URLs wrap safely on small screens.

### Don't

- Add navigation bars, cards, icon sets, hero artwork, gradients, or large buttons.
- Copy Pierre's proprietary font or assets.
- Hide links behind ambiguous labels when the URL is useful context.
- Use JavaScript for visual behavior that CSS can provide.
