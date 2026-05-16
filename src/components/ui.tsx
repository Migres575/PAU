import type { HistoricalMedia } from '../data/media';
import type { HistoricalSource } from '../data/sources';
import type { VisualActivity } from '../data/visualActivities';
import HistoricalImageCard from './HistoricalImageCard';
import SafeImage from './SafeImage';

export const PeriodBadge = ({ period }: { period: string }) => <span className="rounded-full bg-amber-100 text-amber-900 px-3 py-1 text-xs font-semibold">{period}</span>;
export const SearchBar = ({ value, onChange }: { value: string; onChange: (v: string) => void }) => <input aria-label="Cercador" value={value} onChange={(e) => onChange(e.target.value)} placeholder="Cerca per títol o paraula clau..." className="w-full rounded-xl border px-4 py-2 bg-white/90" />;
export const FilterPanel = ({ options, value, onChange }: { options: string[]; value: string; onChange: (v: string) => void }) => <select value={value} onChange={(e) => onChange(e.target.value)} className="rounded-xl border px-3 py-2">{options.map(o => <option key={o}>{o}</option>)}</select>;
export const ProgressCard = ({ progress }: { progress: number }) => <div className="card"><h3 className="font-semibold mb-2">Progrés global</h3><div className="w-full h-3 bg-slate-200 rounded-full"><div className="h-3 bg-emerald-600 rounded-full" style={{ width: `${progress}%` }} /></div><p className="text-sm mt-2">{progress}% completat</p></div>;
export const ImageGallery = ({ items }: { items: HistoricalMedia[] }) => <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">{items.map(i => <HistoricalImageCard key={i.id} image={i} />)}</div>;
export const SourceCard = ({ source }: { source: HistoricalSource }) => <article className="card"><h3 className="text-xl font-bold">{source.title}</h3><p className="text-xs mt-1">{source.date} · {source.period} · {source.type}</p><p className="text-xs text-slate-500">{source.nature} · {source.author}</p><p className="mt-3 text-sm">{source.historicalContext.split('\n\n')[0]}</p></article>;
export const SourceViewer = ({ source }: { source: HistoricalSource }) => <div className="card space-y-3">{source.relatedImageUrl && <SafeImage src={source.relatedImageUrl} alt={source.title} className="w-full h-56 rounded-lg bg-stone-100 object-contain" />}<p className="text-sm whitespace-pre-wrap">{source.historicalContext}</p><blockquote className="border-l-4 border-amber-400 bg-amber-50 p-3 italic text-sm">{source.excerpt}</blockquote><div><h4 className="font-semibold">Idees principals</h4><ul className="list-disc ml-5 text-sm mt-1">{source.mainIdeas.map((m, i) => <li key={i}>{m}</li>)}</ul></div><div><h4 className="font-semibold">Preguntes de comentari</h4><ul className="list-disc ml-5 text-sm mt-1">{source.commentaryQuestions.map((q, i) => <li key={i}>{q}</li>)}</ul></div><details><summary className="cursor-pointer font-semibold text-rose-800">Veure model de comentari</summary><p className="text-sm mt-2 whitespace-pre-wrap">{source.modelCommentary}</p></details><p className="text-sm"><strong>Ús PAU:</strong> {source.pauUse}</p><p className="text-xs text-slate-500">Dificultat: {source.difficulty}</p></div>;
export const VisualActivityCard = ({ activity }: { activity: VisualActivity }) => <article className="card"><h4 className="font-semibold">{activity.title}</h4><p className="text-xs">{activity.period} · {activity.difficulty}</p><SafeImage src={activity.imageUrl} alt={activity.title} className="mt-2 h-40 w-full rounded bg-stone-100 object-contain"/><ul className="list-disc ml-5 text-sm mt-2">{activity.questions.map((q, i) => <li key={i}>{q}</li>)}</ul></article>;
export const TimelineEventCard = ({ date, title, description, imageUrl }: { date: string; title: string; description: string; imageUrl?: string }) => <article className="card border-l-4 border-rose-500"><div className="flex gap-3">{imageUrl && <SafeImage src={imageUrl} alt={title} className="w-20 h-20 rounded bg-stone-100 object-contain"/>}<div className="space-y-1"><p className="text-xs font-semibold text-rose-700">{date}</p><p className="text-base font-semibold text-slate-900">{description}</p><p className="text-xs uppercase tracking-wide text-slate-500">Tema: {title}</p></div></div></article>;
export const TopicHero = ({ title, subtitle, imageUrl }: { title: string; subtitle: string; imageUrl?: string }) => (
  <section className="card overflow-hidden bg-gradient-to-r from-sky-900 to-rose-900 text-white">
    <h2 className="text-2xl font-bold">{title}</h2>
    <p className="opacity-90">{subtitle}</p>
    {imageUrl && (
      <SafeImage
        src={imageUrl}
        alt={title}
        className="relative left-1/2 mt-4 h-64 w-screen max-w-none -translate-x-1/2 bg-stone-100 object-cover md:h-80"
      />
    )}
  </section>
);
