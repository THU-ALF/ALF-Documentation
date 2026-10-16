---
title: Create the playback for learners
sidebar_position: 4
---

# Create the playback for learners

**Goal:** turn a recording into a playback station: ghost hands, your voice and the machine's reactions, which learners can play, pause and scrub through.

## Steps

1. Open **ALF > Content Creation > Motion > Scenario Authoring**.
2. Under **Step 1: Match Recording to Virtual Machine**, fill in:
   - **Target Virtual Machine**: the machine in the scene;
   - **Motion Clip (JSON)**: your recording;
   - **Voiceover Audio (WAV)**: your voice recording.
3. Press **Load & Inspect Motion Clip**. A **Recording Health & Diagnostic Report** appears: how well each hand was tracked, the length, and tips if something went wrong.
4. Under **Step 2: Map Machine Reaction Events**, check that every recorded machine reaction has a **Target Scene Component**. **Auto-Match Scene Components by Name** fills them in for you.
5. Under **Step 3: Timeline Scrubber & Anchor Calibration**, move the **Playback Time** slider to watch the ghost hands in the Scene view.

   If the hands don't quite touch the switches and buttons, adjust **Anchor Position Offset** and **Anchor Rotation Offset**, or press **Auto-Align Hand to Interaction Point**. **Reset Offset** undoes it.

6. Under **Step 4: Configure Student Visuals & Controls**, set:
   - **Ghost Hand Opacity**: how see-through the hands are;
   - **Loop playback automatically**: start again at the end;
   - **Include student floating UI controls**: play, pause and a timeline for learners.
7. Under **Step 5**, press **Generate Learning Scenario Station**.
8. Press **Save Open Scenes**.

## Result

The scene has a playback station. In the lesson, learners see see-through hands repeat your demonstration on the machine, hear your explanation, and see the machine react at the same moments. With the floating controls, they can pause and scrub to any moment.

## Good to know

- **Changed something?** Press **Re-generate Learning Scenario Station** to update it.
- **Remove it** with **Remove Playback Station from Scene**. The rest of the scene isn't affected.
- **Doesn't work in Play mode.** Stop Play mode to create or change the station.
