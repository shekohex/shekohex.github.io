---
version: alpha
name: Shady's Personal Computer
description: A crisp, text-first personal website inspired by terminal output and readable source documents.
colors:
  primary: "#000000"
  secondary: "#58585A"
  neutral: "#DFDFE0"
  neutral-dark: "#363C46"
  selection: "inverted foreground/background"
  selection-text: "inverted background/foreground"
typography:
  heading:
    fontFamily: ui-monospace
    fontSize: "clamp(0.75rem, calc(0.65rem + 0.18vw), 1rem)"
    fontWeight: 700
    lineHeight: "clamp(1.25rem, calc(1rem + 0.3vw), 1.5rem)"
  body:
    fontFamily: ui-monospace
    fontSize: "clamp(0.75rem, calc(0.65rem + 0.18vw), 1rem)"
    fontWeight: 400
    lineHeight: "clamp(1.25rem, calc(1rem + 0.3vw), 1.5rem)"
  masthead:
    fontFamily: ui-monospace
    fontSize: "clamp(0.75rem, calc(0.65rem + 0.18vw), 1rem)"
    fontWeight: 400
    lineHeight: "clamp(1.125rem, calc(0.95rem + 0.25vw), 1.5rem)"
rounded:
  none: 0px
spacing:
  page: "clamp(1.5rem, calc(1rem + 1.25vw), 4rem)"
  section: "clamp(1.25rem, calc(1rem + 0.25vw), 1.5rem)"
  masthead-gap: "clamp(5rem, calc(4rem + 1vw), 8rem)"
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

- **Light canvas (#DFDFE0):** The default light-theme background.
- **Light foreground (#242529):** The default light-theme text.
- **Dark canvas (#363C46):** The default dark-theme background.
- **Dark foreground (#DCE0E5):** The default dark-theme text.
- **AMOLED canvas (#000000):** The optional pure-black background.
- **Secondary (#58585A):** Markdown markers and quiet structural details.
- Text selection uses the Zed accent colors (`#5C78E2` light and `#74ADE8` dark) with translucent backgrounds; link hover states invert the current foreground and background colors.
- The page follows the operating system color scheme by default and supports explicit `?light`, `?dark`, and `?amoled` themes.

## Typography

Use the native monospace stack so text stays sharp at every device pixel ratio and loads without layout shift. The base size is 12px with a 20px line height, scaling fluidly to a maximum of 16px and 24px on wide displays. Headings use the same size and become prominent through weight, uppercase treatment, Markdown markers, and whitespace—not through oversized display type.

## Layout

- Use a single left-aligned reading column that scales from 480px to a maximum of 960px on wide displays.
- Use fluid page padding that ranges from 24px on compact screens to 64px on very wide displays.
- Keep a fluid pause between the masthead and the document body that ranges from 80px to 128px.
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
- **Secondary tagline:** A small personal positioning line between the masthead and document body.

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
