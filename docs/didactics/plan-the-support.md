---
title: 3. Plan the support, then fade it
sidebar_position: 4
description: Show the task done first, give a lot of help at the start, and remove it step by step.
---

# 3. Plan the support, then fade it

**Decide:** how much help do learners get at the start, and how does it go away?

Help is like scaffolding on a building: essential at first, in the way once the building stands. The goal is a learner who no longer needs the lesson.

## 3.1 Show it done before learners do it

**Do**

- Let beginners see the whole task done once, the way an expert does it, before they try it themselves.
- Show not just **what** the expert does, but **why**: what they check, what they look out for.
- When you record a demonstration, say out loud what you are checking and what beginners usually get wrong at that moment.

**In ALF**

- **Record yourself doing it** with [Motion](../tools/motion/index.md): learners watch see-through ghost hands repeat your movements on the machine, hear your explanation, and see the machine react. They can pause and go back to any moment. See [Record a demonstration](../tools/motion/how-to/record-a-demonstration.md) and [Create the playback for learners](../tools/motion/how-to/create-the-playback.md).
- A short video on the first panel: [Write the instructions: Video](../tools/scenario-setup/how-to/write-the-instructions.md#video).
- A demonstration run: a scenario where each step shows the action, for example a part moving by itself with the [Kinematic Editor Tool](../tools/xr-kinematics/how-to/before-you-start.md), and the learner only presses *Next*.

**The learner experiences:** they've seen it done once, on the same machine they are about to use, and know what they are aiming for.

**Avoid:** letting beginners figure out the task by trial and error.

**Why:** beginners learn more from studying worked examples than from solving problems on their own. Showing the expert's thinking turns imitation into understanding. *Worked-example effect (Sweller), Cognitive Apprenticeship (Collins, Brown & Newman).*

## 3.2 Remove the help from the end first

**Do**

- **Run 1:** every step has a full instruction.
- **Run 2:** the last step only has a short cue, for example just its name.
- **Run 3:** the last two steps only have cues, and so on, until learners do the whole task alone.

**In ALF**

- Make each run its own scene, or copy the scenario and shorten the panels: [Write the instructions](../tools/scenario-setup/how-to/write-the-instructions.md).
- Put the runs in order in the [main menu](../tools/main-menu/how-to/create-the-main-menu.md).
- With a [Motion](../tools/motion/index.md) demonstration, make the ghost hands more see-through in later runs (**Ghost Hand Opacity**), or leave the playback out once learners know the task.
- In AR, lower the model's opacity from run to run, until the learner works on the real object alone: [Set transparency](../tools/positioning/how-to/appearance-and-movement.md#make-the-model-see-through).

**The learner experiences:** they do the end of the task alone early, and know the start well when they get there.

**Avoid:** removing the help everywhere at once, or from the start of the task first.

**Why:** taking away worked steps from the end works better than from the beginning, because learners still have the full example for the parts they haven't mastered. *Backward fading (Renkl & Atkinson).*

:::note[Not built in yet]
ALF doesn't fade help automatically depending on how a learner performs. Build the runs as separate scenes for now.
:::

## 3.3 Give each stage less help than the one before

| Stage | Typical help |
|---|---|
| Orient | Overview, background, the words learners will need. |
| Practise in VR | One instruction per step, next to the part. Then shorter in later runs. |
| Transfer in AR | Labels and key cues on the real object. Few words. |
| Perform for real | None from the system. A checklist for the learner or a supervisor. |

**In ALF:** the instruction panel's position and size are set per step: [Place the instruction panel](../tools/scenario-setup/how-to/place-the-instructions.md). Labels on parts: [Add a label](../tools/button-injection/how-to/add-a-label.md).

**Why:** support should decrease while realism and learner independence increase. *4C/ID, Fitts & Posner's stages of motor learning.*

## 3.4 Keep background knowledge out of the steps

**Do**

- Explain **how things work** (parts, principles, reasons) at the start, in the orientation, or in an exploded view.
- In the steps, say only **what to do now**.

**In ALF:** an [exploded view](../tools/exploded-view/how-to/before-you-start.md) in the orientation for the background; short [step instructions](../tools/scenario-setup/how-to/write-the-instructions.md) for the procedure.

**Avoid:** long explanations in the middle of a procedure, which break the flow and are forgotten by the next step.

**Why:** background knowledge is best studied beforehand, step-by-step instructions are best given just in time. *4C/ID: supportive and procedural information.*

## 3.5 Let learners choose more or less help

**Do**

- If your group is mixed, offer the lesson at two levels, for example *With guidance* and *On my own*.
- Tell learners they can go back to the guided version at any time, and that going back a step is normal.

**In ALF**

- Two scenes, two buttons in the [main menu](../tools/main-menu/how-to/create-the-main-menu.md).
- The **Previous** button on every panel goes back one step and puts the room back as it was: [Scenario Setup: How a lesson is built from steps](../tools/scenario-setup/how-to/before-you-start.md#what-the-learner-sees).

**Avoid:** forcing experienced learners through every guided step.

**Why:** help that beginners need gets in the way of learners who already know more. Learners who plan and check their own learning learn more. *Expertise reversal (Kalyuga), self-regulated learning (Zimmerman).*

:::note[Not built in yet]
ALF can't yet adapt the help to how a learner performs. Learner choice is the workaround. Pair it with a short self-check, so learners judge their level well.
:::
