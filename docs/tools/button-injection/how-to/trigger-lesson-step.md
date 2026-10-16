---
title: Use a button to advance a lesson step
sidebar_position: 7
---

# Use a button to advance a lesson step

**Goal:** move the lesson on to the next step when a learner presses a button.

A button does nothing on its own. You connect it to a lesson step in [Scenario Setup](../../scenario-setup/index.md).

## Plan first

Work in this order:

1. Decide which lesson steps should wait for a button press.
2. Place those buttons with Button Injection. See [Put a button on a machine](./add-button-to-object.md), [Put a button in the room](./add-free-standing-button.md) or [Make a part of a machine clickable](./make-a-part-clickable.md).
3. Build the lesson in the Scenario tool, picking each button from a list.

## Connect the button

1. Open **ALF > Scenario Setup Tool**. In tab **2 Steps**, click the step that should wait for the press, and switch to **Environment & Flow**.
2. Under **Completion Trigger**, choose the **Trigger Method** that matches the button:

   | Your button is a… | Choose |
   |---|---|
   | Flat button | **Press a flat button** |
   | Push button model | **Press a hand-pressable button** |
   | Clickable part | **Press a hand-pressable button** |
   | Flat button with *Also react to being touched* | Either one |

3. Pick your button from the **Button** list. Each entry shows the button's name, kind and where it sits.
4. In tab **3 Generate**, press the generate button, then save the scene.

More on the other ways a step can finish: [Choose how a step finishes](../../scenario-setup/how-to/choose-how-a-step-finishes.md).

## Other things a button can do

To make a button move a part of a machine, see [Kinematic Editor Tool: Add buttons that move the parts](../../xr-kinematics/how-to/connect-to-a-button.md#the-flexible-way-use-your-own-buttons).

## Good to know

- **The list is empty?** You haven't placed any buttons yet. Press **Open Button Injection** in the Scenario tool to place one.
- **Use clear, unique names** like `Start` or `Open valve`. That's how you'll recognise the button in this list.
- **Existing connections are kept.** If a step was connected to a hand-made button before, the Scenario tool warns about it but doesn't remove it unless you pick a different button.
