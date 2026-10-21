/**
 * Lesson Planner: questions, rules and tips.
 *
 * This file is the single source of truth for the planner on
 * docs/didactics/plan-my-lesson. Every tip says
 *   - what the author should do        (do)
 *   - why, in one line, with its theory (why)
 *   - where in ALF                      (tools: links to the tool guides)
 *   - when it applies                   (when: a rule on the answers; no rule = always)
 *   - what ALF can't do yet (optional)  (gap: the limitation and a workaround)
 *
 * Didactic rules are content: review them like text, not like code.
 * Theory basis: "Fade to Real – Theories & Learning Models" (v0.1, Oct 2026).
 */

/* ------------------------------------------------------------------ */
/* Answers                                                             */
/* ------------------------------------------------------------------ */

export type Answers = {
  goal?: 'procedure' | 'concept' | 'both';
  risk?: 'high' | 'medium' | 'low';
  real?: 'yes' | 'limited' | 'no';
  devices?: 'vr' | 'ar' | 'both';
  prior?: 'novice' | 'some' | 'mixed';
  xr?: 'new' | 'experienced';
  time?: 'short' | 'session' | 'multi';
  needs?: Array<'language' | 'access' | 'comfort'>;
};

export type Option = {value: string; label: string; hint?: string};

export type Question = {
  id: keyof Answers;
  title: string;
  help?: string;
  options: Option[];
  multi?: boolean;
};

