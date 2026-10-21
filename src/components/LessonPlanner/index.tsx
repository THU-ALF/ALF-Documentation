import React, {useEffect, useMemo, useState} from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from './styles.module.css';
import {
  type Answers,
  type Phase,
  type Tip,
  questions,
  phases,
  tips,
  checklist,
  planStages,
  planPath,
  summary,
  isComplete,
} from './plannerData';

/* ---------- answers <-> URL, so a plan can be bookmarked or shared ---------- */

function readUrl(): Answers {
  if (typeof window === 'undefined') return {};
  const p = new URLSearchParams(window.location.search);
  const a: Record<string, unknown> = {};
  for (const q of questions) {
    const v = p.get(q.id);
    if (v === null) continue;
    if (q.multi) a[q.id] = v === '' || v === 'none' ? [] : v.split(',').filter((x) => q.options.some((o) => o.value === x));
    else if (q.options.some((o) => o.value === v)) a[q.id] = v;
  }
  return a as Answers;
}

function writeUrl(a: Answers) {
  if (typeof window === 'undefined') return;
  const p = new URLSearchParams();
  for (const q of questions) {
    const v = a[q.id];
    if (v === undefined) continue;
    p.set(q.id, Array.isArray(v) ? (v.length ? v.join(',') : 'none') : String(v));
  }
  const qs = p.toString();
  window.history.replaceState(null, '', `${window.location.pathname}${qs ? `?${qs}` : ''}${window.location.hash}`);
}

function labelFor(id: keyof Answers, value: string): string {
  const q = questions.find((x) => x.id === id);
  return q?.options.find((o) => o.value === value)?.label ?? value;
}

/* ---------- the planner ---------- */

export default function LessonPlanner() {
  const [answers, setAnswers] = useState<Answers>({});
  const [index, setIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [copied, setCopied] = useState(false);

  // Restore answers from the link on first load.
  useEffect(() => {
    const a = readUrl();
    setAnswers(a);
    if (isComplete(a)) setShowResult(true);
    else {
      const firstOpen = questions.findIndex((q) => a[q.id] === undefined);
      setIndex(firstOpen < 0 ? 0 : firstOpen);
    }
  }, []);

  useEffect(() => writeUrl(answers), [answers]);

  const q = questions[index];

  function choose(value: string) {
    const next = {...answers, [q.id]: value} as Answers;
    setAnswers(next);
    goNext(next);
  }

  function toggle(value: string) {
    const cur = (answers[q.id] as string[] | undefined) ?? [];
    const nextVals = cur.includes(value) ? cur.filter((v) => v !== value) : [...cur, value];
    setAnswers({...answers, [q.id]: nextVals} as Answers);
  }

  function goNext(a: Answers = answers) {
    if (index < questions.length - 1) setIndex(index + 1);
    else if (isComplete(a)) setShowResult(true);
  }

  function restart() {
    setAnswers({});
    setIndex(0);
    setShowResult(false);
  }

  function edit(i: number) {
    setIndex(i);
    setShowResult(false);
  }

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard blocked: the link is in the address bar anyway */
    }
  }

  if (showResult && isComplete(answers)) {
    return (
      <Result
        answers={answers}
        onEdit={edit}
        onRestart={restart}
        onCopy={copyLink}
        copied={copied}
      />
    );
  }

  const selectedMulti = (answers[q.id] as string[] | undefined) ?? [];

  return (
    <div className={styles.wizard}>
      <div className={styles.progress} aria-hidden="true">
        {questions.map((x, i) => (
          <span
            key={x.id}
            className={clsx(styles.dot, i < index && styles.dotDone, i === index && styles.dotNow)}
          />
        ))}
      </div>
      <p className={styles.counter}>
        Question {index + 1} of {questions.length}
      </p>
      <h3 className={styles.question}>{q.title}</h3>
      {q.help && <p className={styles.help}>{q.help}</p>}

      <div className={styles.options} role={q.multi ? 'group' : 'radiogroup'} aria-label={q.title}>
        {q.options.map((o) => {
          const selected = q.multi ? selectedMulti.includes(o.value) : answers[q.id] === o.value;
          return (
            <button
              key={o.value}
              type="button"
              role={q.multi ? 'checkbox' : 'radio'}
              aria-checked={selected}
              className={clsx(styles.option, selected && styles.optionSelected)}
              onClick={() => (q.multi ? toggle(o.value) : choose(o.value))}>
              <span className={styles.optionMark} aria-hidden="true">
                {q.multi ? (selected ? '☑' : '☐') : selected ? '●' : '○'}
              </span>
              <span>
                <span className={styles.optionLabel}>{o.label}</span>
                {o.hint && <span className={styles.optionHint}>{o.hint}</span>}
              </span>
            </button>
          );
        })}
      </div>

      <div className={styles.nav}>
        <button
          type="button"
          className="button button--secondary"
          disabled={index === 0}
          onClick={() => setIndex(index - 1)}>
          Back
        </button>
        {q.multi && (
          <button
            type="button"
            className="button button--primary"
            onClick={() => {
              const a = answers[q.id] === undefined ? ({...answers, [q.id]: []} as Answers) : answers;
              setAnswers(a);
              goNext(a);
            }}>
            {selectedMulti.length === 0 ? 'None of these, show my plan' : 'Show my plan'}
          </button>
        )}
        {!q.multi && answers[q.id] !== undefined && (
          <button type="button" className="button button--primary" onClick={() => goNext()}>
            Next
          </button>
        )}
      </div>
    </div>
  );
}

/* ---------- the result ---------- */

