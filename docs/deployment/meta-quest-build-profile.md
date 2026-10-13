---
title: Meta Quest 3 build profile
sidebar_position: 3
---

# Meta Quest 3 build profile

The project already contains a build profile called **Meta Quest 3**. It holds all the settings the headset needs. You only select it before building.

## Select the profile

1. Open **File > Build Profiles**.
2. In the list on the left, click **Meta Quest 3**.
3. If it isn't marked **Active** yet, click **Switch Profile** and wait until Unity is done.

:::info[Screenshot]
*Placeholder: File > Build Profiles with the Meta Quest 3 profile selected and marked Active.*
:::

## Check the headset settings

The Meta Quest 3 and the PICO 4 share some settings, so check these each time before you build for the Quest 3:

1. Open **Edit > Project Settings > XR Plug-in Management** and click the **Android** tab (the robot icon).
2. **OpenXR** is ticked, and nothing else in the list.
3. Click **OpenXR** in the left column. In the **Android** tab, **Meta Quest Support** is ticked and **PICO** is **not** ticked.

:::info[Screenshot]
*Placeholder: XR Plug-in Management > OpenXR, Android tab, set up for the Meta Quest 3.*
:::

:::caution[Wrong tick, wrong headset]
If PICO is ticked instead of Meta Quest Support, the app may start in a flat window or with a black screen on the Quest 3.
:::

Next: [Build and install](./build-and-install.md).

<details>
<summary>For the tech team: create the Meta Quest 3 profile</summary>

Unity 6 has a built-in **Meta Quest** platform. Its profile installs the **OpenXR** package and sets the headset's Player settings. No Meta SDK is needed.

1. Open **File > Build Profiles** and click **Add Build Profile**.
2. In the **Platform Browser**, choose **Meta Quest**. Leave **Partner Packages** unticked.
3. Click **Add Build Profile**, then rename the profile to **Meta Quest 3**.

The profile overrides these Player settings:

| Setting | Value |
|---|---|
| Graphics API | Vulkan |
| Minimum API Level | Android 10 (API level 29) |
| Target API Level | Android 12L (API level 32) |
| Scripting Backend | IL2CPP |
| Target Architectures | ARM64 |
| Stereo Rendering Mode | Instancing |

Under **XR Plug-in Management > OpenXR** (Android tab), add the **Meta Quest Touch Plus Controller Profile** to **Interaction Profiles**, and tick **Hand Tracking Subsystem** if lessons use hands.

*Placeholder: any other project-specific OpenXR features, for example passthrough for AR lessons.*

Build profiles are saved as files in the project, so commit the profile and everyone gets it.

</details>
