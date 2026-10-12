---
title: Explode only part of a machine
sidebar_position: 7
---

# Explode only part of a machine

**Goal:** make one part of a larger machine come apart, such as only the engine of a car, or set up several machines in one scene.

## Steps

1. In the **Hierarchy**, expand your machine and find the object that holds the part you want, for example `Engine`.
2. In the Exploded View window, press **+ Add a new exploded view**.
3. In step **1 Model**, drag that object (not the whole machine) into the model field.
4. Continue as in [Make a model come apart](./make-a-model-come-apart.md).

Only the pieces inside that object move. The rest of the machine stays still, and the distances are worked out from the size of that part alone.

To set up another part or another machine, press **+** again. Each one gets its own row in the list and can have its own trigger.

## Rule: one piece, one exploded view

Two exploded views must never include the same piece. For example, you can't have one on the whole car **and** one on its engine, because the engine's pieces would belong to both.

The tool refuses to save this, and tells you which other exploded view is in the way. Instead, use exploded views on separate parts that don't contain each other, such as the engine and the gearbox.

## Good to know

- **Pressing +** keeps your settings from the last model, so a second machine can be set up the same way quickly. The model itself is cleared.
- **Dragging in a model that already has an exploded view** switches to editing that one, so you never overwrite one without noticing.
- **The rest of the machine is invisible to the tool**, so pieces may move into it. Choosing the **half-sphere pointing up** direction usually helps. See [Adjust how the model comes apart](./adjust-the-explosion.md#tips).
