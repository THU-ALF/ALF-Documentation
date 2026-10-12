---
title: Troubleshooting
sidebar_position: 9
---

# Troubleshooting

## The tool refuses my model

- **It says the model is a single mesh.** The model is one solid object with no separate pieces, so there's nothing to pull apart. It needs to be exported again with its parts kept separate. See [Check your model first](./before-you-start.md#check-your-model-first).
- **It says I dragged it from the Project window.** Drag the model from the **Hierarchy** instead.
- **It says another exploded view already uses these pieces.** Two exploded views can't share a piece. See [Explode only part of a machine](./explode-part-of-a-machine.md#rule-one-piece-one-exploded-view).

## Steps 2 to 6 are locked

Step 1 doesn't have a model that can come apart yet. Read the message in step 1; it says what's missing.

## Nothing moves

- **How far apart is zero.** Set a distance in step 2.
- **The window warns about pieces with physics.** Pieces with active physics fight against the explosion. Ask whoever prepared the model to make them kinematic.
- **In Play mode, the model opens a moment later than expected.** For large models, the layout may still be being worked out when the scene starts. The model opens as soon as it's ready.

## Pieces overlap when the model is open

Step 3 reports overlaps and their cause:

| Reported as | Try this |
|---|---|
| Involving a very big piece | Change how very large pieces are handled, under **Advanced settings**. |
| Within one group | Increase *How far apart*, or turn off grouping under **Advanced settings**. |
| Anything else | Increase *How far apart*, or reduce *Space between pieces*. |

## Pieces pass through each other while opening

Only the **fully open** arrangement is guaranteed to be free of overlaps. Opening outer pieces first avoids most clashes along the way, but a piece can still briefly pass through a neighbour. This is a known limitation.

## Pieces end up outside a housing they could fit inside

The tool treats every piece as a solid box, including hollow ones like housings. Pieces inside a housing are pushed fully clear of it. This is a known limitation.

## A piece jumped back to an old position

You moved it after saving. Press **Save into the scene** again in step 6 to keep the new position. See [If you moved a piece of the model](./edit-or-remove.md#if-you-moved-a-piece-of-the-model).

## Learners can't pick up a piece

- **The model isn't fully open.** Pieces can only be grabbed when it is.
- **The piece is smaller than *Smallest pickable piece*** under **Advanced settings**.
- **The piece already had a special collider** (a "trigger" collider) before the tool was used. Such pieces can't be grabbed. Ask whoever prepared the model.

## The model doesn't open at its lesson step any more

The lesson was probably regenerated in the Scenario Setup Tool without pressing **Load Data From Targets** first. Set the trigger again in step 5 and save. See [Open the model at a lesson step](./open-at-a-lesson-step.md).

## Two models don't move at all, and there are errors naming each other

Two exploded views share a piece, so both have switched themselves off to protect the model. Remove one of them, or point them at parts that don't overlap.

## The button is in a strange place

Press **Put it beside the model** in step 5 to move it back next to the model.

## The headset runs slowly when the model is open

Many grabbable pieces are expensive. Raise *Smallest pickable piece* under **Advanced settings**, or turn off picking up in step 4.
