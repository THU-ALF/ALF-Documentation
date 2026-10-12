---
title: Stop a part partway
sidebar_position: 8
---

# Stop a part partway

**Goal:** make a part stop somewhere between its limits, such as a valve half open or a slider at its middle position.

## Steps

1. In the tool, select the part in step **2 Part**, then open step **3 Movement**.
2. Open **Custom Limit** under the part's settings.
3. Tick **Use Custom Limit**.
4. Set **Custom Limit** to a value between `0` and `1`:

   | Value | Stops at |
   |---|---|
   | `0` | the lower limit |
   | `0.5` | halfway between the limits |
   | `1` | the upper limit |

5. Save the scene with **Ctrl+S**.

## Result

The next movement stops at that point instead of going all the way.

## Good to know

- **It works once.** After the part stops at the custom point, **Use Custom Limit** switches itself off, so the next movement goes all the way to the limit again.
- **It's mainly meant for developers.** For example, a script can use it to make the digital machine follow the position of a real one. For a fixed stop, setting the normal limits is usually simpler.
- **For rotating parts, it only works in Limited mode**, not Continuous.

:::caution[Sliding parts can miss the point at high speed]
For **sliding** parts, the custom point has to be matched almost exactly, but the part moves in small jumps. At higher speeds, it can jump past the point and carry on to the limit. If that happens, **lower the Speed**.

Rotating parts don't have this problem.
:::
