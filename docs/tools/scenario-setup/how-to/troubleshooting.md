---
title: Troubleshooting
sidebar_position: 9
---

# Troubleshooting

## Tab 3 lists problems

Tab **3 Generate** lists everything that would stop the lesson from working, with the step number. The most common ones:

| Problem | Fix |
|---|---|
| *Step … waits for a flat button, but none is chosen* | Pick the button in the step's **Button** list, or choose another **Trigger Method**. |
| *Step … waits for a hand-pressable button, but none is chosen* | The same, for push buttons. |
| *Step … puts its destination on an object, but no object is chosen* | Drag an object into the step's **Attachment Target** under **Completion Trigger**. |
| *Step … attaches its canvas to an object, but no object is chosen* | Drag an object into **Attachment Target** under **Guidance & UI**, or choose another **Placement Mode**. |
| *Step … shows a video, but no video link is set* | Paste a YouTube link into **YouTube URL**. |
| *Step … shows an image, but none is chosen* | Drag a picture into **Source Image**. |
| *Step … has no text* | Type the instructions into **Text Content (Editable)**. |

## My button isn't in the Button list

- **It wasn't placed with Button Injection.** Only buttons placed with [Button Injection](../../button-injection/index.md) are listed.
- **The wrong trigger method is chosen.** Flat buttons are listed under **Press a flat button**, push buttons under **Press a hand-pressable button**.

## The learner can't move on

- **The step waits for something else.** Check its **Trigger Method**. Only *Press Next on the guidance canvas* uses the **Next** button.
- **A flat button doesn't react.** The scene needs an Event System. See [Button Injection: Troubleshooting](../../button-injection/how-to/troubleshooting.md).
- **The place to reach is too small or out of reach.** Make the **Radius (Meters)** bigger, or move the zone with **Preview & Adjust Zone**.

## My changes don't appear in the scene

Changes in tabs 1 and 2 only reach the scene when you press **Update Existing Scenario System** in tab **3 Generate**. Then save the scene.

## The video panel is blank

- **No video ID was detected.** Copy the link again from YouTube. See [Write the instructions for a step](./write-the-instructions.md#video).
- **The headset is offline.** Videos need an internet connection.

## The window only shows a warning

The scene is playing. Stop Play mode, and the tool works again.
