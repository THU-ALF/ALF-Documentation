---
title: Put a button in the room
sidebar_position: 3
---

# Put a button in the room

**Goal:** add a button that belongs to the room rather than to a machine, such as a reset button by the door or a start button on a plinth.

A free-standing button stays where you put it, even if machines in the scene move.

## Steps

1. Open **ALF > Interactivity > Button Injection**.
2. Under the list on the left, press **+ Add a new button**.
3. In step **1 Button**:
   1. For where the button goes, choose **In the world**. This is already selected each time the tool opens.
   2. Choose the **Type** and type a **Name**.
   3. Press **Add**.

   ![Step 1 Button with In the world selected](./img/button-injection-button.png)

4. The new button appears at the **centre of the world**, the point (0, 0, 0), with step **2 Position** open.
5. Move it to where it should be. See [Move and turn a button](./move-and-rotate.md). The coordinates are labelled **World position** and measured in metres from the centre of the world.
6. Go to step **4 Save** and press **Save the scene**.

## Result

The button is listed on the left as standing *in the world*.

## Good to know

- **The centre of the world may not be where your room is.** If you can't see the new button, use **Place visually** in step 2 to bring it to you, or press **Find** next to it in the list.
- **You can attach it to an object later** by dragging it onto that object in the Hierarchy. See [Move a button to a different object](./move-and-rotate.md#move-a-button-to-a-different-object).
