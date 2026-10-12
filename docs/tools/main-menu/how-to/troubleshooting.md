---
title: Troubleshooting
sidebar_position: 4
---

# Troubleshooting

## "No use-case scenes added. Buttons will not be generated."

The lesson list is empty. Press **Add Scene** and drag a lesson's scene file into the new row.

## A lesson's box is red: "No Player Detected" or "No Scene Assigned"

- **No Scene Assigned:** the row is empty. Drag a scene file into it, or remove the row with **X**.
- **No Player Detected:** the scene has no player setup, so the button wouldn't know how to open it. Add one with [Scene Generation](../../scene-generation/how-to/update-an-existing-scene.md), then come back.

## A button has the wrong text

The button shows the scene's file name. Rename the scene file in the Project window, then [update the main menu](./update-the-main-menu.md).

## A new lesson is missing from the menu

The menu was made before the lesson. [Update the main menu](./update-the-main-menu.md) and add the lesson.

## The tool wants to create a new menu instead of updating mine

The menu scene isn't the one that's open. Open the main menu scene first, then open the tool again.

## The app starts in a lesson instead of the menu

The app starts with the first scene in its list of scenes. Open **File > Build Profiles** (called **Build Settings** in older Unity versions), and drag the main menu scene to the top of the scene list.

## "CRITICAL: Could not find Menu Canvas"

A file the tool needs is missing from the project. Ask whoever maintains the project to check the ALF installation.

## The window only shows a warning

The scene is playing. Stop Play mode, and the tool appears again.
