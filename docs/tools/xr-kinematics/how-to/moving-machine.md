---
title: Move a part on a machine that also moves
sidebar_position: 9
---

# Move a part on a machine that also moves

**Goal:** keep a part moving correctly while the machine it's mounted on moves or turns too. For example, a slider on a turntable, or a gripper on a moving arm.

## How it works

A moving part measures its movement **relative to another object**, its **reference**. If the reference moves, the part's limits move with it, so the part always slides or turns in the right place on the machine.

By default, the reference is the part's **parent** in the Hierarchy. If the part already sits inside the machine, you don't need to do anything.

## If the part isn't inside the machine

You can choose the reference yourself, without changing the Hierarchy:

1. In the tool, select the part in step **2 Part**, then open step **3 Movement**.
2. Drag the object it's mounted on, for example the turntable, from the Hierarchy into **Reference Transform**.
3. Save the scene with **Ctrl+S**.

The **Movement Axis** or **Rotation Axis** is now measured along that object's axes.

## Good to know

- **Each part has only one reference.** A part that's affected by several moving things should be set up in a Hierarchy that matches the machine, for example `Base > Turntable > Arm > Gripper`, so each part follows the one above it.
- **Parts with a pivot marker** use the marker instead. Put that marker inside the moving machine so it moves along. See [Turn a part around a hinge](./turn-around-a-hinge.md).
