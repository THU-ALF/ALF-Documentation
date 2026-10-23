---
title: Update the app on the headset
sidebar_position: 6
---

# Update the app on the headset

Use this routine every time you've finished new or changed lessons and want them on the headsets.

1. **Save everything.** Save all open scenes with **Ctrl+S**.
2. **Check the project.** Open **ALF > Utils > Project Status**. If it shows a warning you can't fix, ask the tech team.
3. **Add new lessons to the Scene List.** Open **File > Build Profiles > Scene List** and add any new lesson scenes. The main menu stays at the top. See [Set the scene list](./prepare-unity.md#set-the-scene-list).
4. **Update the main menu.** Open the main menu scene and [update the main menu](../tools/main-menu/how-to/update-the-main-menu.md) so it has a button for every lesson.
5. **Raise the version.** See [Set the app's name and version](./prepare-unity.md#set-the-apps-name-and-version).
6. **Build for the Meta Quest 3.** Switch to the Meta Quest 3 [build profile](./build-profiles.md), check that only **Meta Quest Support** is ticked under OpenXR, and [Build And Run](./build-and-install.md) with a Quest 3 connected.
7. **Build for the PICO 4.** Switch to the PICO 4 [build profile](./build-profiles.md), check that only the **PICO** feature group is ticked, and Build And Run with a PICO 4 connected.

   Or, for steps 6 and 7, use [the quick way](./build-and-install.md#the-quick-way-android-and-run-device): stay on **Android**, choose each headset in **Run Device** in turn, and click **Build And Run**.

8. **Test on both headsets.** Open the app, check that every lesson starts from the main menu, and try one step in each new lesson. Check hand tracking and passthrough on both, since they can behave differently.
9. **Install on the other headsets**, using the Quest 3 `.apk` for Quest 3 headsets and the PICO 4 `.apk` for PICO 4 headsets. See [Install an existing APK on more headsets](./build-and-install.md#install-an-existing-apk-on-more-headsets).


