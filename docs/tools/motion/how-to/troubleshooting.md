---
title: Troubleshooting
sidebar_position: 5
---

# Troubleshooting

## The recording menu doesn't appear on my wrist

- Check that **hand tracking** is on: in the headset, **Settings > Movement Tracking**.
- The menu is on your **free wrist**, the one without the ALF wrist display. Turn your wrist towards you.
- Check that the recording rig is in the scene: **Step 2** in the Demonstration Recorder says *ready*.

## "No MotionRecordingCoordinator found in Play Mode scene"

The recording rig isn't in the scene. Stop Play mode, press **Inject Recording Rig into Scene** in Step 2, and try again.

## The tracking result is low

Your hands were often out of the headset cameras' view. Keep your hands in front of you, look at what you're doing, and make sure the room is bright. Then record again.

## There's no sound

- Check that **Record voiceover audio with microphone** was ticked before recording.
- Check that the app has **microphone permission** on the headset.
- In Scenario Authoring, check that the **Voiceover Audio (WAV)** file is filled in.

## The ghost hands don't touch the buttons

Adjust **Anchor Position Offset** and **Anchor Rotation Offset** in Step 3 of Scenario Authoring, or press **Auto-Align Hand to Interaction Point**. Keep the machine at its normal size: don't scale it.

## The machine doesn't react during playback

Check **Step 2: Map Machine Reaction Events** in Scenario Authoring. Every event needs a **Target Scene Component**. Then press **Re-generate Learning Scenario Station**.

## "Pull Recordings" fails

Check that the headset is connected with a USB-C data cable and that USB debugging is allowed. See [Prepare the headset](../../../deployment/prepare-the-headset.md).

## The buttons are greyed out

Setting up the rig and the playback station doesn't work in Play mode. Stop Play mode first.
