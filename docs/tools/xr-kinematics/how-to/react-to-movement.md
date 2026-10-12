---
title: Play a sound or effect when a part moves
sidebar_position: 7
---

# Play a sound or effect when a part moves

**Goal:** make something happen when a part starts moving, stops, or reaches its end, such as a motor sound, a click, or a light switching on.

## The three events

In step **3 Movement**, open **Events** under the part's settings. There are three events:

| Event | Happens when |
|---|---|
| **On Movement Started** | The part starts moving, in either direction. |
| **On Movement Stopped** | The part stops, whether through **Stop** or by reaching a limit. |
| **On Limit Reached** | The part reaches a limit and stops by itself. |

## Steps

1. In the tool, select the part in step **2 Part**, then open step **3 Movement**.
2. Open **Events**.
3. In the event you want, press **+** to add an entry.
4. Drag the object that should react into the object field. For example, an object with an **Audio Source** component.
5. Choose what it should do from the **No Function** dropdown. For example, **AudioSource > Play ()**.
6. Save the scene with **Ctrl+S**.

## Examples

| You want | Event | Object | Function |
|---|---|---|---|
| A motor hum while moving | On Movement Started | Audio source with the hum | **AudioSource > Play ()** |
| …that stops when the part stops | On Movement Stopped | The same audio source | **AudioSource > Stop ()** |
| A click at the end | On Limit Reached | Audio source with the click | **AudioSource > Play ()** |
| A lamp that lights at the end | On Limit Reached | The lamp object | **GameObject > SetActive (bool)**, ticked |

## Good to know

- **On Limit Reached runs at both ends:** when the part is fully open and when it's fully closed.
- **One event can have several entries.** Press **+** again to add a sound *and* a light.
