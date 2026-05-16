import { useMemo, useState } from 'react';
import SectionCard from './components/SectionCard';
import { essayQuestions, glossary, mockExams, responseModels, rubrics, sources, testQuestions, timelineActivities, topics } from './data/content';

type Menu = 'inici' | 'temes' | 'fonts' | 'glossari' | 'test' | 'assaig' | 'cronologia' | 'simulacres' | 'rubriques' | 'models';
const MENU: Menu[] = ['inici', 'temes', 'fonts', 'glossari', 'test', 'assaig', 'cronologia', 'simulacres', 'rubriques', 'models'];

export default function App() {
  const [menu, setMenu] = useState<Menu>('inici');
  const [done, setDone] = useState<number[]>(() => JSON.parse(localStorage.getItem('pau-progress') ?? '[]'));
  const progress = useMemo(() => Math.round((done.length / testQuestions.length) * 100), [done.length]);

  return <div className="min-h-screen bg-slate-50 text-slate-800">
    <header className="bg-sky-700 text-white p-6 shadow"><h1 className="text-2xl font-bold">PAU Història d'Espanya · 2n Batxillerat</h1></header>
    <nav className="bg-white border-b sticky top-0 z-10"><ul className="max-w-6xl mx-auto flex flex-wrap gap-2 p-3">{MENU.map((item) => <li key={item}><button onClick={() => setMenu(item)} className={`px-3 py-2 rounded-lg text-sm ${menu === item ? 'bg-sky-700 text-white' : 'bg-slate-100'}`}>{item.toUpperCase()}</button></li>)}</ul></nav>
    <main className="max-w-6xl mx-auto p-4 space-y-4">
      {menu === 'inici' && <>
        <SectionCard title="Panell general">
          <p>Temes: {topics.length} · Fonts: {sources.length} · Glossari: {glossary.length} · Test: {testQuestions.length} · Simulacres: {mockExams.length}</p>
          <p className="mt-2">Progrés test: <strong>{progress}%</strong> ({done.length}/{testQuestions.length})</p>
        </SectionCard>
      </>}

      {menu === 'temes' && topics.map(t => <SectionCard key={t.id} title={`${t.title} (${t.period})`}>
        <pre className="whitespace-pre-wrap text-sm">{t.summary}</pre>
        <pre className="whitespace-pre-wrap mt-2 text-sm">{t.explanation}</pre>
        <p className="mt-2"><strong>Cronologia:</strong> {t.chronology.join(' · ')}</p>
        <p><strong>Conceptes:</strong> {t.keyConcepts.join(', ')}</p>
        <p><strong>Personatges:</strong> {t.people.join(', ')}</p>
        <ul className="list-disc ml-5"><strong>Preguntes PAU:</strong>{t.pauQuestions.map((q, i) => <li key={i}>{q}</li>)}</ul>
      </SectionCard>)}

      {menu === 'fonts' && sources.map((s, i) => <SectionCard key={i} title={`${s.title} (${s.date})`}>
        <p><strong>Tipus:</strong> {s.type} · <strong>Naturalesa:</strong> {s.nature} · <strong>Autor:</strong> {s.author}</p>
        <p className="mt-2">{s.context}</p><p className="italic mt-2">{s.excerpt}</p>
        <ul className="list-disc ml-5 mt-2">{s.mainIdeas.map((m, j) => <li key={j}>{m}</li>)}</ul>
        <p className="mt-2"><strong>Pregunta PAU:</strong> {s.pauQuestion}</p>
        <p className="mt-2 text-sm">{s.modelAnswer}</p>
      </SectionCard>)}

      {menu === 'glossari' && <SectionCard title={`Glossari (${glossary.length})`}><div className="grid md:grid-cols-2 gap-3">{glossary.map((g, i) => <div key={i}><p><strong>{g.term}</strong>: {g.definition}</p><p className="text-xs">{g.period} · {g.relatedTopic}</p></div>)}</div></SectionCard>}

      {menu === 'test' && <SectionCard title={`Test (${testQuestions.length})`}>{testQuestions.map((q, i) => <div key={i} className="border rounded p-2 mb-2">
        <p><strong>{i + 1}.</strong> {q.question}</p>
        <p className="text-xs">{q.topic} · {q.difficulty}</p>
        <button className="mt-1 px-2 py-1 bg-sky-100 rounded" onClick={() => {
          const id = i + 1; const updated = done.includes(id) ? done.filter(v => v !== id) : [...done, id]; setDone(updated); localStorage.setItem('pau-progress', JSON.stringify(updated));
        }}>{done.includes(i + 1) ? 'Pendent' : 'Fet'}</button>
      </div>)}</SectionCard>}

      {menu === 'assaig' && <SectionCard title={`Desenvolupament (${essayQuestions.length})`}><ol className="list-decimal ml-5">{essayQuestions.map((q, i) => <li key={i} className="mb-2"><strong>{q.question}</strong><p className="text-sm">Tema: {q.topic}</p><p className="text-sm">Esquema: {q.outline.join(' · ')}</p></li>)}</ol></SectionCard>}

      {menu === 'cronologia' && timelineActivities.map((a, i) => <SectionCard key={i} title={`${a.date} · ${a.title}`}><p>{a.description}</p><p className="text-xs mt-1">{a.period} · {a.category} · {a.relatedTopic}</p></SectionCard>)}

      {menu === 'simulacres' && <SectionCard title={`Simulacres (${mockExams.length})`}><ul>{mockExams.map((m, i) => <li key={i} className="mb-2"><strong>{m.title}</strong> · Definicions: {m.shortDefinitions.join(', ')} · Font: {m.sourceCommentary} · Temps: {m.recommendedTime}</li>)}</ul></SectionCard>}
      {menu === 'rubriques' && <SectionCard title="Rúbriques">{rubrics.map((r, i) => <div key={i} className="mb-2"><strong>{r.name}</strong><p className="text-sm">Excel·lent: {r.excellent}</p></div>)}</SectionCard>}
      {menu === 'models' && <SectionCard title={`Models de resposta (${responseModels.length})`}>{responseModels.map((m, i) => <div key={i} className="mb-3"><h3 className="font-semibold">{m.title}</h3><p className="text-sm">{m.question}</p><p className="text-sm">{m.answer.slice(0, 350)}...</p></div>)}</SectionCard>}
    </main>
  </div>;
}
