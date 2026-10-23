---
title: Prepare the headset
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Prepare the headset

Do this after [preparing Unity](./prepare-unity.md): Unity only shows connected headsets once the project is switched to Android.

A headset only accepts apps over USB once **developer mode** and **USB debugging** are on. This is done once per headset. If your headsets are already set up by the tech team, skip to [Check the connection](#check-the-connection).

## Turn on developer mode

<Tabs groupId="headset">
<TabItem value="quest" label="Meta Quest 3" default>

1. **Get access to a Meta developer account.** Developer mode needs a Meta account that belongs to a developer organisation. Ask the tech team to add your account.
2. **Turn on developer mode.** In the **Meta Horizon** app on your phone, open the headset under **Devices**, go to **Headset settings > Developer mode** and switch it on.
3. **Restart the headset.**
4. **Connect it to the computer** with a USB-C data cable. In the headset, a prompt asks **Allow USB debugging?** Choose **Always allow from this computer**.

:::info[Note]
*Placeholder: the "Allow USB debugging" prompt in the Meta Quest 3.*
:::

</TabItem>
<TabItem value="pico" label="PICO 4">

1. **Unlock the developer options.** In the headset, go to **Settings > General > About** and select **Software version** repeatedly (about 7 times) until developer options are unlocked.
2. **Turn on USB debugging.** Go to **Settings > Developer** and switch on **USB debugging**.
3. **Connect it to the computer** with a USB-C data cable. Confirm the **Allow USB debugging?** prompt in the headset, and choose to always allow this computer.

:::info[Note]
*Placeholder: Settings > Developer on the PICO 4, with USB debugging switched on.*
:::

</TabItem>
</Tabs>

## Check the connection

In Unity, open **File > Build Profiles** and select **Android** (or your headset's profile). It must be marked **Active**; if it isn't, [switch the project to Android](./prepare-unity.md#switch-the-project-to-android) first. Click **Refresh** next to **Run Device** and open the list. The headset should appear there. If it doesn't, see [Troubleshooting](./troubleshooting.md#the-headset-doesnt-appear-in-run-device).

:::tip[Use a data cable]
Some USB-C cables only charge. If the headset never shows up, try another cable before anything else.
:::
