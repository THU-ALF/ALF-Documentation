---
title: Troubleshooting
sidebar_position: 6
---

# Troubleshooting

## "Nothing can be added yet: this scene has no lesson sequence"

The scene has no lesson steps. Build the lesson with [Scenario Setup](../../scenario-setup/index.md) first. **Open Scenario Setup Tool** in step 1 takes you there.

## An exercise is greyed out

It doesn't fit the scene's player setup. The reason is shown next to it, for example *Needs AR* or *Rig unknown*. Check the player setup with [Scene Generation](../../scene-generation/index.md).

## The instructions talk about both hands and controllers

The tool couldn't tell which player setup the scene uses, for example because the scene has none or more than one. Give the scene one player setup with [Scene Generation](../../scene-generation/index.md), then **Regenerate the warm-up**.

## Step 1 says the instructions no longer match the player setup

The player setup changed after the warm-up was added. Press **Regenerate the warm-up**.

## The warm-up is longer than five minutes

Untick exercises your learners already know, in step 2.

## Practice objects overlap my lesson content

Move the station. See [Move the station](./change-or-remove.md#move-the-station). The overlap warning is a hint: check on the headset that everything is within reach.

## Scenario Setup shows practice steps with "no button chosen" warnings

The practice station was deleted by hand, so the steps are no longer recognised as practice steps. Either delete those steps in Scenario Setup, or **Regenerate the warm-up** here.

## The station stayed after removing the lesson in Scenario Setup

Removing the whole lesson in Scenario Setup doesn't remove the station. Remove it here with **Remove the warm-up**.

## Pressing Next does nothing during an exercise

That's intended: exercises that check what the learner does wait until it's done. The instruction and the hint after the delay explain what to do.

## The practice objects are plain grey

They're simple shapes on purpose. Give them materials in Unity if you like. They stay editable in their tools.
