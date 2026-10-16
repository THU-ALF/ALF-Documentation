---
title: Project Status
sidebar_position: 2
---

# Project Status

**Menu:** ALF > Utils > Project Status

Checks whether the **project settings** and the **headset** meet what the ALF features need, and fixes what it can. At the moment it checks the settings for **QR code tracking**, which [Positioning Setup](../positioning/index.md) uses to line up a model with a real object.

## Check the project

1. Open **ALF > Utils > Project Status**.
2. Under **Positioning: marker tracking**, each check shows whether it passes:
   - the versions of the packages needed,
   - **OpenXR loader active for Android**,
   - **OpenXR feature 'Spatial Entities: Markers' enabled for Android**,
   - **QR code detection requested**,
   - an anchor feature,
   - the Android permissions,
   - the setting for testing over Quest Link (**Play mode over Quest Link**).
3. If a check fails, press **Enable Marker Feature** to switch on what's needed, for headset builds and for Play mode over Quest Link.
4. **Open XR Plug-in Management** opens the project settings page where these features live, if you want to look yourself.

The window re-reads the settings regularly, so fixed checks turn green on their own.

## Headset requirements

QR code tracking needs:

- a **Meta Quest 3 or 3S** with Horizon OS v83 or newer, or an **Android XR** headset;
- **QR codes** up to version 10, printed **100 to 150 mm** wide;
- **good light**, within a few metres of the codes.

Tracking is slow on purpose: the codes are used once to find the position, then the model stays in place.

:::tip[Not sure what to change?]
If a check stays red after **Enable Marker Feature**, ask the tech team. Changing XR settings by hand can affect the whole project.
:::
