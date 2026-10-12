---
title: Troubleshooting
sidebar_position: 6
---

# Troubleshooting

## The Place button is greyed out

Step 1 tells you what's missing:

- **Pick a prefab or model first:** drag a model from the Project window into **Prefab or model**.
- **Pick the object to put it on, or switch to In the world:** you chose **On an object** but didn't drag an object into **Object**.

## I can't see the new object

New objects start at the centre of their space: the centre of the world, which may be far from your room, or the centre of the object they sit on, which may hide them. Press **Find** next to the object, then move it in step **2 Position**.

## Learners can't pick the object up

- **Pick it up and carry it isn't ticked.** Tick it in step **3 Interaction**.
- **The model has nothing to touch.** If the tool warns that it can't measure the model, it has no shape to grab. Ask whoever prepared the model to add a collider.
- **The model already has its own grab setup on one of its parts.** The tool then adds nothing and shows a warning, so the model's own setup is used.

## Some options are greyed out

**Resize it with both hands**, **Can be thrown** and **Falls and collides** only work for objects that can be picked up. Tick **Pick it up and carry it** first.

## A thrown object flies away and never lands

Tick **Falls and collides** too, so it falls to the ground.

## I unticked an option, but learners can still do it

Unticking doesn't remove abilities a model already has, or that were added before. See [Choose what learners can do with an object](./choose-what-learners-can-do.md#good-to-know).

## Steps 2 and 3 are greyed out

No object is selected. Click one in the list, or place one first.

## My changes disappeared

Either the scene wasn't saved, or the changes were made in Play mode. Stop Play mode, make the changes again, and press **Save the scene** in step **4 Save**.
