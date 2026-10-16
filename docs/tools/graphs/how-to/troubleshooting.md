---
title: Troubleshooting
sidebar_position: 8
---

# Troubleshooting

## All values are in one column, or columns are split

The separator was guessed wrong. Open **Change how the file is read…** and choose the right **Separator**.

## Numbers are wrong by a factor of 1000, or decimals are missing

The number format was guessed wrong. Under **Change how the file is read…**, choose **German (1.234,5)** or **International (1,234.5)**.

## Letters such as ä, ö, ü or ° look wrong

Choose another **Encoding** under **Change how the file is read…**.

## "No data rows are found with these settings"

The table wasn't found where the tool expected it. Check **Column names**, **First data row** and **Last data row** under **Change how the file is read…**.

## "No column contains numbers, so there is nothing to draw"

Every column holds text. Check that the numbers in the file are really numbers, not text with extra characters.

## Rows after an empty row are missing

The tool stops at the first empty row. Remove empty rows inside the table, or choose the **Last data row** yourself.

## A formula shows an error

Read the note under it. It names the problem and where it is, for example *Did you mean sin(x)?*. Use a decimal point (`0.5`), not a comma.

## The zoom buttons don't appear

Zooming works only for **line charts** and **scatter plots** with numbers along the horizontal axis, and only with **Learners can zoom in** ticked.

## Texts are hard to read on the headset

Raise the **Board opacity (%)** or the **Text size (cm)**, or choose the **High contrast** theme.
