import { useMemo, useState } from 'react';
import SectionCard from './components/SectionCard';
import { essayQuestions, glossary, mockExams, sources, testQuestions, timelineActivities, topics } from './data/content';

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

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <header className="bg-sky-700 text-white p-6 shadow">
        <h1 className="text-2xl font-bold">PAU Història d'Espanya · 2n Batxillerat (CV)</h1>
        <p className="opacity-95">Preparació guiada amb temari, fonts, cronologia, glossari i simulador.</p>
      </header>

      <nav className="bg-white border-b sticky top-0 z-10">
        <ul className="max-w-6xl mx-auto flex flex-wrap gap-2 p-3">
          {MENU.map((item) => (
            <li key={item}>
              <button onClick={() => setMenu(item)} className={`px-3 py-2 rounded-lg text-sm ${menu === item ? 'bg-sky-700 text-white' : 'bg-slate-100'}`}>
                {item.toUpperCase()}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <main className="max-w-6xl mx-auto p-4">
        {menu === 'inici' && (
          <>
            <SectionCard title="Pàgina d'inici">
              <p>Benvingut/da! Aquesta app t'ajuda a preparar la PAU d'Història d'Espanya amb contingut estructurat i seguiment del progrés.</p>
            </SectionCard>
            <SectionCard title="Progrés global (localStorage)">
              <p className="mb-2">Progrés en test: <strong>{progress}%</strong> ({done.length}/{testQuestions.length})</p>
              <div className="w-full bg-slate-200 rounded-full h-3">
                <div className="bg-sky-600 h-3 rounded-full" style={{ width: `${progress}%` }} />
              </div>
            </SectionCard>
          </>
        )}

        {menu === 'temari' && topics.map((t) => (
          <SectionCard key={t.id} title={t.titol}>
            <p>{t.resum}</p>
            <ul className="list-disc ml-5 mt-2">{t.puntsClau.map((p) => <li key={p}>{p}</li>)}</ul>
          </SectionCard>
        ))}

        {menu === 'cronologia' && timelineActivities.map((a) => (
          <SectionCard key={a.id} title={`Activitat ${a.id}: ${a.enunciat}`}>
            <p><strong>Esdeveniments:</strong> {a.esdeveniments.join(' · ')}</p>
            <p className="mt-2"><strong>Ordre correcte:</strong> {a.ordreCorrecte.join(' → ')}</p>
          </SectionCard>
        ))}

        {menu === 'fonts' && sources.map((s) => (
          <SectionCard key={s.id} title={`${s.titol} (${s.any})`}>
            <p><strong>Autor:</strong> {s.autor} · <strong>Tipus:</strong> {s.tipus}</p>
            <p className="mt-2 italic">{s.fragment}</p>
            <p className="mt-2"><strong>Pregunta guia:</strong> {s.preguntaGuia}</p>
          </SectionCard>
        ))}

        {menu === 'glossari' && (
          <SectionCard title="Glossari (30 conceptes)">
            <div className="grid md:grid-cols-2 gap-2">{glossary.map((g) => <p key={g.terme}><strong>{g.terme}:</strong> {g.definicio}</p>)}</div>
          </SectionCard>
        )}

        {menu === 'simulador' && (
          <>
            <SectionCard title="Simulador bàsic d'examen: test (20 preguntes)">
              <ul className="space-y-3">
                {testQuestions.map((q) => (
                  <li key={q.id} className="border rounded p-3">
                    <p className="font-medium">{q.id}. {q.pregunta}</p>
                    <div className="text-sm mt-1">{q.opcions.join(' | ')}</div>
                    <button className="mt-2 px-2 py-1 bg-sky-100 rounded" onClick={() => toggleDone(q.id)}>
                      {done.includes(q.id) ? 'Marcar com pendent' : 'Marcar com fet'}
                    </button>
                  </li>
                ))}
              </ul>
            </SectionCard>

            <SectionCard title="Preguntes de desenvolupament (10)">
              <ul className="list-decimal ml-5 space-y-2">{essayQuestions.map((q) => <li key={q.id}><strong>{q.pregunta}</strong><br />{q.pauta}</li>)}</ul>
            </SectionCard>

            <SectionCard title="Simulacres d'examen (3)">
              <ul className="space-y-2">{mockExams.map((m) => <li key={m.id}><strong>{m.titol}</strong>: {m.apartats.join(' · ')}</li>)}</ul>
            </SectionCard>
          </>
        )}
      </main>
    </div>
  );
}
