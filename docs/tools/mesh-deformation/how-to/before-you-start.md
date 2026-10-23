---
title: Before you start
sidebar_position: 1
---

# Before you start

New to Unity? The basic terms (Scene, Hierarchy, Project window, Play mode) are explained in [Before you start](../../../before-you-start.md).

## What you need

- A **lesson scene** with a room and a player setup, made with [Scene Generation](../../scene-generation/index.md).
- For measured or simulated data: the files from the lab or from the simulation. They stay on your computer (see below).
- For the AR digital twin: printed QR codes on the testing machine, set up with [Positioning Setup](../../positioning/index.md).

## Three kinds of bending lab

| Kind | Where the numbers come from | Good for |
|---|---|---|
| **Calculated** | The lab calculates the bending from the load, the dimensions and the material. | Exploring: "what if the beam were thicker, or made of aluminium?" |
| **Measured** | Force and travel recorded by a real testing machine, imported from a CSV file. | Comparing with a real test, for example one the class watched. |
| **Simulated** | Results from a finite element program, such as ANSYS. | Showing stresses inside the specimen, including around holes. |

## What learners see and can do

- The **specimen** on its supports, enlarged so it's easy to see. The readouts always use the real dimensions.
- **Stress colours** on the specimen, with a legend. Learners switch between different stress fields.
- **Shape -** and **Shape +** exaggerate the bending to make it visible. This doesn't change any values.
- A **cut-away** or a **section** to look inside, where the data allows it.
- **Graphs**, for example force against deflection.
- With recorded data: **Play / pause**, **Previous state** and **Next state** to step through the test.
- With XR inspection switched on: grab the specimen with both hands to turn it and make it bigger.

:::info[Note]
*Placeholder: the bending lab in the headset, with the coloured specimen and the control panel.*
:::

## Imported data stays on your computer

Imported lab and simulation data is saved in `Assets/ALF/LocalSimulationData`. That folder isn't uploaded to Git. Before you put imported data into an app for students, check that you're allowed to share it.
