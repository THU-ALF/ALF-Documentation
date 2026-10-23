---
title: Troubleshooting
sidebar_position: 4
---

# Troubleshooting

## Generate YouTube Player is greyed out

- **No video ID was detected.** Paste the link again; the box must show the video ID.
- **Video Player Prefab is empty.** A file the tool needs is missing from the project. Ask the tech team to check the ALF installation.

## The video check says the video can't be embedded

- **The video is private.** Set it to **Unlisted** or **Public** in YouTube Studio.
- **Embedding is switched off.** In YouTube Studio, open the video's details and switch on **Allow embedding**. For someone else's video, choose another one.

Even a video that passes the check can occasionally be blocked on the headset, for example in some countries.

## The video check doesn't answer

The computer can't reach YouTube. Check the internet connection. The tool asks again after half a minute. You can still place the screen; check the video later.

## The screen stays empty in the Editor

That's expected. Videos play only in the app on the headset, not in the Unity Editor or over Quest Link. The screen says so.

## The screen says the video is taking long to load, or could not be loaded

- **The headset is offline.** Connect it to Wi-Fi, then press **Play** to try again.
- **The network is slow.** Wait a moment and press **Play** again.

## The screen says "This video was not found"

The video was deleted or set to private. Choose another video in the tool. See [Change a screen](./change-or-remove.md#change-a-screen).

## The screen says "error 153"

A setting on the screen (its page address) is wrong. The tool shows a red box when you select the screen. Ask the tech team to fix it.

## The video plays without sound

If a video doesn't start with sound, the player starts it muted. Learners press **Play** or **Unmute** to get the sound back.

## Learners can't press the play controls

Point at the screen with the controller ray. If that doesn't work, the scene may be missing an Event System. Ask whoever set up the scene.

## The screen is in the floor

Choose the **Player Size** first, then set the **Spawn Coordinates**, or move the screen up in the Scene view.

## The window only shows a warning

The scene is playing. Stop Play mode, and the tool works again.
