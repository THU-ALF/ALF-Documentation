---
title: Mesh Deformation
description: A bending lab for materials science, showing how a beam bends and where it's under stress.
---

# Mesh Deformation

**Menu:** ALF > Content Creation > Mesh Deformation

Builds a **bending lab** for materials science lessons. A beam (the specimen) lies on supports and is loaded, as in a three-point or four-point bending test. Learners see how it bends and where it's under tension or compression, shown as stress colours, and can look inside it with a cut-away or a section plane.

The lab can show:

- a **calculated** beam: learners change the load, the dimensions and the material and see the result straight away;
- **measured** curves from a real testing machine, imported from a CSV file;
- **simulation results** from a finite element program, such as ANSYS;
- in **AR**, a digital twin that lies over a real testing machine and runs alongside the real test.

:::caution[Work in progress]
The materials are provisional, and the stress values haven't been checked by an expert yet. The lab doesn't predict cracking or permanent bending. Check results before presenting them as real material behaviour, and test on the headset before a lesson.
:::

## The menu entries

| Menu entry | What it does |
|---|---|
| **Author Bending Apparatus** | Adds the bending lab to a scene and sets it up. Start here. |
| **Import Bending CSV Series (3-Point or 4-Point)** | Imports measured force and travel from a testing machine's CSV file. |
| **Import Four-Point CSV Series** | The same importer, set to four-point bending. |
| **Import Simulation JSON** | Imports prepared simulation results. |
| **Author AR Simulation Scenario** | Builds an AR scene that lies over a real testing machine. |

## Quick start

1. Make a lesson scene with [Scene Generation](../scene-generation/index.md).
2. Open **ALF > Content Creation > Mesh Deformation > Author Bending Apparatus**.
3. In step **1 Apparatus**, press **Add apparatus to active scene**.
4. Optional: in step **2 Simulation data**, add measured or simulated data.
5. In step **3 Placement & save**, place the lab and save the scene.

## Guides

1. [Before you start](./how-to/before-you-start.md)
2. [Add a bending lab](./how-to/add-a-bending-lab.md)
3. [Import measured data from a testing machine](./how-to/import-lab-data.md)
4. [Import simulation results](./how-to/import-simulation-results.md)
5. [Build an AR scene for a real testing machine](./how-to/ar-simulation-scenario.md)
