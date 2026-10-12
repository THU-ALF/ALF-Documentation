---
title: Troubleshooting
sidebar_position: 9
---

# Troubleshooting

## In the tool

### Step 1 warns about project settings

The project isn't ready for QR codes yet. Press **Open Project Status**, or ask whoever maintains the project.

### The model isn't accepted in step 2

Drag it from the **Project window**, not the Hierarchy. Objects already in the scene aren't accepted.

### The model is far too big or too small

It was made in different units. Set **Scale** to `0.001` for millimetres or `0.01` for centimetres. See [Add the model](./add-the-model.md).

### "Markers are not in one plane"

Not all codes are on the same flat surface. Place them all on one face of the model, or all under the model. See [Place the QR codes on the model](./place-the-qr-codes.md).

### Generate PDF is greyed out

Step 6 lists errors. Fix them first; the button's tip says so too.

### Finish says the setup is not complete

It lists what's still open, for example *No marker sheet has been generated* or *The open scene is not set up*. Go to the step it names, or choose **Close Anyway**.

## On the headset

### The model never appears

1. **Did you accept the spatial data permission?** Without it, no codes are found. Reinstall the app or allow it in the headset's settings.
2. **Is the right scene set up?** Run **Set Up Open Scene** in step 7 in the lesson scene, and save it.
3. **Can the headset see the codes?** Get closer, look straight at them, and make sure the room is well lit.
4. **Is the headset supported?** Quest 3 or 3S with an up-to-date system, or Android XR. Ask whoever maintains the project to check with **Read Headset Log**.

### The model is in the wrong place

- **The printout was scaled.** Measure the control length on the sheet. Print again at exactly 100 %.
- **A code is turned the wrong way,** or swapped with another one. Compare the real object with step 4.
- **The sheet isn't flat.** Bent or curved paper moves the codes.
- **The model's size is wrong.** Check the size in step 2.
- **It's only slightly off.** Fine-tune with **Model Offset (mm)** in step 5.

### The model jumps or shakes

- **The object moves, but following is off.** Turn on **The model follows the markers** in step 5.
- **The object stays put, but following is on.** Turn it off, so the model is placed once and stays still.

### The model is solid, though I set it see-through

Some materials can't be made see-through. Step 6 lists them. Ask whoever prepared the model.

### Play mode over Quest Link finds no codes

Turn on marker tracking for Windows in **ALF > Utils > Project Status**, and check the Link app settings. See [Quick test with Play mode](./set-up-the-scene-and-headset.md#quick-test-with-play-mode-quest-link). A test on the headset itself is more reliable.
