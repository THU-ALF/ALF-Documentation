---
title: 2. Choose the stages
sidebar_position: 3
description: Decide what learners do in VR, in AR and on the real object, and keep the same task in every stage.
---

# 2. Choose the stages

**Decide:** which stages does your lesson need, and what happens in each one?

## 2.1 Use XR where the real thing is risky, scarce or hidden

**Do:** go through these questions for your task.

| If on the real object… | Then |
|---|---|
| mistakes are **dangerous or costly** | Practise in **VR** first, where mistakes cost nothing. |
| practice time is **scarce** (few devices, lab slots) | Practise in **VR** first, so every real attempt counts. |
| the important parts are **hidden or move too fast** to see | Use XR to make them visible: open the machine, slow it down, show the inside. |
| learners need help **on the object itself** | Use **AR**, with labels lying on the real parts. |
| none of this applies | Ask whether XR adds enough. A short demonstration on the real object may teach as well. |

**In ALF:** you choose VR or AR per scene in [Scene Generation: VR or AR?](../tools/scene-generation/how-to/before-you-start.md#vr-or-ar). Lining up digital content with a real object in AR is done with [Positioning Setup](../tools/positioning/how-to/before-you-start.md).

**Why:** XR pays off where practising on the real thing is risky, rare or doesn't show what matters. *Simulation fidelity research (Alexander et al.), situated learning (Lave & Wenger).*

## 2.2 Keep the same task in every stage

**Do**

- Use the **same task, the same order and the same words** in every stage. Only the amount of help changes.
- Build **one scene per stage**, and put them in order in the main menu.
- If your task is long, don't cut it into separate mini-lessons. Keep the whole task, and make the first version simpler instead.

**In ALF**

- Create one scene per stage with [Scene Generation](../tools/scene-generation/how-to/create-a-lesson-scene.md).
- Put them in order in the [main menu](../tools/main-menu/how-to/create-the-main-menu.md), and give them names that show the order, for example *1 Practise*, *2 On the real device*.
- A scenario has at most 20 steps (see [Add, reorder or remove steps](../tools/scenario-setup/how-to/manage-steps.md)). For a longer task, group the actions into phases, one step per phase action, or split the task into sections with their own scenes.

**The learner experiences:** the same task, recognisably, in a more and more real setting.

**Avoid:** a VR stage that teaches something different from what learners later do for real, for example a simplified order of steps.

**Why:** practising the whole task with decreasing support builds skills that transfer. Skills carry over best when practice and the real task share as many elements as possible. *4C/ID (van Merriënboer & Kirschner), identical elements (Thorndike), hugging (Perkins & Salomon).*

## 2.3 Make the actions faithful, not the graphics

**Do**

- Put your effort into **what learners do** and **how the system reacts**: the right control, the right part, the right order, a visible result.
- Simple models are fine, as long as the parts learners work with are where they are in reality and work like they do in reality.
- Use hands when the real task is done by hand (see [Let learners act](./let-learners-act.md#52-make-the-movement-match-the-real-one)).

**In ALF:** moving parts and their reactions are set up with the [Kinematic Editor Tool](../tools/xr-kinematics/how-to/before-you-start.md), including [sounds or lights when a part moves](../tools/xr-kinematics/how-to/react-to-movement.md).

**Avoid:** spending your time on photorealism while the steps don't match the real procedure.

**Why:** transfer depends more on doing the right actions than on how real it looks. Beginners even learn better with simpler visuals, because there is less to distract them. *Simulation fidelity (Hays & Singer; Alexander et al.), plausibility (Slater).*

## 2.4 Plan what XR can't teach

**Do**

- Ask what the real task needs that a headset can't give: **force and resistance** (how tight is tight enough), **heat**, **weight**, **fine finger work**, **sound or smell** as a warning sign.
- Explain those parts in words in VR, and move the practice of them to the AR stage or the real stage.

**In ALF:** add a short note on the instruction panel where the feeling matters (for example *"firm, but not as hard as you can"*), and plan that step on the real object in the [checklist](./checklist.md).

**Avoid:** assuming learners can do something for real just because they did it in VR.

**Why:** every simulation leaves something out. Knowing what is missing tells you what the next stage must add. *Simulation fidelity, motor learning stages (Fitts & Posner).*

## 2.5 Which stages, at a glance

| Your situation | Suggested stages |
|---|---|
| Risky or costly task, real object available | Orient → Practise in VR → Transfer in AR → Perform for real |
| Risky or costly task, AR not available | Orient → Practise in VR → Perform for real (supervised) |
| Real object rarely or never available | Orient → Practise in VR, and AR in the room if available. Check in VR or with a supervisor. |
| Safe task, real object available, help is needed on the object | Orient → Transfer in AR → Perform for real |
| Understanding a system rather than doing a task | Orient → Explore in VR or AR → Explain and apply |
