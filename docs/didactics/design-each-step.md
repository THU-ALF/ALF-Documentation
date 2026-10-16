---
title: 4. Design each step
sidebar_position: 5
description: One action per step, the instruction next to the part, and only what the step needs in view.
---

# 4. Design each step

**Decide:** what does the learner read, see and do in this step, and what can you leave out?

In a headset, everything competes for attention: the room, the machine, the panel, the controllers. Every step should leave as much attention as possible for the task itself.

## 4.1 One step, one action

**Do**

- Each step asks for **one** thing. Short sentences, active verbs: *"Open the cover."*
- If a panel needs a second paragraph, split the step.
- Show where learners are, for example *"Step 3 of 8"* at the start of the text.

**In ALF:** [Write the instructions](../tools/scenario-setup/how-to/write-the-instructions.md), and add steps with [Add, reorder or remove steps](../tools/scenario-setup/how-to/manage-steps.md).

**The learner experiences:** a clear rhythm: read, do, done.

**Avoid:** panels that describe three actions at once.

**Why:** learners keep up better when content comes in small, learner-paced pieces. *Segmenting principle (Mayer), Cognitive Load Theory (Sweller).*

## 4.2 Put the instruction where the action is

**Do**

- Place the panel next to the part it talks about, so learners don't have to turn away to read.
- Put names and short hints directly on the parts.
- For a part that moves, attach the panel to it.

**In ALF**

| You want | Use |
|---|---|
| The panel next to the part | **World Space**, placed with **Preview & Adjust**: [Place the instruction panel](../tools/scenario-setup/how-to/place-the-instructions.md) |
| The panel to move with a part | **Object Attached**, same guide |
| The panel always in view (first and last step) | **Player Attached**, same guide |
| A name on a part or button | [Add a label](../tools/button-injection/how-to/add-a-label.md) |
| Help on a real object, in AR | [Positioning Setup](../tools/positioning/how-to/before-you-start.md) |

**Avoid:** one panel in a fixed place for the whole lesson, far from where the work happens.

**Why:** words and the thing they describe are understood best when they appear together. This is XR's strongest advantage over a printed manual. *Spatial contiguity (Mayer).*

## 4.3 Show only what this step needs

**Do**

- Hide covers, parts and tools that don't matter for this step.
- Let tools appear in the step where they are first needed.
- For beginners, start with one part of the system, and show the whole once its parts are familiar.

**In ALF**

- Make objects appear or disappear when a step starts: [Show or hide objects during a step](../tools/scenario-setup/how-to/show-or-hide-objects.md).
- Open only the part of a machine the step is about: [Explode part of a machine](../tools/exploded-view/how-to/explode-part-of-a-machine.md).

**The learner experiences:** they always know where to look.

**Avoid:** a fully loaded workbench from the first step on.

**Why:** everything in view competes for attention. The more elements learners must hold in mind at once, the harder the task. *Coherence principle (Mayer), element interactivity (Cognitive Load Theory).*

## 4.4 Don't say the same thing twice

**Do**

- For each step, choose **one** main form: a short text, an image, or a video.
- If a video or image already shows it, keep the text to one line.

**In ALF:** each panel has one **Content Type**: text, image or video. See [Write the instructions](../tools/scenario-setup/how-to/write-the-instructions.md).

**Avoid:** a video and a long text saying the same thing on the same step.

**Why:** the same information in two forms makes learners compare them instead of learning. *Redundancy principle (Mayer).*

## 4.5 Point to what matters

**Do**

- Highlight the one word or part that matters most in the step, for example in bold or colour.
- Use colour the same way throughout the lesson, for example red only for warnings.

**In ALF:** text tags such as `<b>bold</b>` and `<color=red>red</color>`: [Write the instructions: Text](../tools/scenario-setup/how-to/write-the-instructions.md#text).

**Avoid:** colouring many words. When everything is highlighted, nothing is.

**Why:** cues that show where to look reduce search and free attention. *Signaling principle (Mayer).*

## 4.6 Teach the headset before the subject

**Do**

- If learners are new to XR, start with a short practice scene: press a button, grab an object, walk to a marker.
- Keep it separate from the lesson, and put it first in the main menu.

**In ALF**

- A practice scene with [Scene Generation](../tools/scene-generation/how-to/create-a-lesson-scene.md), [buttons](../tools/button-injection/how-to/before-you-start.md) and [objects to pick up](../tools/object-spawner/how-to/choose-what-learners-can-do.md).
- Steps that finish when the learner presses a button or reaches a place: [Choose how a step finishes](../tools/scenario-setup/how-to/choose-how-a-step-finishes.md).
- First in the [main menu](../tools/main-menu/how-to/create-the-main-menu.md).

**Avoid:** explaining the controllers in the first steps of the actual lesson.

**Why:** learning the headset and the subject at the same time overloads working memory. *Pre-training principle (Mayer), Cognitive Load Theory.*
