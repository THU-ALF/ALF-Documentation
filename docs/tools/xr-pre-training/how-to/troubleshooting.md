---
title: Troubleshooting
sidebar_position: 7
---

# Troubleshooting

## "Nothing can be added yet: this scene has no lesson sequence"

The scene has no lesson steps. Build the lesson with [Scenario Setup](../../scenario-setup/index.md) first. **Open Scenario Setup Tool** in step 1 takes you there.

## An exercise is greyed out

It doesn't fit the scene's player setup. The reason is shown next to it, for example *Needs AR* or *Rig unknown*. Check the player setup with [Scene Generation](../../scene-generation/index.md).

## The instructions talk about both hands and controllers

The tool couldn't tell which player setup the scene uses, for example because the scene has none or more than one. Give the scene one player setup with [Scene Generation](../../scene-generation/index.md), then **Regenerate the warm-up**.

## Step 1 says the instructions no longer match the player setup

The player setup changed after the warm-up was added. Press **Regenerate the warm-up**. The texts and hints are written again for the new setup.

## Step 1 says the warm-up was made with an earlier version

Press **Regenerate the warm-up** once. See [Warm-ups made with the first version](./change-or-remove.md#warm-ups-made-with-the-first-version-of-the-tool).

## The warm-up is longer than five minutes

Untick exercises your learners already know, in step 2.

## Practice objects overlap my lesson content

Move the station. See [Move the station](./change-or-remove.md#move-the-station). The overlap warning is a hint: check on the headset that everything is within reach.

## Regenerate asks me to save first

You have unsaved changes in step 4. Press **Save step changes** there, or **Discard my changes**, then regenerate.

## My wording in step 4 was replaced

Regenerating with a new language, a new player setup, or **Write all texts again** ticked writes all texts and hints again. Step 3 warns about this before you regenerate. **Ctrl+Z** brings your wording back.

## Scenario Setup refuses to edit the practice steps

That's intended. Scenario Setup only edits the lesson. Edit the practice steps in step 4 of this tool.

## Pressing Next does nothing during an exercise

That's intended: exercises that check what the learner does wait until it's done. The instruction and the hint after the delay explain what to do.

## The practice objects are plain grey

They're simple shapes on purpose. Give them materials in Unity if you like. They stay editable in their tools.
