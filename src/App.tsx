import { Fragment, useMemo, useState } from 'react';
import SectionCard from './components/SectionCard';
import { essayQuestions, glossary, mockExams, responseModels, rubrics, testQuestions, timelineActivities, topics } from './data/content';
import { mediaItems } from './data/media';
import { historicalSources } from './data/sources';
import { FilterPanel, ImageGallery, PeriodBadge, ProgressCard, SearchBar, SourceCard, SourceViewer, TimelineEventCard, TopicHero } from './components/ui';
import SafeImage from './components/SafeImage';

type Menu = 'inici' | 'temari' | 'tema' | 'cronologia' | 'fonts-imatges' | 'simulacres' | 'glossari';
const MENU: Menu[] = ['inici', 'temari', 'cronologia', 'fonts-imatges', 'simulacres', 'glossari'];

export default function App() {
  const [menu, setMenu] = useState<Menu>('inici');
  const [selectedTopicId, setSelectedTopicId] = useState<number | null>(null);
  const [done] = useState<number[]>(() => JSON.parse(localStorage.getItem('pau-progress') ?? '[]'));
  const [query, setQuery] = useState('');
  const [period, setPeriod] = useState('Tots');
  const progress = useMemo(() => Math.round((done.length / testQuestions.length) * 100), [done.length]);
  const periods = ['Tots', ...Array.from(new Set(mediaItems.map((m) => m.period)))];
  const glossaryMap = useMemo(() => new Map(glossary.map((g) => [g.term.toLowerCase(), g.definition])), []);
  const linkText = (text: string) => {
    const terms = [...glossaryMap.keys()].sort((a, b) => b.length - a.length).map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    const re = new RegExp(`(${terms.join('|')})`, 'giu');
    return text.split(re).map((part, i) => {
      const def = glossaryMap.get(part.toLowerCase());
      return def ? <a key={i} href="#glossari" onClick={() => setMenu('glossari')} title={def} className="underline decoration-rose-600 underline-offset-2">{part}</a> : <Fragment key={i}>{part}</Fragment>;
    });
  };


  const filteredSources = historicalSources.filter((s) => (period === 'Tots' || s.period === period) && `${s.title} ${s.historicalContext}`.toLowerCase().includes(query.toLowerCase()));
  const filteredMedia = mediaItems.filter((m) => (period === 'Tots' || m.period === period) && `${m.title} ${m.description}`.toLowerCase().includes(query.toLowerCase()));
  const outlineStyles = [
    { title: 'Esquema cronològic', className: 'list-decimal' },
    { title: 'Esquema causal', className: 'list-disc' },
    { title: 'Esquema comparatiu', className: 'list-[upper-roman]' },
  ] as const;

  const quickLinks: Array<{ title: string; target: Menu }> = [
    { title: 'Temari', target: 'temari' },
    { title: 'Cronologia', target: 'cronologia' },
    { title: 'Fonts històriques', target: 'fonts-imatges' },
    { title: 'Comentari de fonts', target: 'fonts-imatges' },
    { title: 'Glossari', target: 'glossari' },
    { title: 'Simulacres PAU', target: 'simulacres' },
  ];


  const renderTopic = (t: typeof topics[number]) => {
    const imgs = mediaItems.filter((m) => m.period === t.title || m.relatedTopic.toLowerCase().includes(t.title.toLowerCase()) || t.title.toLowerCase().includes(m.relatedTopic.toLowerCase())).slice(0, 4);
    return <div key={t.id} id={`tema-${t.id}`} className={selectedTopicId === t.id ? 'scroll-mt-24' : undefined}><SectionCard title={t.title}>{t.title === 'Crisi de l’Antic Règim i Guerra del Francés' && <SafeImage src="https://content.vicensvivesdigital.com/images/tr/prev_830597_46465134475463412746_res_1024.png" alt="Crisi de l’Antic Règim i Guerra del Francés" className="w-full max-h-[28rem] object-contain rounded-xl bg-white mt-2" />}<PeriodBadge period={t.period} /><p className="mt-2 whitespace-pre-wrap">{linkText(t.summary)}</p><div className="mt-4"><h4 className="font-semibold text-lg">Explicació desenvolupada</h4><p className="whitespace-pre-wrap mt-2">{linkText(t.explanation)}</p></div><div className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-4"><h4 className="font-semibold text-lg text-sky-900">{outlineStyles[(t.id - 1) % outlineStyles.length].title}</h4><ol className={`${outlineStyles[(t.id - 1) % outlineStyles.length].className} ml-6 mt-2`}>{t.answerOutline.map((item, i) => <li key={i}>{item}</li>)}</ol></div><div className="mt-4"><h4 className="font-semibold text-lg">Cronologia</h4><ul className="list-disc ml-6">{t.chronology.map((c, i) => <li key={i}>{linkText(c)}</li>)}</ul></div><div className="grid md:grid-cols-2 gap-3 mt-4"><div><h4 className="font-semibold text-lg">Conceptes clau</h4><div className="mt-2 flex flex-wrap gap-2">{t.keyConcepts.map((k, i) => <span key={i} className="rounded-full bg-amber-100 px-3 py-1 text-sm font-semibold text-amber-900">{k}</span>)}</div></div><div><h4 className="font-semibold text-lg">Personatges</h4><ul className="list-disc ml-6">{t.people.map((p, i) => <li key={i}>{p}</li>)}</ul></div></div><div className="mt-4"><h4 className="font-semibold text-lg">Preguntes PAU</h4><ul className="list-disc ml-6">{t.pauQuestions.map((q, i) => <li key={i}>{linkText(q)}</li>)}</ul></div><div className="mt-4"><h4 className="font-semibold text-lg">Model de resposta (aprox. 400 paraules)</h4><p className="whitespace-pre-wrap mt-2">{linkText(responseModels.find((r) => r.title === t.title)?.answer ?? "")}</p></div>{imgs[0] && <SafeImage src={imgs[0].imageUrl} alt={imgs[0].altText} className="w-full max-h-[30rem] object-contain rounded-xl bg-stone-100 mt-4" />}<ImageGallery items={imgs} /></SectionCard></div>;
  };

  const openTopicFromHome = (topicId: number) => {
    setSelectedTopicId(topicId);
    setMenu('tema');
  };

  return <div className="min-h-screen bg-stone-100 text-slate-800 text-[1.06rem] leading-8">
    <header className="bg-slate-900 text-stone-50 p-6 shadow-lg"><div className="max-w-6xl mx-auto"><p className="text-sm text-stone-300">Professor: MIQUEL GREGORI ESCRIVÀ · IES GREGORI MAIANS</p><h1 className="text-3xl font-bold">PAU Història d’Espanya</h1><p className="text-stone-200">Preparació per a 2n de Batxillerat · Comunitat Valenciana</p></div></header>
    <nav className="bg-white/95 backdrop-blur border-b sticky top-0 z-10"><ul className="max-w-6xl mx-auto flex flex-wrap gap-2 p-3">{MENU.map((item) => <li key={item}><button onClick={() => setMenu(item)} className={`px-3 py-2 rounded-xl text-sm font-medium ${menu === item ? 'bg-rose-800 text-white' : 'bg-slate-100 hover:bg-slate-200'}`}>{item}</button></li>)}</ul></nav>
    <main className="max-w-6xl mx-auto p-4 space-y-5">
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
        <SectionCard title="Navegació per temes (separats)">
          <div className="grid md:grid-cols-2 gap-3">
            {topics.map((topic) => (
              <button
                key={topic.id}
                type="button"
                onClick={() => openTopicFromHome(topic.id)}
                className="rounded-xl border border-slate-200 bg-white p-3 text-left transition hover:border-rose-300 hover:bg-rose-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-700"
              >
                <p className="text-sm text-slate-500">{topic.period}</p>
                <p className="font-semibold">{topic.title}</p>
              </button>
            ))}
          </div>
        </SectionCard>
        <SectionCard title="Mosaic visual per períodes"><p className="mb-3 text-sm text-slate-700">Tria un tema concret per estudiar-lo de manera independent des de l'inici.</p><ImageGallery items={mediaItems.slice(0,9)} /></SectionCard>
      </>}
      {menu === 'temari' && <SectionCard title="Temes del temari"><p className="mb-4">Cada tema s'obri en una pàgina separada perquè l'alumnat puga estudiar-lo de forma independent.</p><div className="grid md:grid-cols-2 gap-3">{topics.map((topic) => <button key={topic.id} type="button" onClick={() => openTopicFromHome(topic.id)} className="rounded-xl border border-slate-200 bg-white p-3 text-left transition hover:border-rose-300 hover:bg-rose-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-700"><p className="text-sm text-slate-500">{topic.period}</p><p className="font-semibold">{topic.title}</p></button>)}</div></SectionCard>}
      {menu === 'tema' && selectedTopicId !== null && renderTopic(topics.find((t) => t.id === selectedTopicId) ?? topics[0])}
      {menu === 'cronologia' && timelineActivities.slice(0, 20).map((a, i) => <TimelineEventCard key={i} date={a.date} title={a.title} description={a.description} wikiUrl={undefined} />)}
      {menu === 'fonts-imatges' && <>
        <div className="grid md:grid-cols-3 gap-3"><SearchBar value={query} onChange={setQuery} /><FilterPanel options={periods} value={period} onChange={setPeriod} /></div>
        <SectionCard title="Fonts històriques">{filteredSources.slice(0, 5).map((s) => <div key={s.id} className="mb-3"><SourceCard source={s} /><SourceViewer source={s} /></div>)}</SectionCard>
        <SectionCard title="Imatges històriques"><ImageGallery items={filteredMedia} /></SectionCard>
      </>}
      {menu === 'simulacres' && <SectionCard title="Simulador PAU millorat"><ul className="list-disc ml-5">{mockExams.map((m, i) => <li key={i}><strong>{m.title}</strong>: font escrita ({historicalSources[i % historicalSources.length].title}), imatge ({mediaItems[i % mediaItems.length].title}), desenvolupament ({essayQuestions[i % essayQuestions.length].question}), dues definicions ({m.shortDefinitions.join(', ')}), rúbrica ({rubrics[0].name}).</li>)}</ul></SectionCard>}
      {menu === 'glossari' && <SectionCard title="Glossari"><div id="glossari" /><div className="grid md:grid-cols-2 gap-3">{glossary.map((g, i) => <article key={i} className="rounded-xl border border-slate-200 bg-white p-4"><p className="font-bold">{g.term}</p><p className="text-sm mt-1">{g.definition}</p><p className="text-xs mt-2 text-slate-600"><strong>Període:</strong> {g.period}</p><p className="text-xs text-slate-600"><strong>Tema relacionat:</strong> {g.relatedTopic}</p><p className="text-xs mt-2 text-slate-700"><strong>Exemple PAU:</strong> {g.exampleUse}</p></article>)}</div></SectionCard>}

    </main>
  </div>;
}
