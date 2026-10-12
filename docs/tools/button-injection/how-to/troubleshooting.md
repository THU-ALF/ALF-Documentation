---
title: Troubleshooting
sidebar_position: 9
---

# Troubleshooting

## The button does nothing when pressed

Check these in order:

1. **Is it connected to anything?** Placing a button doesn't make it *do* anything. Connect it to a lesson step. See [Use a button to advance a lesson step](./trigger-lesson-step.md).
2. **Is it a flat button in a scene without an Event System?** Flat buttons need one to react at all. The tool shows a warning when it's missing. Ask whoever set up the scene to add one that works with your XR setup. Push button models don't need it.
3. **Are you pressing a flat button with your finger?** Flat buttons only react to a controller ray unless you tick **Also react to being touched**. See [Let learners press with a finger](./touch.md).

## I can't see my new button

New buttons start at the **centre of their object**, which may be inside it, or at the **centre of the world**, which may be far from your room. Press **Find** next to the button in the list, then move it in step **2 Position**.

## The button moved after I dragged it in the Hierarchy

Moving a button to another object keeps its old numbers, which are now measured from the new object. Set its position again in step 2. See [Move a button to a different object](./move-and-rotate.md#move-a-button-to-a-different-object).

## The label can only be read from above

The label tilts with its button. In step **3 Label**, choose **Turns to face the player** or **Held upright**. See [Add a label to a button](./add-a-label.md#make-it-readable).

## My new button's label is empty

That's intentional. A new button copies the look of the selected one but not its text, because every button needs its own label. Type the text in step 3.

## A number was added to the name

Another button already had that name. Each button needs a unique name so you can tell them apart in lists. Rename it in step 1 if you'd like a different name.

## A value I typed snapped back

It was outside the allowed range. For example, flat buttons must be between 5 mm and 2 m wide, and label text between 1 mm and 500 mm tall. This protects against typos like a missing decimal point.

## Steps 2 and 3 can't be opened

No button is selected. Click one in the list, or add a new one first.

## My changes disappeared

Either the scene wasn't saved, or the changes were made in Play mode. Stop Play mode, make the changes again, and press **Save the scene** in step 4.
