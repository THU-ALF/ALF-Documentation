import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

type ToolRef = {name: string; to: string};

const lessonPath: {title: string; text: string; tools: ToolRef[]}[] = [
  {
    title: 'Create the scene',
    text: 'A new lesson scene in VR or AR, with the player already set up.',
    tools: [{name: 'Scene Generation', to: '/docs/tools/scene-generation'}],
  },
  {
    title: 'Add what learners work with',
    text: 'Models, buttons, moving parts and machines that come apart.',
    tools: [
      {name: 'Object Spawner', to: '/docs/tools/object-spawner'},
      {name: 'Button Injection', to: '/docs/tools/button-injection'},
      {name: 'Kinematic Editor Tool', to: '/docs/tools/xr-kinematics'},
      {name: 'Exploded View', to: '/docs/tools/exploded-view'},
    ],
  },
  {
    title: 'Line it up with a real object',
    text: 'AR only: printed QR codes place the model on the real machine.',
    tools: [{name: 'Positioning Setup', to: '/docs/tools/positioning'}],
  },
  {
    title: 'Build the lesson steps',
    text: 'Instructions, changes in the room, and how each step finishes.',
    tools: [{name: 'Scenario Setup', to: '/docs/tools/scenario-setup'}],
  },
  {
    title: 'Add it to the start menu',
    text: 'One button per lesson, opening it with the right setup.',
    tools: [{name: 'Main Menu Setup', to: '/docs/tools/main-menu'}],
  },
];

const allTools: {name: string; to: string; text: string}[] = [
  {name: 'Scene Generation', to: '/docs/tools/scene-generation', text: 'Creates a new lesson scene, in VR or AR, with the player set up.'},
  {name: 'Main Menu Setup', to: '/docs/tools/main-menu', text: 'Builds the start menu, with one button per lesson.'},
  {name: 'Scenario Setup', to: '/docs/tools/scenario-setup', text: 'Builds the lesson as a series of steps.'},
  {name: 'Guidance Setup', to: '/docs/tools/guidance-setup', text: 'A simpler Scenario Setup: instruction panels only.'},
  {name: 'Button Injection', to: '/docs/tools/button-injection', text: 'Adds pressable buttons to a machine, or anywhere in the room.'},
  {name: 'Model Adjuster', to: '/docs/tools/model-adjuster', text: 'Turns, resizes and sets a model on the ground before you place it.'},
  {name: 'Object Spawner', to: '/docs/tools/object-spawner', text: 'Puts a model into the scene and decides whether learners can pick it up.'},
  {name: 'Exploded View', to: '/docs/tools/exploded-view', text: 'Pulls a machine apart into its pieces, and puts it back together.'},
  {name: 'Kinematic Editor Tool', to: '/docs/tools/xr-kinematics', text: 'Makes parts slide, swing or spin, with buttons to control them.'},
  {name: 'Part Palette', to: '/docs/tools/part-palette', text: 'A board of small parts. Poking one gives the learner the real part.'},
  {name: 'YouTube Player', to: '/docs/tools/youtube-player', text: 'Adds a video screen that stays in the room.'},
  {name: 'Graphs', to: '/docs/tools/graphs', text: 'Turns a CSV file or formulas into a chart in the room.'},
  {name: 'Syntax Highlighter', to: '/docs/tools/syntax-highlighter', text: 'Shows program code on a board, coloured like in a code editor.'},
  {name: 'Motion', to: '/docs/tools/motion', text: 'Records how you operate a machine and replays it as ghost hands.'},
  {name: 'Planetary Lab', to: '/docs/tools/planetary-lab', text: 'A falling-objects experiment on Earth, the Moon or Mars.'},
  {name: 'Positioning Setup', to: '/docs/tools/positioning', text: 'AR only: lines up a 3D model with a real object using QR codes.'},
  {name: 'Utilities', to: '/docs/tools/utilities', text: 'Scene Check and Project Status: check the scene and project settings.'},
];

function Hero() {
  return (
    <header className={styles.hero}>
      <div className={styles.inner}>
        <Heading as="h1" className={styles.title}>
          Build XR lessons in Unity, one tool at a time
        </Heading>
        <p className={styles.lead}>
          The ALF tools set up scenes, buttons, moving parts and lesson steps
          for you. Each guide is short and assumes no Unity experience.
        </p>
        <div className={styles.actions}>
          <Link className={styles.primary} to="/docs/before-you-start">
            Start with the Unity basics
          </Link>
          <Link className={styles.secondary} to="/docs/intro">
            Read the introduction
          </Link>
        </div>
      </div>
    </header>
  );
}

function LessonPath() {
  return (
    <section className={styles.section} aria-labelledby="path-heading">
      <div className={styles.inner}>
        <Heading as="h2" id="path-heading" className={styles.sectionTitle}>
          Building a lesson, in order
        </Heading>
        <ol className={styles.path}>
          {lessonPath.map((step) => (
            <li key={step.title} className={styles.step}>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepText}>{step.text}</p>
              <p className={styles.stepTools}>
                {step.tools.map((t, i) => (
                  <span key={t.to}>
                    {i > 0 && ', '}
                    <Link to={t.to}>{t.name}</Link>
                  </span>
                ))}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function ToolIndex() {
  return (
    <section className={styles.section} aria-labelledby="tools-heading">
      <div className={styles.inner}>
        <Heading as="h2" id="tools-heading" className={styles.sectionTitle}>
          All tools
        </Heading>
        <p className={styles.sectionLead}>
          In Unity, every tool is in the top menu under <strong>ALF</strong>.
        </p>
        <dl className={styles.tools}>
          {allTools.map((t) => (
            <div key={t.to} className={styles.toolRow}>
              <dt>
                <Link to={t.to}>{t.name}</Link>
              </dt>
              <dd>{t.text}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Guides for the ALF XR tools"
      description="Step-by-step guides for building XR lessons in Unity with the ALF tools.">
      <Hero />
      <main>
        <LessonPath />
        <ToolIndex />
      </main>
    </Layout>
  );
}
