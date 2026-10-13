---
title: Prepare the headset
sidebar_position: 1
---

# Prepare the headset

A headset only accepts apps over USB once **developer mode** and **USB debugging** are on. This is done once per headset. If your headsets are already set up by the tech team, skip to [Check the connection](#check-the-connection).

## Meta Quest 3

1. **Get access to a Meta developer account.** Developer mode needs a Meta account that belongs to a developer organisation. Ask the tech team to add your account.
2. **Turn on developer mode.** In the **Meta Horizon** app on your phone, open the headset under **Devices**, go to **Headset settings > Developer mode** and switch it on.
3. **Restart the headset.**
4. **Connect it to the computer** with a USB-C data cable. In the headset, a prompt asks **Allow USB debugging?** Choose **Always allow from this computer**.

:::info[Note]
*Placeholder: the "Allow USB debugging" prompt in the Meta Quest 3.*
:::

## PICO 4

1. **Unlock the developer options.** In the headset, go to **Settings > General > About** and select **Software version** repeatedly (about 7 times) until developer options are unlocked.
2. **Turn on USB debugging.** Go to **Settings > Developer** and switch on **USB debugging**.
3. **Connect it to the computer** with a USB-C data cable. Confirm the **Allow USB debugging?** prompt in the headset, and choose to always allow this computer.

:::info[Note]
*Placeholder: Settings > Developer on the PICO 4, with USB debugging switched on.*
:::

## Check the connection

In Unity, open **File > Build Profiles**, select your headset's profile and open the **Run Device** list. The headset should appear there. If it doesn't, see [Troubleshooting](./troubleshooting.md#the-headset-doesnt-appear-in-run-device).

:::tip[Use a data cable]
Some USB-C cables only charge. If the headset never shows up, try another cable before anything else.
:::
