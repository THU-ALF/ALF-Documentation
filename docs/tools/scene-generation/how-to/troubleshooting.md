---
title: Troubleshooting
sidebar_position: 4
---

# Troubleshooting

## The button is greyed out

- **Create New Scene:** the **New Scene Name** is empty. Type a name.
- **Update Existing Scene:** no **Target Scene** is chosen. Drag a scene from the Project window into it.

## "Scene Not Created"

The scene you have open has unsaved changes that couldn't be saved, so the tool stopped rather than lose them. Save the open scene with **File > Save**, then try again.

## "Scene Already Exists"

A scene with that name is already in `Assets/ALF-Generated/Scenes`. Choose **Yes** to replace it, or **Cancel** and pick another name.

:::danger[Overwriting replaces the whole scene]
Choosing **Yes** replaces the existing scene with a new, empty one. Everything in the old scene is lost.
:::

## "No XR Rig Detected in Scene"

The scene you chose has no player setup yet, for example because it wasn't made with this tool. You can still press **Update Selected Scene** to add one.

## There's no floor, even though Add Floor was ticked

**Include VR Room** was ticked. The VR room has its own floor, so no extra floor is added.

## The learner falls through the ground

The scene has no floor. Create the scene again with **Add Floor** ticked, or with a VR room.

## The window only shows a warning

The scene is playing. Stop Play mode, and the tool appears again.
