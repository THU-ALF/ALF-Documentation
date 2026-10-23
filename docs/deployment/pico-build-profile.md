---
title: PICO 4 build profile
sidebar_position: 4
draft: true
---

# PICO 4 build profile

The project already contains a build profile called **PICO 4**. It holds all the settings the headset needs. You only select it before building.

## Select the profile

1. Open **File > Build Profiles**.
2. In the list on the left, click **PICO 4**.
3. If it isn't marked **Active** yet, click **Switch Profile** and wait until Unity is done.

:::info[Note]
*Placeholder: File > Build Profiles with the PICO 4 profile selected and marked Active.*
:::

## Check the headset settings

The PICO 4 and the Meta Quest 3 share some settings, so check these each time before you build for the PICO 4:

1. Open **Edit > Project Settings > XR Plug-in Management** and click the **Android** tab (the robot icon).
2. **OpenXR** is ticked, and nothing else in the list.
3. Click **OpenXR** in the left column. In the **Android** tab, **PICO** is ticked and **Meta Quest Support** is **not** ticked.

:::info[Note]
*Placeholder: XR Plug-in Management > OpenXR, Android tab, set up for the PICO 4.*
:::

:::caution[Wrong tick, wrong headset]
If Meta Quest Support is ticked instead of PICO, the app may start in a flat window or with a black screen on the PICO 4.
:::

Next: [Build and install](./build-and-install.md).

<details>
<summary>For the tech team: create the PICO 4 profile</summary>

Unity's OpenXR package doesn't support the PICO 4 by itself. Install PICO's OpenXR plug-in first:

1. Download the **PICO Unity OpenXR** package from PICO's developer website.
2. In **Window > Package Manager**, click **+**, choose **Install package from disk** and select its `package.json`.

*Placeholder: the PICO OpenXR package version the project uses, and where the team keeps a copy.*

Then create the profile:

1. Open **File > Build Profiles**, click **Add Build Profile**, choose **Android** and add it.
2. Rename the profile to **PICO 4**.
3. Under **Player Settings Overrides**, set:

| Setting | Value |
|---|---|
| Minimum API Level | Android 10 (API level 29) |
| Scripting Backend | IL2CPP |
| Target Architectures | ARM64 only |
| Graphics API | *Placeholder: OpenGLES3 or Vulkan, as used by the project.* |

Under **XR Plug-in Management > OpenXR** (Android tab), add the **PICO4 Touch Controller Profile** to **Interaction Profiles**.

Build profiles are saved as files in the project, so commit the profile and everyone gets it.

</details>