export const questions: Question[] = [
  {
    id: 'goal',
    title: 'What should learners be able to do at the end?',
    help: 'Think of one sentence that starts with “Learners can…”.',
    options: [
      {value: 'procedure', label: 'Carry out a procedure', hint: 'A sequence of actions on a device, machine or setup.'},
      {value: 'concept', label: 'Understand how something works', hint: 'Explain, predict or reason about a system or phenomenon.'},
      {value: 'both', label: 'Both', hint: 'Understand the system, then carry out a procedure on it.'},
    ],
  },
  {
    id: 'risk',
    title: 'What happens if a beginner gets it wrong on the real thing?',
    options: [
      {value: 'high', label: 'Danger or costly damage', hint: 'Injury, broken equipment, wasted material.'},
      {value: 'medium', label: 'Annoying, but fixable', hint: 'Lost time, a redo, a supervisor has to step in.'},
      {value: 'low', label: 'Nothing serious', hint: 'Mistakes are cheap and safe.'},
    ],
  },
  {
    id: 'real',
    title: 'Can learners practise on the real object or in the real situation?',
    options: [
      {value: 'yes', label: 'Yes, regularly'},
      {value: 'limited', label: 'Only briefly or under supervision', hint: 'Few devices, lab slots, booking needed.'},
      {value: 'no', label: 'No', hint: 'Too rare, too expensive, too far away or not observable.'},
    ],
  },
  {
    id: 'devices',
    title: 'Which headsets can you use?',
    options: [
      {value: 'vr', label: 'VR only'},
      {value: 'ar', label: 'AR only', hint: 'Passthrough: the real room with 3D content added.'},
      {value: 'both', label: 'VR and AR'},
    ],
  },
  {
    id: 'prior',
    title: 'How much do learners already know about the topic?',
    options: [
      {value: 'novice', label: 'Little or nothing'},
      {value: 'some', label: 'Some experience'},
      {value: 'mixed', label: 'Very mixed group'},
    ],
  },
  {
    id: 'xr',
    title: 'Have learners used a headset before?',
    options: [
      {value: 'new', label: 'Most are new to XR'},
      {value: 'experienced', label: 'Most have used XR'},
    ],
  },
  {
    id: 'time',
    title: 'How much time do learners have?',
    options: [
      {value: 'short', label: 'Short', hint: 'About 15 minutes in the headset.'},
      {value: 'session', label: 'One session', hint: '30 to 60 minutes.'},
      {value: 'multi', label: 'Several sessions', hint: 'Spread over days or weeks.'},
    ],
  },
  {
    id: 'needs',
    title: 'Anything you need to plan for?',
    help: 'Choose all that apply, or none.',
    multi: true,
    options: [
      {value: 'language', label: 'Learners with another first language'},
      {value: 'access', label: 'Seated or one-hand use', hint: 'Limited mobility, wheelchair users, one hand busy.'},
      {value: 'comfort', label: 'Learners prone to motion sickness'},
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Links into the existing tool documentation                          */
/* ------------------------------------------------------------------ */

export type ToolLink = {label: string; to: string};

const D = '/docs/tools';
export const T = {
  sceneGen: {label: 'Scene Generation', to: `${D}/scene-generation/how-to/before-you-start`},
  mainMenu: {label: 'Main Menu Setup', to: `${D}/main-menu/how-to/before-you-start`},
  scenario: {label: 'Scenario Setup', to: `${D}/scenario-setup/how-to/before-you-start`},
  write: {label: 'Write the instructions', to: `${D}/scenario-setup/how-to/write-the-instructions`},
  writeImage: {label: 'Image panels', to: `${D}/scenario-setup/how-to/write-the-instructions#image`},
  writeVideo: {label: 'Video panels', to: `${D}/scenario-setup/how-to/write-the-instructions#video`},
  place: {label: 'Place the instruction panel', to: `${D}/scenario-setup/how-to/place-the-instructions`},
  finish: {label: 'Choose how a step finishes', to: `${D}/scenario-setup/how-to/choose-how-a-step-finishes`},
  showHide: {label: 'Show or hide objects', to: `${D}/scenario-setup/how-to/show-or-hide-objects`},
  steps: {label: 'Add, reorder or remove steps', to: `${D}/scenario-setup/how-to/manage-steps`},
  guidance: {label: 'Guidance Setup', to: `${D}/guidance-setup/how-to/before-you-start`},
  button: {label: 'Button Injection', to: `${D}/button-injection/how-to/before-you-start`},
  buttonStep: {label: 'Use a button to advance a step', to: `${D}/button-injection/how-to/trigger-lesson-step`},
  buttonLabel: {label: 'Add a label', to: `${D}/button-injection/how-to/add-a-label`},
  buttonMove: {label: 'Move and rotate a button', to: `${D}/button-injection/how-to/move-and-rotate`},
  spawner: {label: 'Choose what learners can do with an object', to: `${D}/object-spawner/how-to/choose-what-learners-can-do`},
  exploded: {label: 'Exploded View', to: `${D}/exploded-view/how-to/before-you-start`},
  explodePart: {label: 'Explode part of a machine', to: `${D}/exploded-view/how-to/explode-part-of-a-machine`},
  explodeHandle: {label: 'Let learners pick up the pieces', to: `${D}/exploded-view/how-to/let-learners-handle-pieces`},
  explodeStep: {label: 'Open the model at a lesson step', to: `${D}/exploded-view/how-to/open-at-a-lesson-step`},
  kinematic: {label: 'Kinematic Editor Tool', to: `${D}/xr-kinematics/how-to/before-you-start`},
  kinematicButtons: {label: 'Add buttons that move the parts', to: `${D}/xr-kinematics/how-to/connect-to-a-button`},
  palette: {label: 'Part Palette', to: `${D}/part-palette/how-to/before-you-start`},
  positioning: {label: 'Positioning Setup', to: `${D}/positioning/how-to/before-you-start`},
  opacity: {label: 'Set transparency', to: `${D}/positioning/how-to/appearance-and-movement`},
  youtube: {label: 'YouTube Player', to: `${D}/youtube-player/how-to/add-a-video-screen`},
  motion: {label: 'Record a demonstration (Motion)', to: `${D}/motion/how-to/record-a-demonstration`},
  motionPlayback: {label: 'Create the playback for learners', to: `${D}/motion/how-to/create-the-playback`},
  clickable: {label: 'Make a part of a machine clickable', to: `${D}/button-injection/how-to/make-a-part-clickable`},
  graphs: {label: 'Graphs', to: `${D}/graphs/how-to/before-you-start`},
  graphPlace: {label: 'Place the graph', to: `${D}/graphs/how-to/place-the-graph`},
  planetary: {label: 'Planetary Lab', to: `${D}/planetary-lab/how-to/before-you-start`},
  sceneCheck: {label: 'Scene Check', to: `${D}/utilities/scene-check`},
} satisfies Record<string, ToolLink>;

/* ------------------------------------------------------------------ */
/* Helpers for rules                                                   */
/* ------------------------------------------------------------------ */

export const has = {
  procedure: (a: Answers) => a.goal === 'procedure' || a.goal === 'both',
  concept: (a: Answers) => a.goal === 'concept' || a.goal === 'both',
  vr: (a: Answers) => a.devices === 'vr' || a.devices === 'both',
  ar: (a: Answers) => a.devices === 'ar' || a.devices === 'both',
  real: (a: Answers) => a.real === 'yes' || a.real === 'limited',
  need: (a: Answers, n: 'language' | 'access' | 'comfort') => (a.needs ?? []).includes(n),
};

/* ------------------------------------------------------------------ */
/* Stages (Fade to Real: 0 Orient → 1 Practise in VR → 2 Transfer in AR → 3 Perform for real) */
/* ------------------------------------------------------------------ */

export type Stage = {
  key: 'orient' | 'vr' | 'ar' | 'real';
  name: string;
  purpose: string;
  support: string; // how much help, and what kind
  build: string;   // how to build it with ALF
  tools: ToolLink[];
  note?: string;
};

export function planStages(a: Answers): Stage[] {
  const stages: Stage[] = [];
  const proc = has.procedure(a);

  stages.push({
    key: 'orient',
    name: 'Orient',
    purpose: proc
      ? 'Show the whole task, the goal and why it matters, before any practice.'
      : 'Pose the question and show the system as a whole before learners explore it.',
    support: 'Full: overview, background knowledge, the words learners will need.',
    build: has.vr(a) || has.ar(a)
      ? 'A short first scene or the first steps of the lesson: an overview panel, an exploded view of the system, an optional video.'
      : 'An overview before learners put on the headset.',
    tools: [T.exploded, T.writeVideo, T.youtube],
    note: a.xr === 'new' ? 'Learners are new to XR: put a separate controls-practice scene before this one.' : undefined,
  });

  const vrUseful = has.vr(a) && (a.risk !== 'low' || a.real !== 'yes' || a.prior !== 'some' || a.devices === 'vr');
  if (vrUseful) {
    stages.push({
      key: 'vr',
      name: 'Practise in VR',
      purpose: proc
        ? 'Learn the steps safely, with all the help learners need, and make mistakes without consequences.'
        : 'Explore the system: predict, try, observe and explain, in a world where you control what is visible.',
      support: a.prior === 'some'
        ? 'Medium: short cues per step; detailed help only where learners usually go wrong.'
        : 'High at first: one action per step, instructions next to the part. Then less help in a second run.',
      build: proc
        ? 'One VR scene, built with Scenario Setup: one step per action, each step finishing on the action itself.'
        : 'One VR scene with moving parts and controls, and steps that ask for a prediction before each observation.',
      tools: [T.sceneGen, T.scenario, T.finish, T.kinematic],
    });
  }

  if (has.ar(a)) {
    stages.push({
      key: 'ar',
      name: 'Transfer in AR',
      purpose: has.real(a)
        ? 'Do the same task on the real object, with digital help lying directly on it.'
        : 'Bring the virtual model into the real room, at real scale, next to the learner\'s own body.',
      support: has.real(a)
        ? 'Lower: labels and key cues on the object, fewer words, the steps finish on the learner\'s action.'
        : 'Lower than in VR: fewer panels, the learner leads.',
      build: has.real(a)
        ? 'An AR scene lined up with the real object using QR codes. Lower the model\'s opacity as learners get better.'
        : 'An AR scene with the model placed in the room.',
      tools: has.real(a) ? [T.sceneGen, T.positioning, T.opacity, T.scenario] : [T.sceneGen, T.scenario],
      note: a.real === 'no' ? 'Without a real object, AR mainly adds scale and context. Keep the same task and words as in VR.' : undefined,
    });
  }

  if (has.real(a)) {
    stages.push({
      key: 'real',
      name: 'Perform for real',
      purpose: proc
        ? 'Do the whole task on the real object, without the headset. This is where you check the goal.'
        : 'Apply what was understood in a real situation, and explain it in your own words.',
      support: a.risk === 'high'
        ? 'None from the system. A supervisor is present and uses the checklist.'
        : 'None from the system. A checklist for self-check or a partner.',
      build: 'Outside ALF: the same task, same order and same words as in the headsets. The checklist from your goal is the assessment.',
      tools: [],
      note: a.real === 'limited' ? 'Real time is scarce: use XR to make sure every real attempt counts.' : undefined,
    });
  }
  return stages;
}

/* ------------------------------------------------------------------ */
/* Learning path                                                       */
/* ------------------------------------------------------------------ */

export type Path = {name: string; pattern: string[]; why: string};

export function planPath(a: Answers): Path[] {
  const procedure: Path = {
    name: 'Procedure path: show, practise, fade',
    pattern: [
      'Overview of the whole task',
      'Expert shows the steps (worked example)',
      'Learner does the steps with full help',
      'Learner does them again, with help removed from the end first',
      'Whole task without help, ideally on the real object',
      'Reflect: what was hard, what carries over',
    ],
    why: '4C/ID · Cognitive Apprenticeship · worked examples with backward fading',
  };
  const concept: Path = {
    name: 'Concept path: predict, observe, explain',
    pattern: [
      'A question or problem that matters',
      'Learner predicts what will happen',
      'Learner makes it happen and observes',
      'Learner explains the difference to the prediction',
      'Apply to a new case',
      'Reflect and connect to the theory',
    ],
    why: 'Predict–Observe–Explain · guided inquiry · Kolb\'s learning cycle',
  };
  if (a.goal === 'procedure') return [procedure];
  if (a.goal === 'concept') return [concept];
  return [concept, procedure];
}

/* ------------------------------------------------------------------ */
/* Tips                                                                */
/* ------------------------------------------------------------------ */

export type Phase = 'start' | 'step' | 'act' | 'fade' | 'mistakes' | 'close' | 'people';

export const phases: Record<Phase, {title: string; intro: string}> = {
  start: {title: 'Before you build', intro: 'Decide the goal and the start of the lesson.'},
  step: {title: 'Each step', intro: 'Keep the learner\'s head free for the task.'},
  act: {title: 'Let learners act', intro: 'Doing beats watching. Watching beats reading.'},
  fade: {title: 'Support and fading', intro: 'Help a lot at first, then step back.'},
  mistakes: {title: 'Mistakes and feedback', intro: 'Plan for the errors you know will happen.'},
  close: {title: 'Close the loop', intro: 'Learning sticks when learners look back and carry it over.'},
  people: {title: 'Motivation, comfort and inclusion', intro: 'Plan for everyone from the start.'},
};

export type Tip = {
  id: string;
  phase: Phase;
  title: string;
  do: string;
  why: string;     // one sentence
  theory: string;  // short theory name(s)
  tools?: ToolLink[];
  when?: (a: Answers) => boolean;
  gap?: string;    // what ALF can't do yet, and the workaround
};

export const tips: Tip[] = [
  /* ---------- start ---------- */
  {
    id: 'goal-verb',
    phase: 'start',
    title: 'Write the goal as one observable action',
    do: 'Write one sentence: what learners can do at the end, and where. Every scene and every step must serve that sentence. Cut what doesn\'t.',
    why: 'Learning works best when the goal, the activities and the check all target the same action at the same level.',
    theory: 'Constructive Alignment (Biggs)',
    tools: [T.mainMenu],
  },
  {
    id: 'check-first',
    phase: 'start',
    title: 'Decide how you\'ll check success before you build',
    do: 'List the critical actions, the order, and the safety points an expert would watch for. This checklist is your final stage, and it tells you which steps need the most support.',
    why: 'Planning backwards from the evidence keeps the lesson focused on what really counts.',
    theory: 'Constructive Alignment · backward design',
  },
  {
    id: 'overview',
    phase: 'start',
    title: 'Show the whole before the parts',
    do: 'Start with one overview step: what learners will do, why it matters, and what the result looks like. An exploded view of the system or a short video works well.',
    why: 'New knowledge sticks better when it can be hung on an overview given beforehand.',
    theory: 'Advance organiser (Ausubel) · Gagné events 1–3',
    tools: [T.exploded, T.explodeStep, T.writeVideo],
  },
  {
    id: 'xr-onboarding',
    phase: 'start',
    title: 'Teach the controls in a separate scene first',
    do: 'Make a short practice scene: press a button, grab an object, walk to a marker. Put it first in the main menu. Then the lesson itself can focus on the subject.',
    why: 'Learning the headset and the subject at the same time overloads working memory.',
    theory: 'Pre-training principle (Mayer) · Cognitive Load Theory',
    tools: [T.sceneGen, T.mainMenu, T.buttonStep, T.spawner],
    when: (a) => a.xr === 'new',
  },
  {
    id: 'background-separate',
    phase: 'start',
    title: 'Keep background knowledge out of the steps',
    do: 'Explain how things work (parts, principles, reasons) before the practice, in the orientation. During the steps, only say what to do now.',
    why: 'Background knowledge is best studied beforehand; step-by-step instructions are best given just in time.',
    theory: '4C/ID (van Merriënboer & Kirschner)',
    tools: [T.exploded, T.write],
    when: has.procedure,
  },
  {
    id: 'stage-choice',
    phase: 'start',
    title: 'Use XR where the real thing is risky, scarce or invisible',
    do: 'Put the practice with the most mistakes in VR, the transfer in AR, and keep the final check real. Don\'t chase realistic graphics; make the actions and their consequences faithful.',
    why: 'Transfer depends more on doing the right actions than on how real it looks. Beginners even learn better with simpler visuals.',
    theory: 'Simulation fidelity (Alexander et al.) · 4C/ID',
    tools: [T.sceneGen],
    when: (a) => a.risk === 'high' || a.real !== 'yes',
  },

  /* ---------- step ---------- */
  {
    id: 'one-action',
    phase: 'step',
    title: 'One step, one action',
    do: 'Each instruction panel asks for one thing. Short sentences, active verbs. If a panel needs scrolling or a second paragraph, split the step.',
    why: 'Learners keep up better when content comes in small, learner-paced pieces.',
    theory: 'Segmenting principle (Mayer) · Cognitive Load Theory',
    tools: [T.write, T.steps],
  },
  {
    id: 'on-the-object',
    phase: 'step',
    title: 'Put the instruction where the action is',
    do: 'Place the panel next to the part it talks about, or attach it to the object. Learners shouldn\'t have to turn away from the part to read about it.',
    why: 'Words and the thing they describe are understood best when they sit together. This is XR\'s strongest advantage over a manual.',
    theory: 'Spatial contiguity (Mayer)',
    tools: [T.place],
  },
  {
    id: 'show-only-needed',
    phase: 'step',
    title: 'Show only what this step needs',
    do: 'Hide covers, parts and tools that don\'t matter right now. Let tools appear in the step where they are needed.',
    why: 'Everything in view competes for attention. Removing it frees the mind for the task.',
    theory: 'Coherence principle (Mayer) · Cognitive Load Theory',
    tools: [T.showHide],
  },
  {
    id: 'isolate',
    phase: 'step',
    title: 'Start with a part of the system, not the whole',
    do: 'For beginners, open or isolate the subsystem the step is about, and only show the full system once its parts are familiar.',
    why: 'The more elements learners must hold in mind at once, the harder the task. Isolating parts lowers that load.',
    theory: 'Element interactivity (Cognitive Load Theory)',
    tools: [T.explodePart],
    when: (a) => a.prior !== 'some',
  },
  {
    id: 'no-redundancy',
    phase: 'step',
    title: 'Don\'t say the same thing twice',
    do: 'If a video or picture already shows it, don\'t repeat it as a long text on the panel. Choose one: a short text, a picture, or a video.',
    why: 'The same information in two forms makes learners compare them instead of learning.',
    theory: 'Redundancy principle (Mayer)',
    tools: [T.write],
  },
  {
    id: 'same-words',
    phase: 'step',
    title: 'Use the same word for the same thing, every time',
    do: 'Fix the technical terms in advance and use them identically on panels, labels and in the real stage. Label parts with their name on the object.',
    why: 'Learners with another first language learn the subject through its vocabulary. Consistent words take that load away.',
    theory: 'Language-sensitive teaching · UDL',
    tools: [T.buttonLabel, T.write],
    when: (a) => has.need(a, 'language'),
  },

  /* ---------- act ---------- */
  {
    id: 'action-not-next',
    phase: 'act',
    title: 'Finish steps with an action, not with “Next”',
    do: 'When a step asks learners to do something, let the step finish on that action: pressing the right button, or walking to the right spot. Keep “Next” for reading steps.',
    why: 'Learners who act learn more than learners who only read or watch.',
    theory: 'ICAP (Chi & Wylie)',
    tools: [T.finish, T.buttonStep],
  },
  {
    id: 'real-gesture',
    phase: 'act',
    title: 'Make the movement match the real one',
    do: 'If the real task is done by hand, use hand tracking: grabbing should mean grabbing, pressing should mean pressing with a finger. Controllers are fine when the movement itself isn\'t what is learned.',
    why: 'The body learns along when the gesture matches the real action.',
    theory: 'Embodied cognition (Johnson-Glenberg)',
    tools: [T.sceneGen, T.button, T.spawner],
    when: has.procedure,
  },
  {
    id: 'consequences',
    phase: 'act',
    title: 'Let actions have visible consequences',
    do: 'Make the system react the way the real one does: a part moves when its control is pressed, a cover opens when released. Function first, looks second.',
    why: 'A believable reaction to the learner\'s action matters more for learning than realistic graphics.',
    theory: 'Plausibility (Slater) · functional fidelity',
    tools: [T.kinematic, T.kinematicButtons],
  },
  {
    id: 'choose',
    phase: 'act',
    title: 'Let learners choose, not just take',
    do: 'Offer the right part, tool or control among similar ones, instead of handing it over. Clickable parts let learners find and press the right part on the machine itself. Choosing makes learners recall what they know.',
    why: 'Recalling and choosing strengthens memory more than being shown again.',
    theory: 'Retrieval practice (Roediger & Karpicke)',
    tools: [T.clickable, T.palette, T.spawner],
    when: has.procedure,
  },
  {
    id: 'predict',
    phase: 'act',
    title: 'Ask for a prediction before you show',
    do: 'Use three steps: ask “What will happen when…?”, let learners make it happen, then explain what happened and why. Learners say their prediction aloud or to a partner before moving on.',
    why: 'Committing to a prediction brings misconceptions to the surface, so the observation can correct them.',
    theory: 'Predict–Observe–Explain (White & Gunstone)',
    tools: [T.steps, T.kinematicButtons, T.buttonStep],
    when: has.concept,
    gap: 'ALF can\'t record which answer a learner chose. Ask for the prediction aloud or on paper, and pick it up in the debrief.',
  },
  {
    id: 'guided-explore',
    phase: 'act',
    title: 'Explore with a goal, not freely',
    do: 'Give a clear question, a limited set of controls, and a reveal at the end. Free exploration comes after learners know the basics.',
    why: 'Unguided discovery fails for beginners. Guided inquiry beats both pure discovery and pure instruction.',
    theory: 'Guided inquiry (de Jong; Kirschner, Sweller & Clark)',
    tools: [T.kinematicButtons],
    when: has.concept,
  },
  {
    id: 'graph-link',
    phase: 'act',
    title: 'Connect the scene to a graph',
    do: 'Show measured values as a graph next to what happens in the scene, and point out what matches what: "This point is the moment the part stops." Ask learners to read a value off the graph or predict the curve.',
    why: 'Several representations help only when learners are shown how they relate.',
    theory: 'Multiple external representations (Ainsworth)',
    tools: [T.graphs, T.graphPlace, T.planetary],
    when: has.concept,
  },
  {
    id: 'handle-pieces',
    phase: 'act',
    title: 'Let learners turn the parts in their hands',
    do: 'Let learners pick up pieces of the opened system, turn them, and see how they fit together.',
    why: 'Learners with weaker spatial ability gain most from handling 3D models.',
    theory: 'Spatial ability research (Hegarty; Uttal)',
    tools: [T.explodeHandle, T.spawner],
    when: (a) => has.concept(a) || a.prior !== 'some',
  },

  /* ---------- fade ---------- */
  {
    id: 'expert-first',
    phase: 'fade',
    title: 'Show it done before asking learners to do it',
    do: 'Let beginners see the whole procedure once, done by an expert, before they practise. Best: record yourself on the machine with Motion, saying what you check and what beginners get wrong. Learners watch ghost hands, hear you, and can pause and replay.',
    why: 'Beginners learn more from studying worked examples than from solving problems on their own.',
    theory: 'Worked-example effect (Sweller) · modeling (Cognitive Apprenticeship)',
    tools: [T.motion, T.motionPlayback, T.writeVideo],
    when: (a) => has.procedure(a) && a.prior !== 'some',
  },
  {
    id: 'backward-fading',
    phase: 'fade',
    title: 'Remove help from the end first',
    do: 'In a second run, give the last step only a short cue. In the next run, the last two steps, and so on, until learners do the whole task alone.',
    why: 'Taking away the worked steps from the end works better than from the start.',
    theory: 'Backward fading (Renkl & Atkinson)',
    tools: [T.write, T.mainMenu],
    when: has.procedure,
    gap: 'ALF doesn\'t fade help automatically yet. Build each run as its own scene (or copy the scenario and shorten the panels), and order the runs in the main menu.',
  },
  {
    id: 'less-per-stage',
    phase: 'fade',
    title: 'Each stage gets less help than the one before',
    do: 'Keep the same task in every stage, and change only the support: long panels in VR, short labels in AR, a checklist for real.',
    why: 'Practising the whole task with decreasing support, instead of practising separate pieces, builds skills that transfer.',
    theory: '4C/ID · identical elements (Thorndike)',
    tools: [T.place, T.opacity],
    when: (a) => has.vr(a) && has.ar(a),
  },
  {
    id: 'learner-choice',
    phase: 'fade',
    title: 'Let learners choose their level of help',
    do: 'Offer the same lesson twice in the main menu: “With guidance” and “On my own”. Tell learners they can go back to the guided version any time.',
    why: 'Help that beginners need gets in the way of learners who already know more.',
    theory: 'Expertise reversal (Kalyuga) · self-regulated learning',
    tools: [T.mainMenu],
    when: (a) => a.prior === 'mixed' || a.prior === 'some',
    gap: 'ALF can\'t yet adapt the help to how a learner performs. Learner choice is the workaround; pair it with a short self-check so learners judge themselves well.',
  },
  {
    id: 'previous-ok',
    phase: 'fade',
    title: 'Make going back normal',
    do: 'Tell learners that “Previous” is allowed and resets the room to that step. A learner who checks back is regulating their own learning.',
    why: 'Learners who plan, monitor and ask for help well learn more.',
    theory: 'Self-regulated learning (Zimmerman)',
    tools: [T.scenario],
  },

  /* ---------- mistakes ---------- */
  {
    id: 'typical-error',
    phase: 'mistakes',
    title: 'Name the typical mistake at the step where it happens',
    do: 'Ask an expert: “What do beginners get wrong here?” Put that one warning on the step itself, with the reason, not on a page at the start.',
    why: 'Experts no longer notice the steps they find easy; asking for typical errors brings them back. Feedback works best at the moment of the task.',
    theory: 'Expert blind spot (Nathan & Koedinger) · feedback research (Hattie & Timperley)',
    tools: [T.write],
  },
  {
    id: 'contrast',
    phase: 'mistakes',
    title: 'Show right and wrong side by side',
    do: 'Where two things look alike but differ in one important detail, show both on an image panel and point at the difference.',
    why: 'Learners notice the important feature when they compare cases that differ in only that feature.',
    theory: 'Contrasting cases (Schwartz & Bransford)',
    tools: [T.writeImage, T.palette],
  },
  {
    id: 'reason-not-rule',
    phase: 'mistakes',
    title: 'Give the reason, not just the rule',
    do: 'For every rule, especially safety rules, add one line on why. Learners who know why can handle the case the rule didn\'t mention.',
    why: 'Making the expert\'s thinking visible turns imitation into understanding.',
    theory: 'Cognitive Apprenticeship (Collins, Brown & Newman)',
    tools: [T.write],
  },
  {
    id: 'safe-failure',
    phase: 'mistakes',
    title: 'Use VR for the mistakes you can\'t afford for real',
    do: 'Show the consequence of the dangerous mistake in VR, where it costs nothing. Never leave it to the real stage.',
    why: 'Safe practice builds the confidence that keeps learners going; errors are only productive where they are safe.',
    theory: 'Self-efficacy (Bandura) · productive failure (Kapur)',
    tools: [T.showHide, T.kinematic],
    when: (a) => a.risk === 'high' && has.vr(a),
  },
  {
    id: 'no-wrong-feedback',
    phase: 'mistakes',
    title: 'Plan for wrong actions',
    do: 'A step only finishes on the right action, so a wrong press simply does nothing. Tell learners at the start: “If nothing happens, read the panel again.” Collect what went wrong in the debrief.',
    why: 'Feedback is most useful when it is specific and comes right away, especially for beginners.',
    theory: 'Feedback research (Hattie & Timperley; Shute) · Gagné event 7',
    tools: [T.finish],
    gap: 'ALF doesn\'t react to wrong actions yet. This is the biggest gap; until it exists, the debrief does the job.',
  },

  /* ---------- close ---------- */
  {
    id: 'reflect',
    phase: 'close',
    title: 'End with a reflection step',
    do: 'The last panel asks two questions: “What was hardest?” and “What will you do differently on the real one?” Learners answer to a partner or the group after taking the headset off.',
    why: 'Without reflection, learners only manage the exact task they practised. Reflection builds the bridge to new situations.',
    theory: 'Bridging (Perkins & Salomon) · Kolb\'s learning cycle',
    tools: [T.write],
    gap: 'Learners can\'t type answers in the headset. Do the reflection aloud, in pairs, or on paper.',
  },
  {
    id: 'same-task-real',
    phase: 'close',
    title: 'Finish on the real object with the checklist',
    do: 'Same task, same order, same words as in the headset. Use the checklist from your goal.',
    why: 'Skills carry over best when practice and the real task share as many elements as possible.',
    theory: 'Identical elements (Thorndike) · hugging (Perkins & Salomon)',
    when: has.real,
  },
  {
    id: 'ar-on-object',
    phase: 'close',
    title: 'In AR, put the help on the real object',
    do: 'Line the model up with the real object and keep only the key labels. Make the model more see-through each run, until the learner works on the real object alone.',
    why: 'Help lying directly on the real object is the strongest form of words-next-to-thing, and lowering it step by step bridges virtual and real.',
    theory: 'Spatial contiguity (Mayer) · fading',
    tools: [T.positioning, T.opacity],
    when: (a) => has.ar(a) && has.real(a),
  },
  {
    id: 'recall',
    phase: 'close',
    title: 'Start the next session with a short recall',
    do: 'Begin the next session with a few steps without any help: “What comes next?” Then continue with the guided part.',
    why: 'Recalling after a gap strengthens memory more than repeating.',
    theory: 'Retrieval practice · spacing',
    tools: [T.steps],
    when: (a) => a.time === 'multi',
  },

  /* ---------- people ---------- */
  {
    id: 'early-success',
    phase: 'people',
    title: 'Plan an early success',
    do: 'Make the first actions easy and clearly successful. Show progress, for example “Step 3 of 8”, in the panel text.',
    why: 'Mastery experiences are the strongest source of confidence, and confidence predicts whether learners keep going.',
    theory: 'Self-efficacy (Bandura) · ARCS (Keller)',
    tools: [T.write],
  },
  {
    id: 'relevance',
    phase: 'people',
    title: 'Say why it matters',
    do: 'In the first step, connect the task to the learners\' lab, job or next course in one sentence.',
    why: 'Learners invest more when they see the relevance for themselves.',
    theory: 'ARCS (Keller) · Self-Determination Theory',
  },
  {
    id: 'debrief-pairs',
    phase: 'people',
    title: 'Plan a pair or group debrief',
    do: 'Let learners compare their attempts in pairs: one does, one watches with the checklist, then switch.',
    why: 'Motivation grows when learners feel connected, not just competent and in control.',
    theory: 'Self-Determination Theory (Ryan & Deci)',
    when: (a) => a.time !== 'short',
  },
  {
    id: 'comfort',
    phase: 'people',
    title: 'Keep sessions short and movement gentle',
    do: 'Avoid moving the learner\'s view for them. Keep panels within reach. Plan breaks between stages, and keep each headset session short.',
    why: 'Motion sickness adds load and cuts sessions short. Comfort is a learning condition, not a nicety.',
    theory: 'Simulator sickness (Kennedy et al.; LaViola)',
    tools: [T.place, T.sceneGen],
    when: (a) => has.need(a, 'comfort') || a.xr === 'new',
  },
  {
    id: 'access',
    phase: 'people',
    title: 'Design for seated and one-hand use from the start',
    do: 'Place buttons, parts and panels so they can be reached while sitting. Don\'t require two hands unless two hands are the goal.',
    why: 'Designing for different bodies from the start is easier and better than adapting for individuals later.',
    theory: 'Universal Design for Learning (CAST, UDL 3.0)',
    tools: [T.buttonMove, T.place, T.spawner],
    when: (a) => has.need(a, 'access'),
  },
  {
    id: 'language-visual',
    phase: 'people',
    title: 'Say it with pictures as well as words',
    do: 'Support key panels with an image. Keep sentences short and in the same structure. Consider a second-language version of the scene.',
    why: 'Several ways of presenting content let more learners in.',
    theory: 'UDL · language-sensitive teaching',
    tools: [T.writeImage],
    when: (a) => has.need(a, 'language'),
  },
  {
    id: 'short-time',
    phase: 'people',
    title: 'Short on time: cut, don\'t compress',
    do: 'Fewer steps, one task, no free exploration. A short lesson with a clear success beats a long one done in a hurry.',
    why: 'Overloaded learners learn less, however immersive the scene.',
    theory: 'Cognitive Load Theory · CAMIL (Makransky & Petersen)',
    when: (a) => a.time === 'short',
  },
];

/* ------------------------------------------------------------------ */
/* Checklist (Gagné's events as a completeness check, plus quality)    */
/* ------------------------------------------------------------------ */

export type CheckItem = {text: string; when?: (a: Answers) => boolean};

export const checklist: CheckItem[] = [
  {text: 'The goal is one sentence, and every step serves it.'},
  {text: 'The final check (checklist or real task) matches the goal.'},
  {text: 'The first step gets attention and says why it matters.'},
  {text: 'Learners see the whole task or system before the details.'},
  {text: 'Learners who are new to XR practise the controls first.', when: (a) => a.xr === 'new'},
  {text: 'Each step asks for one action, and finishes on that action where possible.'},
  {text: 'Instructions are placed next to what they describe.'},
  {text: 'Every step only shows what it needs.'},
  {text: 'The typical mistake is named at the step where it happens.'},
  {text: 'Learners make a prediction before each observation.', when: has.concept},
  {text: 'Help gets less from run to run, or from stage to stage.', when: has.procedure},
  {text: 'The last step asks for reflection, followed by a debrief.'},
  {text: 'Panels and buttons can be reached while sitting.', when: (a) => has.need(a, 'access')},
  {text: 'Technical terms are used the same way everywhere.', when: (a) => has.need(a, 'language')},
  {text: 'Scene Check (ALF > Utils) shows nothing to fix.'},
  {text: 'You tried the lesson yourself in the headset, and one learner tried it before the class.'},
];

/* ------------------------------------------------------------------ */
/* Summary sentence                                                    */
/* ------------------------------------------------------------------ */

export function summary(a: Answers, stages: Stage[]): string {
  const what = a.goal === 'procedure' ? 'A procedure lesson' : a.goal === 'concept' ? 'A concept lesson' : 'A lesson on understanding and doing';
  const who = a.prior === 'novice' ? 'for beginners' : a.prior === 'some' ? 'for learners with some experience' : 'for a mixed group';
  const route = stages.map((s) => s.name).join(' → ');
  return `${what} ${who}: ${route}.`;
}

export function isComplete(a: Answers): boolean {
  return questions.every((q) => (q.multi ? Array.isArray(a[q.id]) : a[q.id] !== undefined));
}
