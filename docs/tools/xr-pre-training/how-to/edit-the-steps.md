---
title: Edit the practice steps
sidebar_position: 4
---

# Edit the practice steps

**Goal:** change what a practice step's panel says, how it looks, where it stands, and the hint a stuck learner gets.

The exercises themselves (which objects appear and what the learner has to do) are set by the tool. You can change everything the learner reads.

## Steps

1. Open **ALF > XR Pre-Training** and go to step **4 Steps**.
2. On the left, **Practice steps** lists the warm-up's steps. Click one.
3. On the right, you see the step's editor:

   | Section | What you can do |
   |---|---|
   | **Learner moves on by** | Shows how the step finishes, for example *Pressing Next on the panel*, *Pressing a button* or *Doing the exercise - the step checks it itself*. Read-only. |
   | **Panel** | Change the text and the look of the instruction panel, as in [Scenario Setup](../../scenario-setup/how-to/write-the-instructions.md). |
   | **Hint when stuck** | The text shown beside the panel when the learner hasn't finished the step after the hint delay. Leave it empty for no hint. |
   | **Placement** | Where the panel stands. **Preview & Adjust** opens a preview where you can move it. |

   :::info[Note]
   *Placeholder: step 4 Steps, with the list of practice steps and the editor of one step.*
   :::

4. When you've changed something, **Save step changes** appears in green. Press it.
5. Go to step **5 Save** and press **Save the scene**.

**Discard my changes** throws away the changes you haven't saved yet.

## Do your changes survive Regenerate?

Mostly yes. When you press **Regenerate the warm-up** later:

- **Kept:** your texts, hints, panel looks and panel positions, for every exercise that stays ticked.
- **Written again:** the texts and hints, if you changed the **Language**, if the player setup changed (for example from controllers to hands), or if you tick **Write all texts again** in step 3. The panels' look and position are still kept.
- **Removed:** the steps of an exercise you unticked.

Step 3 tells you before regenerating whether your changes will be kept.

## Good to know

- **Save before Regenerate.** If you have unsaved changes in step 4, the tool asks you to save them first.
- **Changed somewhere else?** If the steps were changed by **Ctrl+Z** or by a [text import](../../text-import-export/index.md) while you had unsaved changes, step 4 shows a warning. **Load the scene's steps** replaces your unsaved changes with what's in the scene.