const phaseOrder: Phase[] = ['start', 'step', 'act', 'fade', 'mistakes', 'close', 'people'];

function Result({
  answers,
  onEdit,
  onRestart,
  onCopy,
  copied,
}: {
  answers: Answers;
  onEdit: (i: number) => void;
  onRestart: () => void;
  onCopy: () => void;
  copied: boolean;
}) {
  const stages = useMemo(() => planStages(answers), [answers]);
  const paths = useMemo(() => planPath(answers), [answers]);
  const selected = useMemo(() => tips.filter((t) => !t.when || t.when(answers)), [answers]);
  const gaps = selected.filter((t) => t.gap);
  const checks = checklist.filter((c) => !c.when || c.when(answers));

  return (
    <div className={styles.result}>
      <div className={styles.resultHead}>
        <p className={styles.kicker}>Your lesson plan</p>
        <p className={styles.summary}>{summary(answers, stages)}</p>
        <ul className={styles.chips}>
          {questions.map((q, i) => {
            const v = answers[q.id];
            const text = Array.isArray(v)
              ? v.length
                ? v.map((x) => labelFor(q.id, x)).join(', ')
                : 'No special needs'
              : labelFor(q.id, String(v));
            return (
              <li key={q.id}>
                <button type="button" className={styles.chip} onClick={() => onEdit(i)} title={`Change: ${q.title}`}>
                  {text}
                </button>
              </li>
            );
          })}
        </ul>
        <div className={clsx(styles.actions, styles.noPrint)}>
          <button type="button" className="button button--primary button--sm" onClick={onCopy}>
            {copied ? 'Link copied' : 'Copy link to this plan'}
          </button>
          <button type="button" className="button button--secondary button--sm" onClick={() => window.print()}>
            Print or save as PDF
          </button>
          <button type="button" className="button button--link button--sm" onClick={onRestart}>
            Start over
          </button>
        </div>
        <p className={clsx(styles.small, styles.noPrint)}>Click an answer above to change it.</p>
      </div>

      <h2>1. Your stages</h2>
      <p>
        The same task in every stage. Support goes down, realism and learner independence go up.
      </p>
      <ol className={styles.stages}>
        {stages.map((s, i) => (
          <li key={s.key} className={styles.stage}>
            <p className={styles.stageNum}>Stage {i + 1}</p>
            <h3 className={styles.stageName}>{s.name}</h3>
            <p>{s.purpose}</p>
            <p className={styles.small}>
              <strong>Support:</strong> {s.support}
            </p>
            <p className={styles.small}>
              <strong>Build:</strong> {s.build}
            </p>
            {s.note && <p className={styles.stageNote}>{s.note}</p>}
            {s.tools.length > 0 && <ToolLinks tools={s.tools} />}
          </li>
        ))}
      </ol>

      <h2>2. Your learning path</h2>
      {paths.length > 1 && <p>Understand first, then do: run the concept path before the procedure path.</p>}
      <div className={styles.paths}>
        {paths.map((p) => (
          <div key={p.name} className={styles.path}>
            <h3>{p.name}</h3>
            <ol>
              {p.pattern.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ol>
            <p className={styles.theory}>Based on: {p.why}</p>
          </div>
        ))}
      </div>

      <h2>3. Tips for your lesson</h2>
      <p>
        {selected.length} tips match your answers. Each says what to do, why it works, and which ALF guide shows
        how.
      </p>
      {gaps.length > 0 && (
        <div className={clsx('alert alert--warning', styles.gapSummary)}>
          <strong>{gaps.length} of these touch things ALF can't do yet.</strong> Each one comes with a workaround,
          marked <span className={styles.gapBadge}>Not built in yet</span>.
        </div>
      )}
      {phaseOrder.map((ph) => {
        const list = selected.filter((t) => t.phase === ph);
        if (!list.length) return null;
        return (
          <section key={ph} className={styles.phase}>
            <h3>{phases[ph].title}</h3>
            <p className={styles.phaseIntro}>{phases[ph].intro}</p>
            {list.map((t) => (
              <TipCard key={t.id} tip={t} />
            ))}
          </section>
        );
      })}

      <h2>4. Check before you publish</h2>
      <ul className={styles.checklist}>
        {checks.map((c) => (
          <li key={c.text}>
            <label>
              <input type="checkbox" /> {c.text}
            </label>
          </li>
        ))}
      </ul>

      <p className={clsx(styles.small, styles.noPrint)}>
        The full guidelines are in this section of the docs. Where do the recommendations come from? See{' '}
        <Link to="/docs/didactics/theory">The theory behind the guidelines</Link>.
      </p>
    </div>
  );
}

function TipCard({tip}: {tip: Tip}) {
  return (
    <article className={styles.tip}>
      <h4 className={styles.tipTitle}>{tip.title}</h4>
      <p>{tip.do}</p>
      <p className={styles.why}>
        <strong>Why:</strong> {tip.why} <span className={styles.theory}>{tip.theory}</span>
      </p>
      {tip.gap && (
        <p className={styles.gap}>
          <span className={styles.gapBadge}>Not built in yet</span> {tip.gap}
        </p>
      )}
      {tip.tools && tip.tools.length > 0 && <ToolLinks tools={tip.tools} />}
    </article>
  );
}

function ToolLinks({tools}: {tools: {label: string; to: string}[]}) {
  return (
    <p className={styles.tools}>
      <span className={styles.toolsLabel}>In ALF:</span>
      {tools.map((t) => (
        <Link key={t.to} to={t.to} className={styles.toolLink}>
          {t.label}
        </Link>
      ))}
    </p>
  );
}
