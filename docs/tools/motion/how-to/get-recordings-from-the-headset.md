---
title: Get recordings from the headset
sidebar_position: 3
---

# Get recordings from the headset

**Goal:** record without a cable, then copy the recordings to the computer.

With Quest Link, recordings are saved straight into the project and you don't need this page.

## Record on the headset

1. Set up the scene as in [Record a demonstration](./record-a-demonstration.md#set-up-the-scene).
2. Install the app on the Quest 3. See [Build and install](../../../deployment/build-and-install.md).
3. Start the app on the headset and record with the menu on your wrist: **Start Recording**, demonstrate, **Stop Recording**.

## Copy the recordings to the computer

1. Connect the Quest 3 to the computer with a USB-C cable. Allow USB debugging if the headset asks.
2. Open **ALF > Content Creation > Motion > Demonstration Recorder**.
3. Under **Step 5: Save & Retrieve Your Demonstration**, press **Pull Recordings from Connected Quest 3 (ADB)**.

The recordings are copied into `Assets/Use Cases/Recordings`. A message tells you when it's done.

:::tip[Doing it by hand]
**Copy ADB Pull Command** copies a command to the clipboard. Paste it into a terminal to copy the files yourself.
:::
