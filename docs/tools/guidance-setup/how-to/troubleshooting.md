---
title: Troubleshooting
sidebar_position: 4
---

# Troubleshooting

## The generate and remove buttons don't work, and a message mentions a lesson sequence

The scene has a scenario made with Scenario Setup, which already controls these panels. Changing them here would break it. Use **ALF > Scenario Setup Tool** instead. See [Update or remove a scenario](../../scenario-setup/how-to/update-or-remove.md).

## Tab 3 lists warnings

Each warning names the step it's in:

- **No video ID could be read from this URL:** copy the link again from YouTube.
- **A panel on an object, but no object chosen:** drag an object into **Attachment Target**, or choose another **Placement Mode**.

## A panel is blank

The step has no content. Unlike Scenario Setup, this tool doesn't warn about it, so check that every step has text, an image or a video.

## My changes don't appear in the scene

Changes in tabs 1 and 2 only reach the scene when you press **Update Existing Guidance System** in tab **3 Generate**. Then save the scene.

## The learner can't find the panel

Choose **Player Attached** as the **Placement Mode**, so the panel appears in front of the learner. See [Place the instruction panel](../../scenario-setup/how-to/place-the-instructions.md).

## The video panel is blank

The headset needs an internet connection to play YouTube videos. Also check that the tool showed **Video ID detected** for the link.

## The window only shows a warning

The scene is playing. Stop Play mode, and the tool works again.
