---
title: "What you need to record"
sidebar_position: 1
---

# What you need to record

New to Unity? The basic terms (Scene, Hierarchy, Project window, Play mode) are explained in [Before you start](../../../before-you-start.md).

## What you need

- A **Meta Quest 3** with **hand tracking** switched on: in the headset, **Settings > Movement Tracking**.
- A **USB-C cable** for Quest Link, or Air Link over Wi-Fi.
- The **machine** in your scene: a 3D model of it, or a stand-in for a real machine.
- A **bright room**. Hand tracking works best in good light.
- **Microphone permission** on the headset, if you want to record your voice.

## Virtual or real machine?

You choose this first, in the Demonstration Recorder:

| Option | When to use it |
|---|---|
| **Virtual Machine** *(recommended)* | You operate the 3D machine in the scene, in VR or with passthrough. Its switches and buttons react while you record, and those reactions are saved automatically. |
| **Physical Machine** | You operate a real machine, seeing it through the headset's cameras (passthrough). Line up the 3D scene with the real machine first, using [Positioning Setup](../../positioning/index.md). |

## How the recording is stored

Your hand movements are recorded **relative to the machine**. Wherever the machine stands in the learners' room, the ghost hands still touch the right buttons.

Each recording is two files in `Assets/Use Cases/Recordings`:

- a **`.json`** file with the hand movements and machine reactions,
- a **`.wav`** file with your voice.

## Two ways to record

| Way | How it works |
|---|---|
| **Quest Link** *(recommended)* | The headset is connected to the computer. You press Play in Unity and record. The files are saved straight into the project. |
| **App on the headset** | You install the app on the headset and record without a cable, for example in a workshop. Afterwards you copy the files to the computer. See [Get recordings from the headset](./get-recordings-from-the-headset.md). |
