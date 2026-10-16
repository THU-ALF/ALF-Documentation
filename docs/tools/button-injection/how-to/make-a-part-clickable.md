---
title: Make a part of a machine clickable
sidebar_position: 3.5
---

# Make a part of a machine clickable

**Goal:** let learners press a part of the machine itself, such as a switch, a sensor or a lid, without adding a separate button.

A **clickable part** is an invisible button that covers one part of an object. The part lights up while a controller or a hand points at it, and learners press it like a button.

## Steps

1. Open **ALF > Interactivity > Button Injection**.
2. Under the list on the left, press **+ Add a new button**.
3. In step **1 Button**, set **Type** to **Clickable part**. The *On an object / In the world* choice is replaced by a list of parts.
4. Drag the **whole object**, for example the machine or board, from the **Hierarchy** into **Object**. Its parts are listed below it.
5. Under **Parts**, click the part learners should press. Each row has a short note:

   | Note | Meaning |
   |---|---|
   | **box** | The part is box-shaped. The clickable area matches it exactly. |
   | **own collider** | The part already has a collider. That's the clickable area. |
   | **not a box** | The clickable area is a box around each of its pieces, so pointing just beside it can count too. |
   | **already clickable** | It has a clickable part already. Edit that one in the list on the left. |
   | **nothing to click** *(greyed out)* | There's nothing visible to click. Pick a part you can see. |
   | **has its own interaction** *(greyed out)* | The part already reacts to the controllers, for example because it can be grabbed. Pick one of its parts instead. |

6. Type a **Name**, for example `Power switch`. If you leave it empty, it's named `Clickable - ` followed by the part's name.
7. Press **Make this part clickable**.
8. Optional: in step **1 Button**, choose the **Highlight colour**. The part is tinted with it while it's pointed at. It's amber by default.
9. Go to step **4 Save** and press **Save the scene**.

## Result

The clickable part is listed on the left, on its part. It follows the part wherever the part goes.

## How learners press it

| With | Learners… |
|---|---|
| **A controller** | point at the part and press the **grip** button. The trigger only highlights it. |
| **Their hands** | reach for the part and **pinch**. Poking it with a fingertip doesn't press it. |

## Good to know

- **No position and no label.** A clickable part covers its part exactly, so steps **2 Position** and **3 Label** have nothing to set. To change where it is or how big it is, move, turn or resize the part itself.
- **It can't be changed into another type**, and other types can't be changed into it. Remove it and place the other type instead.
- **The rest of the object still works.** If the object can be grabbed, it can still be grabbed anywhere except the clickable part. Pointing at the clickable part presses it and never grabs the object.
- **Read the notes under the list.** The tool warns you, for example, if another collider covers the part and might catch the click instead.
- **Drag from the Hierarchy**, not from the Project window. Only objects in your scene have parts that can be made clickable.
- **Placing it doesn't make it do anything yet.** To make it advance the lesson, see [Use a button to advance a lesson step](./trigger-lesson-step.md).
