---
title: Troubleshooting
sidebar_position: 8
---

# Troubleshooting

## The board is empty in the editor

That's normal. The cells are only built when the lesson runs. Use **Open Preview Window** in step 1, or the placement preview in step 5, to see it.

## My changes don't show up

Configuration changes apply the **next time you press Play**. While playing, you can use **Rebuild Palette** from the component's menu. See [Update or remove a palette](./update-or-remove.md).

## Poking a cell does nothing

The part in that cell probably has no prefab. Open step **2 Layout** and look for columns with missing prefabs. See [Fill the columns with parts](./fill-the-columns.md).

## The labels are backwards, or the backboard is missing from the front

The board is facing the wrong way. Turn it 180° so its blue Z arrow points at the learners.

This often happens with boards made in an older version of the tool, which had to be turned around by hand to make the labels readable. They need turning back once.

## There are too many parts lying around

:::danger[Known gap: spawned parts are never cleaned up]
There's currently no limit on how many parts learners can take, and no way to clear them. A twelve-cell board can produce about thirty parts per second if a learner keeps poking. In a long session, hundreds of parts can pile up and slow down the headset.
:::

Until this is fixed, restart the lesson to clear the parts.

## The board looks broken or has strange sizes

A size in step **3 Appearance** may contain an invalid value, for example from a paste. Retype the sizes.

## The window shows a different board

With several palettes in one scene, the window connects to the first one it finds. Check which palette step 5 shows.

## I can't attach the board to an object

The **Attached to** field refuses the board itself, anything inside it, and prefabs from the Project window. Drag an object from the **Hierarchy** instead.

## A model in the palette is in an odd pose

Animated (skinned) models are shown in their default pose on the board. The real part appears normally when spawned.
