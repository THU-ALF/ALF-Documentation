---
title: Change the look
sidebar_position: 3
---

# Change the look

**Goal:** set the colours, size and contents of a code board, in step **2 Appearance**.

## Colours

| **Colours** | Use it for |
|---|---|
| **Dark** | The default. Easiest on the eyes in VR. |
| **Light** | Bright rooms. |
| **High contrast** | AR with passthrough, and difficult light. |

**Board opacity** makes the board see-through. Below 25 %, check on the headset that the code is still readable.

## Size

| Setting | What it does |
|---|---|
| **Text size (m)** | Height of the letters, in metres. |
| **Largest width (m)**, **Largest height (m)** | The board grows with the code up to this size. Longer or wider code gets scrollbars. 1.6 m × 1.2 m by default. |

The preview shows the board's size in metres and whether the code will scroll.

## Lines and letters

| Setting | What it does |
|---|---|
| **Line numbers** | Numbers every line, so the lesson can refer to them. |
| **Even letter widths** | Lines up columns of code. It squeezes wide letters like *m* and *w* a little, so it's off by default. Indentation lines up either way. |
| **Tab width** | Columns between tab stops. Only shown when the code is indented with tabs. |

## Leave out

Under **Leave out**, tick what the board shouldn't show:

- **Comments**: lines holding only a comment disappear too.
- `using` lines (`import` in Java and Python, `#include` in C).
- **Empty lines**: makes long code shorter.

The code you added is kept as it is. Untick to show these parts again.

## Also colour as types

The tool recognises most type names by itself. If a name from your own code isn't coloured as a type, add it under **Also colour as types**.
