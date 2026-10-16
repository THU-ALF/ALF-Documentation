---
title: "When a model needs adjusting"
sidebar_position: 1
---

# When a model needs adjusting

Model Adjuster fixes how a model sits, before it goes into a lesson. Use it when a model:

- lies on its side or faces the wrong way,
- is far too big or too small, for example a machine the size of a house,
- floats above the floor or sinks into it.

New to Unity? The basic terms (Scene, Hierarchy, Project window, Play mode) are explained in [Before you start](../../../before-you-start.md).

## What you need

A **model** in the **Project window**: a prefab, or an imported 3D file such as an FBX. To use a file from your computer, drag it from your file explorer into the Project window first.

## How it works

The tool shows your model on a **4 × 4 metre plate** with a grid of 1 metre squares. In the middle is the **origin**, an orange box with three coloured arrows: **red = X**, **green = Y (up)**, **blue = Z (forward)**. The origin is where the [Object Spawner](../../object-spawner/index.md) will put the model later.

You turn, resize and move the model until it stands on the plate the way it should stand in the lesson. Then you save it as a **new prefab**:

- The **original model is never changed**.
- The new prefab has your position, rotation and size built in, so it arrives correctly every time you place it.

## The window

| Step | What you do there |
|---|---|
| **1 Model** | Choose the model and load it into the preview. |
| **2 Adjust** | Move, turn and resize it. |
| **3 Corrections** | Optionally let the tool set it on the ground and square up its rotation, then confirm. |
| **4 Save** | Save the new prefab. |

:::caution[Not while the scene is playing]
The tool doesn't work in Play mode. Stop Play mode first.
:::
