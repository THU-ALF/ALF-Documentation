---
title: Scene Check
sidebar_position: 1
---

# Scene Check

**Menu:** ALF > Utils > Scene Check

Finds **cameras that aren't the player's headset**. Models exported from Blender and other programs often bring a camera along, hidden inside the model in the Hierarchy. In the headset, that camera draws the whole scene a second time, and it can make menus, labels and instruction panels appear in the wrong place.

## Check a scene

1. Open the scene, then **ALF > Utils > Scene Check**.
2. Under **Cameras in the open scenes**, look at the list:
   - **Nothing to fix** means every camera belongs to the player.
   - Otherwise each extra camera is listed with where it is.
3. For each camera:
   - **Find** selects it in the Hierarchy and shows it in the Scene view.
   - **Remove** takes it out of the scene for good. If the object holds nothing but the camera, the whole object is removed; otherwise only the camera.
4. Or press **Remove every stray camera** to remove them all at once. The player's cameras are never touched.
5. Save the scene with **Ctrl+S**.

**Ctrl+Z** undoes a removal.

## Automatic clean-up

**Remove stray cameras when the scene runs and when it is built** is on by default. Extra cameras are then taken out of the running lesson and the finished app automatically, while your scene file stays exactly as it is. Each removal is noted in the Console.

Use **Remove** in the list to take a camera out of the scene file itself.

## Good to know

- **Show the cameras that are fine as well** lists every camera, including the player's, with what was decided about each.
- **The tool asks you to stop Play mode** before removing anything, because changes made while playing are lost.
- **If Play mode is set to skip reloading the scene** (in **Project Settings > Editor > Enter Play Mode Settings**), the automatic clean-up doesn't work in Play mode. The tool warns you. The finished app is still cleaned up. Use **Remove** instead.
