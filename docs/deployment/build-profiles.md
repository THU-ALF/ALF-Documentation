---
title: Build profiles
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Build profiles

The project already contains a build profile for each headset: **Meta Quest 3** and **PICO 4**. A profile holds all the settings its headset needs. You only select the right one before building. Choose your headset in the tabs below.

## Select the profile

<Tabs groupId="headset">
<TabItem value="quest" label="Meta Quest 3" default>

1. Open **File > Build Profiles**.
2. In the list on the left, click **Meta Quest 3**.
3. If it isn't marked **Active** yet, click **Switch Profile** and wait until Unity is done.

:::info[Note]
*Placeholder: File > Build Profiles with the Meta Quest 3 profile selected and marked Active.*
:::

</TabItem>
<TabItem value="pico" label="PICO 4">

1. Open **File > Build Profiles**.
2. In the list on the left, click **PICO 4**.
3. If it isn't marked **Active** yet, click **Switch Profile** and wait until Unity is done.

:::info[Note]
*Placeholder: File > Build Profiles with the PICO 4 profile selected and marked Active.*
:::

</TabItem>
</Tabs>

## Check the headset settings

The Meta Quest 3 and the PICO 4 share some settings, so check these each time before you build:

<Tabs groupId="headset">
<TabItem value="quest" label="Meta Quest 3" default>

1. Open **Edit > Project Settings > XR Plug-in Management** and click the **Android** tab (the robot icon).
2. **OpenXR** is ticked, and nothing else in the list.
3. Click **OpenXR** in the left column. In the **Android** tab, **Meta Quest Support** is ticked and **PICO** is **not** ticked.

:::info[Note]
*Placeholder: XR Plug-in Management > OpenXR, Android tab, set up for the Meta Quest 3.*
:::

:::caution[Wrong tick, wrong headset]
If PICO is ticked instead of Meta Quest Support, the app may start in a flat window or with a black screen on the Quest 3.
:::

</TabItem>
<TabItem value="pico" label="PICO 4">

1. Open **Edit > Project Settings > XR Plug-in Management** and click the **Android** tab (the robot icon).
2. **OpenXR** is ticked, and nothing else in the list.
3. Click **OpenXR** in the left column. In the **Android** tab, **PICO** is ticked and **Meta Quest Support** is **not** ticked.

:::info[Note]
*Placeholder: XR Plug-in Management > OpenXR, Android tab, set up for the PICO 4.*
:::

:::caution[Wrong tick, wrong headset]
If Meta Quest Support is ticked instead of PICO, the app may start in a flat window or with a black screen on the PICO 4.
:::

</TabItem>
</Tabs>

Next: [Build and install](./build-and-install.md).

## For the tech team: create the profiles

<details>
<summary>Show the one-time setup</summary>

<Tabs groupId="headset">
<TabItem value="quest" label="Meta Quest 3" default>

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

</TabItem>
<TabItem value="pico" label="PICO 4">

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

</TabItem>
</Tabs>

Build profiles are saved as files in the project, so commit them and everyone gets them.

</details>
