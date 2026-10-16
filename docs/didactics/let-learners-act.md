---
title: 5. Let learners act
sidebar_position: 6
description: Finish steps with actions, match real movements, and give each kind of goal the activity that fits it.
---

# 5. Let learners act

**Decide:** in each step, what does the learner **do**?

Learners who act learn more than learners who watch, and learners who watch learn more than learners who only read. An XR lesson where learners only press *Next* is a slideshow with a headset.

## 5.1 Finish steps with an action, not with *Next*

**Do**

- When a step asks for an action, let the step finish **when the learner does it**: pressing the right button, walking to the right place.
- Keep *Next* for steps where learners only read or watch.

**In ALF**

| The step should finish when the learner… | Trigger Method |
|---|---|
| presses a button you placed | **Press a flat button** or **Press a hand-pressable button**: [Use a button to advance a step](../tools/button-injection/how-to/trigger-lesson-step.md) |
| presses a part of the machine itself, such as a switch or a lid | **Press a hand-pressable button**, with a [clickable part](../tools/button-injection/how-to/make-a-part-clickable.md) |
| walks to a place | **Reach a place in the room** |
| has read the panel | **Press Next on the guidance canvas** |

All are in [Choose how a step finishes](../tools/scenario-setup/how-to/choose-how-a-step-finishes.md). Steps that finish on an action need [Scenario Setup](../tools/scenario-setup/how-to/before-you-start.md#scenario-or-guidance), not Guidance Setup.

**The learner experiences:** the lesson moves on because they did something, not because they clicked.

**Avoid:** a whole lesson of panels and *Next*.

**Why:** engagement modes rank from passive (watching) to active (doing) to constructive (explaining, predicting) to interactive (discussing). Each level up learns more. *ICAP (Chi & Wylie).*

## 5.2 Make the movement match the real one

**Do**

- If the real task is done by hand, use **hand tracking**: grabbing should mean grabbing, pressing should mean pressing with a finger.
- Controllers are fine when the movement itself isn't what learners need to learn.

**In ALF**

- Choose hands or controllers per scene: [Scene Generation: The five player setups](../tools/scene-generation/how-to/before-you-start.md#the-five-player-setups).
- Push button models can be pressed with a finger; flat buttons need [Also react to being touched](../tools/button-injection/how-to/touch.md).
- Clickable parts are pressed with a pinch, not a fingertip: [How learners press it](../tools/button-injection/how-to/make-a-part-clickable.md#how-learners-press-it). Use them where reaching for and selecting a part is the action.
- Objects learners can pick up: [Choose what learners can do with an object](../tools/object-spawner/how-to/choose-what-learners-can-do.md).

**Avoid:** pointing a controller ray at a part when the real task is to grip it.

**Why:** the body learns along when the gesture matches the real action. *Embodied cognition (Johnson-Glenberg).*

## 5.3 Let actions have visible consequences

**Do**

- Make the system react to the learner like the real one: a cover opens, a part moves, a light comes on, a sound plays.
- Let learners operate the controls themselves.

**In ALF**

- Moving parts: [Kinematic Editor Tool](../tools/xr-kinematics/how-to/before-you-start.md).
- Buttons that move them: [Add buttons that move the parts](../tools/xr-kinematics/how-to/connect-to-a-button.md).
- A sound or light when a part starts, stops or reaches its end: [Play a sound or effect when a part moves](../tools/xr-kinematics/how-to/react-to-movement.md).

**The learner experiences:** *"I did that."* The system responds believably.

**Avoid:** parts that only move in an animation the learner watches.

**Why:** a believable reaction to the learner's action matters more for learning than realistic graphics. *Plausibility (Slater), CAMIL: agency (Makransky & Petersen).*

## 5.4 Match the activity to the kind of goal

| Your goal is to… | Let learners | In ALF |
|---|---|---|
| **Carry out a fixed procedure** | Do every step themselves, in the real order, with less help each run. | Steps that finish on actions; [buttons](../tools/button-injection/how-to/before-you-start.md); [moving parts](../tools/xr-kinematics/how-to/before-you-start.md) |
| **Solve a task with decisions** | Choose what to do next. Offer several options, only one of them right. | A button or [clickable part](../tools/button-injection/how-to/make-a-part-clickable.md) per option, with the step finishing on the right one; [Part Palette](../tools/part-palette/how-to/before-you-start.md) to choose the right part |
| **Understand how something works** | Predict, try, observe, explain (see 5.5). Connect what they see to a graph (see 5.8). | [Moving parts with controls](../tools/xr-kinematics/how-to/connect-to-a-button.md); [exploded view](../tools/exploded-view/how-to/before-you-start.md); [Graphs](../tools/graphs/index.md) |
| **Recognise and tell apart** | Find and press the right part on the machine; pick the right one from similar-looking options; compare side by side. | [Clickable parts](../tools/button-injection/how-to/make-a-part-clickable.md), the step finishing on the right one; [Part Palette](../tools/part-palette/how-to/before-you-start.md); [image panels](../tools/scenario-setup/how-to/write-the-instructions.md#image) |
| **Follow rules and act safely** | Decide in a situation, and see what happens if the rule is broken, safely. | [Show or hide objects](../tools/scenario-setup/how-to/show-or-hide-objects.md) to show the consequence; buttons for the decision |

## 5.5 Ask for a prediction before you show

**Do:** use three steps.

1. **Predict:** the panel asks *"What will happen when…?"* Learners say their answer aloud, to a partner or on paper.
2. **Observe:** learners make it happen themselves.
3. **Explain:** the next panel shows why, and asks learners to compare with their prediction.

**In ALF:** three steps in [Scenario Setup](../tools/scenario-setup/how-to/before-you-start.md); the observation with [buttons that move the parts](../tools/xr-kinematics/how-to/connect-to-a-button.md), the step finishing on that button.

**Avoid:** showing the result first and explaining afterwards. Learners then nod along, and their misconceptions stay.

**Why:** committing to a prediction brings misconceptions to the surface, so the observation can correct them. *Predict–Observe–Explain (White & Gunstone).*

:::note[Not built in yet]
ALF can't record which answer a learner chose. Ask for the prediction aloud or on paper, and pick it up in the debrief.
:::

## 5.6 Explore with a goal, not freely

**Do**

- Give exploration a clear question, a limited set of controls, and an answer at the end.
- Let learners explore freely only after they know the basics.

**In ALF:** a control panel with only the controls the question needs: [Add buttons that move the parts](../tools/xr-kinematics/how-to/connect-to-a-button.md).

**Avoid:** *"Have a look around"* as a task for beginners.

**Why:** unguided discovery fails for beginners. Guided inquiry, with a question, structure and feedback, works better than both pure discovery and pure instruction. *Guided inquiry (de Jong), Kirschner, Sweller & Clark (2006).*

## 5.7 Let learners handle the parts

**Do:** let learners pick up pieces, turn them, look at them from all sides, and see how they fit together.

**In ALF**

- Pieces of an opened machine: [Let learners pick up the pieces](../tools/exploded-view/how-to/let-learners-handle-pieces.md).
- Single parts: [Choose what learners can do with an object](../tools/object-spawner/how-to/choose-what-learners-can-do.md), with *Pick it up and carry it* and *Resize it with both hands*.

**Why:** learners who find it harder to imagine objects in 3D gain the most from handling 3D models. *Spatial ability research (Hegarty; Uttal et al.).*

## 5.8 Connect the scene to a graph

**Do**

- When learners should understand how quantities relate, show the measured values as a graph next to what happens in the scene.
- Point out explicitly what in the scene matches what in the graph, for example: *"This point is the moment the part stops."*
- Ask learners to read a value off the graph, or to predict how the curve will change.

**In ALF**

- A chart from a CSV file or formulas, standing in the room: [Graphs](../tools/graphs/index.md), [Place the graph and choose what learners can do](../tools/graphs/how-to/place-the-graph.md).
- A ready-made experiment with controls, live graphs and force arrows: [Planetary Lab](../tools/planetary-lab/index.md).

**Avoid:** a graph that stands in the room without anyone explaining how it relates to the scene.

**Why:** several representations help only when learners are supported in translating between them. *Multiple external representations (Ainsworth).*
