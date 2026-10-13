---
title: Troubleshooting
sidebar_position: 7
---

# Troubleshooting

## The headset doesn't appear in Run Device

- **Developer mode or USB debugging is off.** See [Prepare the headset](./prepare-the-headset.md).
- **The debugging prompt wasn't confirmed.** Put the headset on and look for **Allow USB debugging?** If it doesn't come back, unplug and plug in the cable again.
- **The cable only charges.** Try a USB-C data cable.
- **Check from the command line.** Run `adb devices`. If the headset shows as `unauthorized`, confirm the prompt in the headset. If it isn't listed at all, it's a cable or driver problem.

## The app isn't in the headset's library

It's under **Unknown sources**. See [Find the app on the headset](./build-and-install.md#find-the-app-on-the-headset).

## The app starts in a flat window or with a black screen

Usually the wrong OpenXR setup for this headset:

- Only **OpenXR** should be ticked under **XR Plug-in Management > Android**.
- Only the feature group for **this** headset should be ticked: **Meta Quest Support** for the Meta Quest 3, **PICO** for the PICO 4.
- The `.apk` was built for the other headset. Install the one built with this headset's profile.

## A lesson button in the main menu does nothing

The lesson's scene is missing from the **Scene List**. Add it and build again. See [Set the scene list](./prepare-unity.md#set-the-scene-list).

## A lesson opens with the wrong controls (hands instead of controllers, or VR instead of AR)

The lesson's player setup comes from the scene. Change it with [Scene Generation: update an existing scene](../tools/scene-generation/how-to/update-an-existing-scene.md), then [update the main menu](../tools/main-menu/how-to/update-the-main-menu.md) and build again.

## The install fails with "INSTALL_FAILED_UPDATE_INCOMPATIBLE" or a version error

- The app on the headset was built on another computer with a different signing key. Uninstall it on the headset first, then install again.
- The new build has a **lower Bundle Version Code** than the installed one. Raise it and build again.
