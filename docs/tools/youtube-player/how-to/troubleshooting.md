---
title: Troubleshooting
sidebar_position: 3
---

# Troubleshooting

## Generate YouTube Player is greyed out

- **No video ID was detected.** Paste the link again; the box must say **Video ID detected**.
- **Video Player Prefab is empty.** A file the tool needs is missing from the project. Ask whoever maintains the project to check the ALF installation.

## The screen stays black in the headset

- **The headset is offline.** YouTube videos need an internet connection.
- **The video can't be embedded.** Some YouTube videos are blocked from playing outside YouTube by their owner. Try another video.

## Learners can't press the play controls

Point at the screen with the controller ray. If that doesn't work, the scene may be missing an Event System. Ask whoever set up the scene.

## The screen is in the floor

Choose the **Player Size** first, then set the **Spawn Coordinates**, or move the screen up in the Scene view.

## The window only shows a warning

The scene is playing. Stop Play mode, and the tool works again.
