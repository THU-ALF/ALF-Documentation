---
title: Build and install
sidebar_position: 5
---

# Build and install

There are two ways to build. Both install the app over USB.

| Way | When to use it |
|---|---|
| [**Android + Run Device**](#the-quick-way-android-and-run-device) | The quickest way. One setup for both headsets: you only pick the connected headset. |
| [**Headset build profile**](#build-with-a-headset-profile) | When the tech team has prepared a separate profile per headset. |

## The quick way: Android and Run Device

With the project switched to **Android** (see [Switch the project to Android](./prepare-unity.md#switch-the-project-to-android)), Unity lists every connected headset, Meta Quest 3 and PICO 4 alike, in **Run Device**.

1. Connect the headset by USB and put it on, or keep it awake. Confirm the **Allow USB debugging?** prompt if it appears.
2. Open **File > Build Profiles**. Under **Platforms**, click **Android** and check that it's marked **Active**.
3. Next to **Run Device**, click **Refresh**, then choose the headset from the list.
4. **Check the headset's XR setting.** Open **Edit > Project Settings > XR Plug-in Management > OpenXR** and click the **Android** tab. The feature for the connected headset must be ticked: **Meta Quest Support** for the Meta Quest 3, **PICO** for the PICO 4.
5. Click **Build And Run** and choose a folder for the `.apk` file, for example `Builds/Quest3` or `Builds/PICO4`.

Unity builds the app, installs it on the headset and starts it. The first build takes a while; later builds are faster.

To build for the other headset, connect it, choose it in **Run Device**, check its XR setting, and click **Build And Run** again.

## Build with a headset profile

1. Connect the headset by USB and put it on, or keep it awake.
2. Open **File > Build Profiles** and select the profile for this headset ([Meta Quest 3](./meta-quest-build-profile.md) or [PICO 4](./pico-build-profile.md)). Make sure it's the **active** profile.
3. In **Run Device**, choose the headset.
4. Click **Build And Run**. Choose a folder for the `.apk` file, for example `Builds/Quest3` or `Builds/PICO4`. Use a separate folder per headset, because the two apps aren't interchangeable.

Unity builds the app, installs it on the headset and starts it. The first build takes a while; later builds are faster.

:::info[Note]
*Placeholder: Build Profiles with Run Device set to the headset and the Build And Run button.*
:::

## Install an existing APK on more headsets

You can also put the same app on more headsets without building again: connect the next headset and click **Build And Run** once more. Unity is faster the second time.

<details>
<summary>For the tech team: install with adb</summary>

To install a saved `.apk` without opening Unity, use Android's `adb` tool. It comes with Unity's Android module, in the Android SDK's `platform-tools` folder.

With one headset connected:

```powershell
adb devices
adb install -r "Builds\PICO4\ALF.apk"
```

`adb devices` should list the headset as `device`. `-r` replaces an older version of the app that's already installed.

</details>

:::tip[Keep the builds]
Keep each `.apk` with its version number, for example `ALF-1.4-Quest3.apk` and `ALF-1.4-PICO4.apk`. A Quest 3 APK doesn't work properly on a PICO 4, and the other way round. You can then go back to an earlier version if needed.
:::

## Find the app on the headset

Apps installed over USB don't appear with the store apps.

- **Meta Quest 3:** open the **Library** and filter by **Unknown sources**.
- **PICO 4:** open the **Library**. Sideloaded apps may be listed under a separate filter for unknown sources.
