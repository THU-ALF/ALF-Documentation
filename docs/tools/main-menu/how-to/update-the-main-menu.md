---
title: Update the main menu
sidebar_position: 3
---

# Update the main menu

**Goal:** add, remove or reorder lessons in an existing main menu, or change its title or player setup.

Update the menu whenever you add a lesson, rename a lesson's scene, or change a lesson's player setup.

## Steps

1. **Open the main menu scene:** double-click it in the Project window, for example `Assets/ALF-Generated/Scenes/Main Menu`.
2. Open **ALF > Main Menu Setup**. It shows **Active Main Menu detected!** and lists the lessons that are already in the menu.
3. Make your changes:
   - **Add a lesson:** press **Add Scene** and drag the scene file into the new row.
   - **Remove a lesson:** press **X** on its row.
   - **Change the order:** use **▲** and **▼**.
   - **Change the title or player setup:** edit **Custom Title** or **Menu Rig Mode**.
4. Press **Update Active Main Menu Scene**.
5. Save the scene with **Ctrl+S**.

## Result

The menu's buttons are rebuilt from the list. New lessons are also added to the app's list of scenes.

## Good to know

- **Open the menu scene first.** If a different scene is open, the tool offers to create a new menu instead of updating yours.
- **A lesson's player setup is read when you update.** If you changed a lesson from controllers to hands, updating the menu makes its button open the lesson with hands.
