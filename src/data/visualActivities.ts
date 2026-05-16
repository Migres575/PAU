import { mediaItems } from './media';
export type VisualActivity = {
  id: string; title: string; period: string; imageUrl: string; sourceName: string; sourceUrl: string;
  questions: string[]; expectedAnswer: string; relatedTopic: string; difficulty: 'baixa'|'mitjana'|'alta';
};

export const visualActivities: VisualActivity[] = mediaItems.slice(0,20).map((m, i) => ({
  id: `va${i + 1}`,
  title: `Comentari visual: ${m.title}`,
  period: m.period,
  imageUrl: m.imageUrl,
  sourceName: m.sourceName,
  sourceUrl: m.sourceUrl,
  questions: [
    'Identifica cronologia, autoria i tipus de font visual.',
    'Explica el context històric en 8-10 línies.',
    'Relaciona la imatge amb un tema de desenvolupament PAU.'
  ],
  expectedAnswer: 'Resposta amb classificació, context, idees principals, llenguatge visual i connexió amb contingut curricular.',
  relatedTopic: m.relatedTopic,
  difficulty: i % 3 === 0 ? 'baixa' : i % 3 === 1 ? 'mitjana' : 'alta'
}));
