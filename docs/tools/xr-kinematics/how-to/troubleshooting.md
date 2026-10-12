---
title: Troubleshooting
sidebar_position: 10
---

# Troubleshooting

## Steps 2, 3 or 4 are greyed out

- **Steps 2 and 4** need a machine in step **1 Object**. Drag it from the Hierarchy into **Drag object here ->**.
- **Step 3** also needs a part. Click one in step **2 Part**.

## The part I want isn't in the list

The list shows everything inside the top-level object that the machine in step 1 belongs to. If the part isn't there, it's somewhere else in the Hierarchy. Drag the object that contains it into step 1 instead.

## "Add Linear Motion Script" or "Add Rotational Motion Script" does nothing

The part already has a movement. A part can have only one. Press **Remove Kinematic Movement Script** first.

## The part doesn't move

Check these in order:

1. **Is anything telling it to move?** It only moves when a button or another script starts it. See [Add buttons that move the parts](./connect-to-a-button.md).
2. **Is Speed above zero?**
3. **Are the limits different?** If the lower and upper limits are both `0`, there's nowhere to go.
4. **Is it already at the limit?** A part at its upper limit won't move further in the positive direction. Try **Negative**.
5. **Is the part marked Static?** Select it and look at the top right of the Inspector. Untick **Static** for moving parts.

## It moves the wrong way, or along the wrong line

The axis is measured along the **parent's** axes (or the Reference Transform's), not the world's and not the part's own. Select the parent, set the Scene view toolbar to **Local**, and check which coloured arrow points the way you want. See [Axes: X, Y and Z](./before-you-start.md#axes-x-y-and-z).

If the direction is right but reversed, use negative limits, or swap the **Positive** and **Negative** buttons.

## It spins in place instead of swinging like a door

The part is turning around its own pivot point, which isn't on the hinge. Use **Create Rotational Pivot Point**. See [Turn a part around a hinge](./turn-around-a-hinge.md).

## "Create XR Movement Controls" does nothing

Look at the Console:

- **No kinematic scripts were found in the hierarchy:** add a movement to at least one part in step 3 first.
- **No EventSystem was found:** the scene needs an Event System with an XR UI Input Module. Ask whoever set up the scene to add one.

## The control panel is missing a part

The panel only includes movements that existed when it was created. Delete the panel in the Hierarchy and create it again.

## It doesn't stop at the custom point

- **Sliding parts at high speed** can jump past it. Lower the Speed. See [Stop a part partway](./stop-partway.md).
- **Use Custom Limit switched itself off** after the last stop. That's by design: it works once.

## It drifts away when the machine moves

Its reference isn't the machine. Put the part inside the machine in the Hierarchy, or set **Reference Transform**. See [Move a part on a machine that also moves](./moving-machine.md).

## It goes through other objects

That's expected. The part is moved by the tool, not by physics, so nothing can block it. Only its limits stop it. Set the limits so it stops before it reaches anything.
