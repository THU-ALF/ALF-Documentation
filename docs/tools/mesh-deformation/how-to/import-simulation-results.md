---
title: Import simulation results
sidebar_position: 4
---

# Import simulation results

**Goal:** show the results of a finite element simulation, for example from ANSYS, in the bending lab.

Simulation results show what a calculation alone can't: stresses inside the specimen, around holes, or at many moments during the test. Preparing them takes some knowledge of the simulation program, so this is usually done together with the tech team.

## Steps

1. Open **ALF > Content Creation > Mesh Deformation > Author Bending Apparatus** and choose your lab under **Apparatus to edit**.
2. Go to step **2 Simulation data**.
3. Import the results:
   - **Import ANSYS results…** opens a guided reader for ANSYS result files.
   - **Import simulation JSON…** imports results already converted into ALF's format. The same is in the menu: **ALF > Content Creation > Mesh Deformation > Import Simulation JSON**.
4. Save the imported data in the suggested folder, `Assets/ALF/LocalSimulationData`.
5. Under **Recorded dataset**, choose the imported data. The box below shows what it contains:
   - **Physical time** or **quasi-static progression**: whether the steps are seconds of the test or just load stages.
   - **Volume fields retained**: learners can look inside with the **Section** control. **Surface preview only** means only the outside can be shown.
   - How many **named measurements** it has, and whether the **applied load** is included.

   :::info[Note]
   *Placeholder: Author Bending Apparatus, step 2 Simulation data, with a dataset assigned.*
   :::

6. In step **3 Placement & save**, press **Add recorded XR lesson controls**, then save the scene.

## What learners can do with a recording

| Control | What it does |
|---|---|
| **Play / pause**, **Previous state**, **Next state** | Step through the recorded stages. A single snapshot can't be played. |
| **Next recording** | Switch to another recording, if you assigned several. |
| **Stress field** | Switch between stress components. |
| **Range mode** | **Auto** fits the colours to the current state; **Fixed** keeps them comparable between states. |
| **Section** | Look inside, if the recording has volume data. |
| **Opacity** | Make the surface see-through. This doesn't show values inside. |
| **Measure** | Show the lengths defined in the recording. |
| **Shape -** / **Shape +** | Exaggerate the bending, up to 20×. |
| **Reset view** | Put the specimen back where it was. |

If something isn't in the recording, the control says so instead of showing made-up values.
