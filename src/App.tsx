import { useMemo, useState } from 'react';
import SectionCard from './components/SectionCard';
import { essayQuestions, glossary, mockExams, responseModels, rubrics, sources, testQuestions, timelineActivities, topics } from './data/content';

type Menu = 'inici' | 'temari' | 'cronologia' | 'fonts' | 'glossari' | 'simulador';
const MENU: Menu[] = ['inici', 'temari', 'cronologia', 'fonts', 'glossari', 'simulador'];

export default function App() {
  const [menu, setMenu] = useState<Menu>('inici');
  const [done, setDone] = useState<number[]>(() => JSON.parse(localStorage.getItem('pau-progress') ?? '[]'));
  const progress = useMemo(() => Math.round((done.length / testQuestions.length) * 100), [done.length]);
  const toggleDone = (id: number) => {
    const updated = done.includes(id) ? done.filter((v) => v !== id) : [...done, id];
    setDone(updated);
    localStorage.setItem('pau-progress', JSON.stringify(updated));
  };

  return <div className="min-h-screen bg-slate-50 text-slate-800">
    <header className="bg-sky-700 text-white p-6 shadow"><h1 className="text-2xl font-bold">PAU Història d'Espanya · 2n Batxillerat (CV)</h1></header>
    <nav className="bg-white border-b sticky top-0 z-10"><ul className="max-w-6xl mx-auto flex flex-wrap gap-2 p-3">{MENU.map((item) => <li key={item}><button onClick={() => setMenu(item)} className={`px-3 py-2 rounded-lg text-sm ${menu === item ? 'bg-sky-700 text-white' : 'bg-slate-100'}`}>{item.toUpperCase()}</button></li>)}</ul></nav>
    <main className="max-w-6xl mx-auto p-4">
      {menu === 'inici' && <>
        <SectionCard title="Pàgina d'inici"><p>Contingut complet en valencià per estudiar temari, practicar fonts, preparar desenvolupaments i entrenar simulacres PAU.</p></SectionCard>
        <SectionCard title="Progrés test"><p><strong>{progress}%</strong> ({done.length}/{testQuestions.length})</p></SectionCard>
      </>}

      {menu === 'temari' && topics.map((t) => <SectionCard key={t.id} title={`${t.titol} (${t.periode})`}>
        <p>{t.resumInicial}</p><p className="mt-2">{t.explicacio}</p>
        <p className="mt-2"><strong>Cronologia:</strong> {t.cronologia.join(' · ')}</p>
        <p><strong>Conceptes:</strong> {t.conceptesClau.join(', ')}</p>
        <p><strong>PAU:</strong> {t.possiblesPreguntesPAU[0]}</p>
      </SectionCard>)}

      {menu === 'cronologia' && timelineActivities.map((a) => <SectionCard key={a.id} title={`${a.data} · ${a.titol}`}><p>{a.explicacio}</p><p className="mt-1 text-sm"><strong>{a.periode}</strong> · {a.categoria} · {a.temaRelacionat}</p></SectionCard>)}

      {menu === 'fonts' && sources.map((s) => <SectionCard key={s.id} title={`${s.titol} (${s.data})`}>
        <p><strong>Tipus:</strong> {s.tipus} · <strong>Autor:</strong> {s.autorInstitucio}</p>
        <p className="mt-2 italic">{s.fragment}</p>
        <p className="mt-2"><strong>Pregunta PAU:</strong> {s.preguntaPAU}</p>
      </SectionCard>)}

      {menu === 'glossari' && <SectionCard title={`Glossari (${glossary.length} conceptes)`}><div className="grid md:grid-cols-2 gap-3">{glossary.map((g) => <div key={g.terme}><p><strong>{g.terme}</strong>: {g.definicio}</p><p className="text-xs text-slate-600">{g.periode} · {g.temaRelacionat}</p></div>)}</div></SectionCard>}

      {menu === 'simulador' && <>
        <SectionCard title={`Test (${testQuestions.length} preguntes)`}>{testQuestions.map((q) => <div key={q.id} className="border rounded p-2 mb-2"><p>{q.id}. {q.pregunta}</p><p className="text-xs">Bloc: {q.bloc} · Dificultat: {q.dificultat}</p><button className="mt-1 px-2 py-1 bg-sky-100 rounded" onClick={() => toggleDone(q.id)}>{done.includes(q.id) ? 'Pendent' : 'Fet'}</button></div>)}</SectionCard>
        <SectionCard title={`Desenvolupament (${essayQuestions.length})`}><ul className="list-decimal ml-5">{essayQuestions.map((q) => <li key={q.id}><strong>{q.pregunta}</strong> ({q.tema})</li>)}</ul></SectionCard>
        <SectionCard title={`Simulacres (${mockExams.length})`}><ul>{mockExams.map((m) => <li key={m.id}>{m.titol} · Definicions: {m.definicions.join(', ')} · Temps: {m.temps}</li>)}</ul></SectionCard>
        <SectionCard title="Rúbriques"><ul>{rubrics.map((r) => <li key={r.id}><strong>{r.nom}</strong>: {r.excel_lent}</li>)}</ul></SectionCard>
        <SectionCard title="Models de resposta"><ul>{responseModels.map((m) => <li key={m.id}>{m.titol}</li>)}</ul></SectionCard>
      </>}
    </main>
  </div>;
}
