---
title: "Your data: CSV file or formulas"
sidebar_position: 1
---

# Your data: CSV file or formulas

Graphs makes a chart from a table of numbers and puts it on a board in your scene. Each file, or each set of formulas, becomes one graph.

New to Unity? The basic terms (Scene, Hierarchy, Project window, Play mode) are explained in [Before you start](../../../before-you-start.md).

## Where the data comes from

| Source | Use it for |
|---|---|
| **CSV file** | Measurements, survey results or any table saved from Excel, LibreOffice, Google Sheets or lab software. |
| **Formulas** | Functions and sequences, such as `sin(x)` or `x^2`, computed over a range you choose. |

**From Excel:** choose **File > Save As** and save the sheet as **CSV**. Excel workbooks (`.xlsx`) can't be read directly.

## What the tool reads by itself

You usually don't need to prepare the file. The tool works out:

- the **separator** (comma, semicolon, tab or `|`),
- German (`1.234,5`) or international (`1,234.5`) **numbers**,
- the **header row** with the column names, skipping title rows above the table,
- **units** such as `°C`, `kg` or `%` next to the numbers or in the column names,
- where the table **starts and ends**.

If it guesses wrong, you can correct it under **Change how the file is read…**. See [Make a graph from a CSV file](./graph-from-a-csv-file.md#if-the-preview-looks-wrong).

## Where the data is stored

The data is copied into the project, under `Assets/ALF-Generated/Graphs`. The graph then works without the original file, and on the headset no files are read.

:::caution[Personal data]
Everything in the table becomes part of the app, including text columns. Don't import tables with personal data, such as student names or grades, unless your institution's data protection rules allow it.
:::

## The window

| Step | What you do there |
|---|---|
| **1 Data** | Choose a file or type formulas, check the preview, import. |
| **2 Chart** | Kind of chart, the columns drawn, titles. |
| **3 Appearance** | Size, text, theme, values, trend lines, reference lines. |
| **4 Placement** | Where the graph stands and what learners can do with it. |
| **5 Save** | Summary, save, remove. |

The list on the left shows every graph in the scene. Click one to change it. Changes appear in the scene straight away.
