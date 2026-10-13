---
title: Deployment
sidebar_label: Overview
---

# Deployment

When your lessons are ready, you put them on the headsets yourself. This section shows how, step by step. You don't need to change any project settings: the tech team has prepared the project, and you only select the right headset and press build.

:::tip[Where the tech team comes in]
A few pages have a collapsed **For the tech team** box. That's one-time setup the tech team does when preparing the project. You can skip those boxes.
:::

Deploying turns the Unity project into an app and installs it on a headset over a USB cable. The project is used on two headsets, the **Meta Quest 3** and the **PICO 4**. Both use **OpenXR**, so the lessons are the same on each. Only the **build profile** differs. That's a saved set of settings for one kind of headset. You build the app twice, once for each headset:

| Headset | Build profile to select | Guide |
|---|---|---|
| **Meta Quest 3** | **Meta Quest 3** | [Meta Quest 3 build profile](./meta-quest-build-profile.md) |
| **PICO 4** | **PICO 4** | [PICO 4 build profile](./pico-build-profile.md) |

:::tip[The quick way]
You can also build for both headsets straight from the **Android** platform: choose the connected headset in **Run Device** and click **Build And Run**. See [The quick way: Android and Run Device](./build-and-install.md#the-quick-way-android-and-run-device).
:::

The steps are written for **Unity 6.3**, the version the project uses.

## The order

Once per computer and headset (or ask the tech team):

1. [Prepare Unity](./prepare-unity.md): Android build support, switching the project to Android, and the scene list.
2. [Prepare the headset](./prepare-the-headset.md): developer mode and USB debugging, then check that Unity sees it.
3. Get to know the two build profiles: [Meta Quest 3](./meta-quest-build-profile.md) and [PICO 4](./pico-build-profile.md).

Every time the lessons change:

4. [Build and install](./build-and-install.md) the app over USB, once with each profile.
5. Follow the [update routine](./update-the-app.md) so nothing gets left out.

Something not working? See [Troubleshooting](./troubleshooting.md).
