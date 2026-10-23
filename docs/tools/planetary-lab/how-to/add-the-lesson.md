---
title: Add the guided lesson
sidebar_position: 4
---

# Add the guided lesson

**Goal:** add step-by-step questions and tasks, in English and German, that lead learners through the experiment.

## Steps

1. Create the lab first. See [Create a lab](./create-a-lab.md).
2. In step **6 Lesson**, choose the **English/German lesson**, or press **Use the planetary showcase lesson** to start from the ready-made one.
3. Under **Question to edit**, pick a step and edit its **English** and **German** text. Under **Optional advanced explanations** you can add more detail for interested learners.
4. Under **Experiment completion rules**, set which steps wait for a drop, and which one opens free exploration. **Step rules (zero-based indices)** counts the steps from 0, so the first step is 0.
5. Press **Apply lesson to this lab**.
6. Save the scene with **Ctrl+S**.

## Result

The lab gets a guided lesson with language controls, so learners can switch between English and German. Steps that wait for a drop continue once the drop has finished.

## Good to know

- **The questions are saved in a separate lesson file** in the project, so several labs can share them.
- **Changed the objects or the completion rules?** Check that the questions still fit, then press **Apply lesson to this lab** again.
- **More languages than English and German:** press **Enable runtime localization for this lab** in the lesson step, then **Open Localization & Translation Tool**. See [Let learners switch languages](../../text-import-export/how-to/switch-languages.md).
- **One lesson per scene.** The lab uses the scene's lesson steps, like [Guidance Setup](../../guidance-setup/index.md) does.
