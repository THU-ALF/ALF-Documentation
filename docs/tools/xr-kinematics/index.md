---
title: Kinematic Editor Tool
description: Make parts of a machine slide, swing or spin, and add buttons to control them.
---

# Kinematic Editor Tool

**Menu:** ALF > Interactivity > Kinematic Editor Tool

Makes parts of a machine move: a slider that slides, a door or lever that swings, a wheel that spins. The part moves smoothly and stops at the limits you set. The tool can also build a **control panel** with buttons that move each part.

| The part should… | Press | Rotation Mode |
|---|---|---|
| **Slide** in a straight line | **Add Linear Motion Script** | — |
| **Swing** between two angles | **Add Rotational Motion Script** | Limited |
| **Spin** without stopping | **Add Rotational Motion Script** | Continuous |

## Quick start

1. Put the machine in the scene, with its moving parts in their starting position.
2. Open **ALF > Interactivity > Kinematic Editor Tool**.
3. **1 Object:** drag the machine from the Hierarchy into **Drag object here ->**.
4. **2 Part:** click the part that should move.
5. **3 Movement:** press **Add Linear Motion Script** or **Add Rotational Motion Script**, then set the axis, limits and speed.
6. Repeat steps 4 and 5 for every moving part.
7. **4 Controls:** press **Create XR Movement Controls** to get a panel of buttons that drives all the movements.
8. Save the scene with **Ctrl+S**.

## Guides

1. [Before you start](./how-to/before-you-start.md)
2. [Make a part slide](./how-to/make-a-part-slide.md)
3. [Make a door or lever swing](./how-to/make-a-part-swing.md)
4. [Turn a part around a hinge](./how-to/turn-around-a-hinge.md)
5. [Make a wheel spin](./how-to/make-a-part-spin.md)
6. [Add buttons that move the parts](./how-to/connect-to-a-button.md)
7. [Play a sound or effect when a part moves](./how-to/react-to-movement.md)
8. [Stop a part partway](./how-to/stop-partway.md)
9. [Move a part on a machine that also moves](./how-to/moving-machine.md)
10. [Troubleshooting](./how-to/troubleshooting.md)
