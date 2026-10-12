---
title: Make a wheel spin
sidebar_position: 5
---

# Make a wheel spin

**Goal:** make a part keep turning until it's told to stop, like a wheel, fan or handwheel.

## Steps

1. Open **ALF > Interactivity > Kinematic Editor Tool**.
2. **1 Object:** drag the machine from the Hierarchy into **Drag object here ->**.
3. **2 Part:** click the wheel in the **Object hierarchy** list.
4. **3 Movement:** press **Add Rotational Motion Script**.
5. Under **Rotational Motion Settings**, set:

   | Field | What to enter |
   |---|---|
   | **Rotation Mode** | **Continuous** |
   | **Rotation Axis** | The axis the wheel turns around: X, Y or Z. |
   | **Speed** | How fast it turns, in degrees per second. `360` is one full turn per second. |

6. Check the **cyan line and sphere** in the Scene view. They should run through the centre of the wheel. If not, see [Turn a part around a hinge](./turn-around-a-hinge.md) and put the marker at the wheel's centre.
7. Add buttons to start and stop it. See [Add buttons that move the parts](./connect-to-a-button.md).
8. Save the scene with **Ctrl+S**.

## Result

Started in the **positive** direction, the wheel turns one way; in the **negative** direction, the other way. It keeps turning until **Stop** is pressed.

## Good to know

- **Limits don't apply** in Continuous mode, so the limit fields are hidden.
- **It can run as long as you like.** The angle is kept between 0° and 360°, so it doesn't drift over a long lesson.
