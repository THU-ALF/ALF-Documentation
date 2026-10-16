---
title: Troubleshooting
sidebar_position: 4
---

# Troubleshooting

## The model doesn't appear in the preview

Press **Find model**. A very small model or one far from the origin may be out of view. **Center on origin** moves it back to the middle.

## "This model has no visible mesh"

The model has nothing the tool can show: its parts may be switched off, hidden or scaled to zero in the original file. Fix the original, or choose another model.

## Save adjusted prefab is greyed out

The placement isn't confirmed. Press **I like this position, orientation and size** in step 3. You need to do this again after every change.

## The model floats or sinks after resizing

Resizing doesn't set the model on the ground again. In step 3, tick **Snap to ground** and press **Apply selected corrections**.

## The model doesn't quite touch the floor

**Snap to ground** uses a box around the model. For unusual shapes, the lowest corner of that box can be a little below the visible part. Fine-tune the height with **Position** in step 2.

## The preview disappeared

The preview closes when you enter Play mode, close the window or Unity reloads its scripts. Load the model again. The values in step 2 are kept, but you need to confirm again before saving.

## The new prefab changed when I edited the original

**Keep source link** was ticked, so the prefab follows the original. To get a fully separate copy, save again with **Keep source link** unticked.
