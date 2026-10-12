---
title: Create the main menu
sidebar_position: 2
---

# Create the main menu

**Goal:** make the start scene of your app, with a button for every lesson.

## Steps

1. Open **ALF > Main Menu Setup**.

   ![ALF menu with Main Menu Setup highlighted](./img/alf-dropdown-main-menu.png)

2. Choose the **Menu Rig Mode**: the player setup for the menu itself. See [VR or AR for the menu](./before-you-start.md#vr-or-ar-for-the-menu).

   ![Main Menu Setup window with three lessons added](./img/main-menu-setup-editor.png)

3. Under **Menu Customization**, type a **Custom Title**, for example `Maintenance training`.
4. Under **Included Use-Case Scenes**, add your lessons:
   1. Press **Add Scene**. An empty row appears.
   2. Drag the lesson's scene file from the **Project window** into the row.
   3. Check the box next to it. It shows the lesson's player setup, for example *VR Controllers*.
   4. Repeat for each lesson.
5. Put the lessons in the order they should appear, with **▲** and **▼**. To take one out, press **X**.
6. Optional: tick **Use Custom Save Location (Save As...)** to choose where the menu scene is saved.
7. Press **Generate New Main Menu Scene**.

## Result

- A new scene called `Main Menu` is saved in `Assets/ALF-Generated/Scenes`, or where you chose.
- It contains the menu panel with your title and one button per lesson, the player setup and, for VR, a room.
- The menu and all its lessons are added to the app's list of scenes (the **Build Settings**), so they're included when the app is built.

![The generated main menu in the Scene view](./img/main-menu-setup-scene.png)

## Good to know

- **A red box next to a lesson** means the tool couldn't find a player setup in that scene (*No Player Detected*). Give the lesson one with [Scene Generation](../../scene-generation/how-to/update-an-existing-scene.md) first.
- **Lessons appear in the list order.** The first row is the top button.
