---
title: Change or remove the warm-up
sidebar_position: 6
---

# Change or remove the warm-up

## Update after changing the lesson

When you add or change lesson content, for example new buttons or objects to pick up:

1. Open **ALF > XR Pre-Training**.
2. In step **2 Modules**, check the ticked exercises. Newly used skills may now be ticked.
3. In step **3 Generate**, press **Regenerate the warm-up**.
4. In step **5 Save**, press **Save the scene**.

Regenerating keeps what you moved on the station, and what you changed in [step 4](./edit-the-steps.md), for exercises that stay ticked. Newly ticked exercises are added, unticked ones removed.

## Change the language or the hint delay

Change **Language** in step 2 or **Hint after (seconds)** in step 3, then press **Regenerate the warm-up**. The new setting only applies after regenerating.

A new language writes every step's text and hint again, in that language. Wording you changed in step 4 is replaced; the panels' look and position are kept.

## Change the wording of a step

See [Edit the practice steps](./edit-the-steps.md).

## Move the station

If the practice objects overlap your lesson's content, or stand in an awkward place:

1. In step **5 Save**, press **Select the station**. It's selected in the Hierarchy and shown in the Scene view.
2. Move it in the Scene view. The practice objects, the panel and the hint move with it.
3. Press **Save the scene**.

In the editor, all practice objects are visible at once and overlap each other. That's expected: during the warm-up, each exercise's objects only appear during its own steps.

## Remove the warm-up

1. In step **5 Save**, press **Remove the warm-up** and confirm with **Yes, remove**.
2. Save the scene.

The practice station and its steps are removed. Your lesson is left exactly as it was. **Ctrl+Z** brings the warm-up back.

## Warm-ups made with the first version of the tool

In the first version, the practice steps were put at the start of the lesson, and Scenario Setup showed them locked. If step 1 says the warm-up was made with an earlier version, press **Regenerate the warm-up** once. The practice steps move out of the lesson into the warm-up's own sequence, and the lesson's steps are numbered from 1 again.
