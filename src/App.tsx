import { useMemo, useState } from 'react';
import SectionCard from './components/SectionCard';
import { essayQuestions, glossary, mockExams, responseModels, rubrics, sources, testQuestions, timelineActivities, topics } from './data/content';
import { mediaItems } from './data/media';
import { historicalSources } from './data/sources';
import { visualActivities } from './data/visualActivities';
import { FilterPanel, ImageGallery, PeriodBadge, ProgressCard, SearchBar, SourceCard, SourceViewer, TimelineEventCard, TopicHero, VisualActivityCard } from './components/ui';
import SafeImage from './components/SafeImage';

type Menu = 'inici' | 'temari' | 'cronologia' | 'fonts-imatges' | 'simulacres' | 'glossari' | 'activitats';
const MENU: Menu[] = ['inici', 'temari', 'cronologia', 'fonts-imatges', 'simulacres', 'glossari', 'activitats'];

export default function App() {
  const [menu, setMenu] = useState<Menu>('inici');
  const [done, setDone] = useState<number[]>(() => JSON.parse(localStorage.getItem('pau-progress') ?? '[]'));
  const [query, setQuery] = useState('');
  const [period, setPeriod] = useState('Tots');
  const progress = useMemo(() => Math.round((done.length / testQuestions.length) * 100), [done.length]);
  const periods = ['Tots', ...Array.from(new Set(mediaItems.map((m) => m.period)))];

  const filteredSources = historicalSources.filter((s) => (period === 'Tots' || s.period === period) && `${s.title} ${s.historicalContext}`.toLowerCase().includes(query.toLowerCase()));
  const filteredMedia = mediaItems.filter((m) => (period === 'Tots' || m.period === period) && `${m.title} ${m.description}`.toLowerCase().includes(query.toLowerCase()));
  const quickLinks: Array<{ title: string; target: Menu }> = [
    { title: 'Temari', target: 'temari' },
    { title: 'Cronologia', target: 'cronologia' },
    { title: 'Fonts històriques', target: 'fonts-imatges' },
    { title: 'Comentari de fonts', target: 'fonts-imatges' },
    { title: 'Glossari', target: 'glossari' },
    { title: 'Simulacres PAU', target: 'simulacres' },
  ];

  return <div className="min-h-screen bg-stone-100 text-slate-800">
    <header className="bg-slate-900 text-stone-50 p-6 shadow-lg"><div className="max-w-6xl mx-auto"><h1 className="text-3xl font-bold">PAU Història d’Espanya</h1><p className="text-stone-200">Preparació per a 2n de Batxillerat · Comunitat Valenciana</p></div></header>
    <nav className="bg-white/95 backdrop-blur border-b sticky top-0 z-10"><ul className="max-w-6xl mx-auto flex flex-wrap gap-2 p-3">{MENU.map((item) => <li key={item}><button onClick={() => setMenu(item)} className={`px-3 py-2 rounded-xl text-sm font-medium ${menu === item ? 'bg-rose-800 text-white' : 'bg-slate-100 hover:bg-slate-200'}`}>{item}</button></li>)}</ul></nav>
    <main className="max-w-6xl mx-auto p-4 space-y-4">
      {menu === 'inici' && <>
        <TopicHero title="PAU Història d’Espanya" subtitle="Preparació guiada, fonts primàries i pràctica visual" imageUrl={mediaItems[0].imageUrl} />
        <div className="grid md:grid-cols-3 gap-4">
          {quickLinks.map(({ title, target }) => (
            <button
              key={title}
              type="button"
              onClick={() => setMenu(target)}
              className="text-left rounded-2xl transition hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-700"
              aria-label={`Anar a ${title}`}
            >
              <SectionCard title={title}>
                <p>Accés ràpid a {title.toLowerCase()}.</p>
              </SectionCard>
            </button>
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-4"><ProgressCard progress={progress} /><SectionCard title="Repàs ràpid"><p>Continua estudiant des dels test, les fonts i els simulacres amb seguiment del progrés.</p></SectionCard></div>
        <SectionCard title="Mosaic visual per períodes"><ImageGallery items={mediaItems.slice(0,9)} /></SectionCard>
      </>}
      {menu === 'temari' && topics.map((t) => {
        const imgs = mediaItems.filter((m) => m.relatedTopic.toLowerCase().includes(t.title.split(' ')[0].toLowerCase()) || m.period.includes(t.title.split(' ')[0])).slice(0, 4);
        return <SectionCard key={t.id} title={t.title}><PeriodBadge period={t.period} /><p className="mt-2 text-sm whitespace-pre-wrap">{t.summary}</p><div className="mt-3"><h4 className="font-semibold">Explicació desenvolupada</h4><p className="text-sm whitespace-pre-wrap mt-1">{t.explanation}</p></div><div className="mt-3"><h4 className="font-semibold">Cronologia</h4><ul className="list-disc ml-5 text-sm">{t.chronology.map((c, i) => <li key={i}>{c}</li>)}</ul></div><div className="grid md:grid-cols-2 gap-3 mt-3"><div><h4 className="font-semibold">Conceptes clau</h4><ul className="list-disc ml-5 text-sm">{t.keyConcepts.map((k, i) => <li key={i}>{k}</li>)}</ul></div><div><h4 className="font-semibold">Personatges</h4><ul className="list-disc ml-5 text-sm">{t.people.map((p, i) => <li key={i}>{p}</li>)}</ul></div></div><div className="mt-3"><h4 className="font-semibold">Preguntes PAU</h4><ul className="list-disc ml-5 text-sm">{t.pauQuestions.map((q, i) => <li key={i}>{q}</li>)}</ul></div><div className="mt-3"><h4 className="font-semibold">Model de resposta (aprox. 400 paraules)</h4><p className="text-sm whitespace-pre-wrap mt-1">{responseModels.find((r) => r.title === t.title)?.answer}</p></div>{imgs[0] && <SafeImage src={imgs[0].imageUrl} alt={imgs[0].altText} className="w-full max-h-80 object-contain rounded-xl bg-stone-100 mt-3" />}<ImageGallery items={imgs} /></SectionCard>;
      })}
      {menu === 'cronologia' && timelineActivities.slice(0, 20).map((a, i) => <TimelineEventCard key={i} date={a.date} title={a.title} description={a.description} imageUrl={mediaItems[i % mediaItems.length]?.imageUrl} />)}
      {menu === 'fonts-imatges' && <>
        <div className="grid md:grid-cols-3 gap-3"><SearchBar value={query} onChange={setQuery} /><FilterPanel options={periods} value={period} onChange={setPeriod} /></div>
        <SectionCard title="Fonts històriques">{filteredSources.slice(0, 5).map((s) => <div key={s.id} className="mb-3"><SourceCard source={s} /><SourceViewer source={s} /></div>)}</SectionCard>
        <SectionCard title="Imatges històriques"><ImageGallery items={filteredMedia} /></SectionCard>
      </>}
      {menu === 'simulacres' && <SectionCard title="Simulador PAU millorat"><ul className="list-disc ml-5">{mockExams.map((m, i) => <li key={i}><strong>{m.title}</strong>: font escrita ({historicalSources[i % historicalSources.length].title}), imatge ({mediaItems[i % mediaItems.length].title}), desenvolupament ({essayQuestions[i % essayQuestions.length].question}), dues definicions ({m.shortDefinitions.join(', ')}), rúbrica ({rubrics[0].name}).</li>)}</ul></SectionCard>}
      {menu === 'glossari' && <SectionCard title="Glossari"><div className="grid md:grid-cols-2 gap-3">{glossary.slice(0, 40).map((g, i) => <article key={i} className="rounded-xl border border-slate-200 bg-white p-4"><p className="font-bold">{g.term}</p><p className="text-sm mt-1">{g.definition}</p><p className="text-xs mt-2 text-slate-600"><strong>Període:</strong> {g.period}</p><p className="text-xs text-slate-600"><strong>Tema relacionat:</strong> {g.relatedTopic}</p><p className="text-xs mt-2 text-slate-700"><strong>Exemple PAU:</strong> {g.exampleUse}</p></article>)}</div></SectionCard>}
      {menu === 'activitats' && <div className="grid md:grid-cols-2 gap-4">{visualActivities.map((v) => <VisualActivityCard key={v.id} activity={v} />)}</div>}
    </main>
  </div>;
}
