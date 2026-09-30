'use client';
import { useState } from 'react';
import type { BasicLesson } from '@/lib/basics';

export default function BasicQuiz({ questions }: { questions: BasicLesson['quiz'] }) {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  return <section className="basic-quiz" aria-labelledby="quiz-title">
    <span className="kicker">A quick check</span><h2 id="quiz-title">What stuck with you?</h2>
    <p>No scores to chase. Choose an answer and see why.</p>
    {questions.map((q, i) => <fieldset key={q.question}>
      <legend>{i + 1}. {q.question}</legend>
      <div className="basic-options">{q.options.map((option, j) => <button type="button" key={option} aria-pressed={answers[i] === j} onClick={() => setAnswers({ ...answers, [i]: j })}>{option}</button>)}</div>
      <p className="basic-feedback" aria-live="polite">{answers[i] !== undefined ? `${answers[i] === q.answer ? 'That’s right.' : 'Not quite.'} ${q.explanation}` : 'Choose an answer above.'}</p>
    </fieldset>)}
  </section>;
}
