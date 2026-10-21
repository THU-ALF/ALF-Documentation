---
title: Add a warm-up to a lesson
sidebar_position: 2
---

# Add a warm-up to a lesson

**Goal:** put a short practice session in front of your lesson.

## Steps

1. Open the lesson scene, then **ALF > XR Pre-Training**.
2. In step **1 Lesson**, check:
   - **Lesson scene**: the scene you want.
   - **Learners will use**: the player setup, for example VR with controllers. **Found from** says where the tool read it.
   - **Lesson steps**: how many steps your lesson has.

   If there's no lesson yet, press **Open Scenario Setup Tool** and build it first.

3. In step **2 Modules**, look at the list of exercises:
   - Exercises your lesson uses are **already ticked**. Each row says what it practises, what the tool found in your lesson, and about how long it takes.
   - **Buttons** is always included.
   - Greyed-out exercises don't fit the player setup. The reason is shown next to them.
   - **Warm-up takes** shows the total length. Keep it under five minutes: untick exercises your learners already know.
4. Under **Language**, choose **Deutsch** or **English** for the instructions.
5. In step **3 Generate**, set **Hint after (seconds)**: how long a learner can be stuck before they get extra help. 15 seconds by default.
6. Check the notes under **What this adds**. If practice objects overlap your lesson's content, the tool warns you. See [Move the station](./change-or-remove.md#move-the-station).
7. Press **Add the warm-up**.
8. Press **Save the scene**.

## Result

The scene has a practice station where the learner starts, and the practice steps run before your lesson. In [Scenario Setup](../../scenario-setup/index.md), they're shown first, labelled **Pre-training** and locked. Your own steps follow and stay editable.

Try it in Play mode or on the headset. See [What learners experience](./what-learners-experience.md).

## Good to know

- **Undo works.** Adding, regenerating and removing are each one step with **Ctrl+Z**.
- **The tool remembers your choice.** Reopening it shows the exercises you ticked.
- **Practice buttons can be adjusted** in [Button Injection](../../button-injection/index.md), and the practice cube in the [Object Spawner](../../object-spawner/index.md), like any other.
