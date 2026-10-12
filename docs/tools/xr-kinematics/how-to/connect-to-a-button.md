---
title: Add buttons that move the parts
sidebar_position: 6
---

# Add buttons that move the parts

**Goal:** let learners move the parts by pressing buttons.

Every moving part understands three commands:

| Command | What it does |
|---|---|
| **Positive** | Moves towards the upper limit, and stops there. |
| **Negative** | Moves towards the lower limit, and stops there. |
| **Stop** | Stops wherever the part is. |

There are two ways to give learners buttons for these.

## The easy way: let the tool build a control panel

1. Set up **all** the moving parts of the machine first.
2. In the tool, open step **4 Controls**.
3. Press **Create XR Movement Controls**.

The tool builds a panel called `<machine> - Movement Controls`, 1.5 m in front of the machine and facing the same way. It has one row per moving part, labelled with the part's name and its **Display Name**, each with a **Positive**, **Negative** and **Stop** button. The buttons are connected for you.

Move the panel where you want it in the Scene view, then save the scene with **Ctrl+S**.

:::tip[Clear labels on the panel]
Before creating the panel, give each movement a clear **Display Name** in step **3 Movement**, for example `Door` or `Feed slider`.
:::

:::caution[Set up all parts first]
The panel covers the movements that exist when you press the button. If you add a part later, delete the panel in the Hierarchy and create it again.
:::

## The flexible way: use your own buttons

Use this when you want buttons in specific places, for example a push button placed with [Button Injection](../../button-injection/how-to/add-button-to-object.md).

### Find the button's event list

Select the button in the Hierarchy and expand it if needed, until you find:

| Button kind | Look for the component | Use the event |
|---|---|---|
| **Flat button** | **Button** | **On Click ()** |
| **Push button model**, or a flat button with *Also react to being touched* | **XR Simple Interactable** | **Select Entered**, under *Interactable Events* |

### Connect a command

1. In the event list, press **+** to add an entry.
2. Drag the **moving part** from the Hierarchy into the empty object field of the new entry.
3. Open the **No Function** dropdown, choose **LinearKinematicMovement** or **RotationalKinematicMovement**, then the command: **StartPositive ()**, **StartNegative ()** or **Stop ()**.
4. Save the scene with **Ctrl+S**.

### Common setups

| You want | Button and event | Command |
|---|---|---|
| An *Open* button | On Click / Select Entered | **StartPositive** |
| A *Close* button | On Click / Select Entered | **StartNegative** |
| Move only while held (push buttons) | **Select Entered**, and **Select Exited** | **StartPositive**, and **Stop** |
| Start and stop a wheel | Two buttons | **StartPositive**, and **Stop** |

## Good to know

- **The panel needs an Event System in the scene.** Without one, the panel isn't created and the Console shows a warning. Ask whoever set up the scene to add an Event System with an XR UI Input Module.
- **Pressing the same command twice does nothing extra.** A part already moving in that direction carries on.
