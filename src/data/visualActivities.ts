export type VisualActivity = {
  id: string; title: string; period: string; imageUrl: string; sourceName: string; sourceUrl: string;
  questions: string[]; expectedAnswer: string; relatedTopic: string; difficulty: 'baixa'|'mitjana'|'alta';
};

export const visualActivities: VisualActivity[] = Array.from({ length: 20 }, (_, i) => ({
  id: `va${i + 1}`,
  title: `Activitat visual ${i + 1}`,
  period: ['Guerra del Francés','Estat liberal','Sexenni','Restauració','Segona República','Guerra Civil','Franquisme','Transició'][i % 8],
  imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/El_Tres_de_Mayo%2C_by_Francisco_de_Goya%2C_from_Prado_in_Google_Earth.jpg',
  sourceName: 'Wikimedia Commons',
  sourceUrl: 'https://commons.wikimedia.org/wiki/Main_Page',
  questions: [
    'Identifica el període històric i justifica-ho amb dos elements visuals.',
    'Relaciona la imatge amb un procés polític o social del temari.',
    'Explica com la faries servir en un comentari PAU.'
  ],
  expectedAnswer: 'Resposta amb identificació cronològica, context, anàlisi formal de la font i relació amb el procés històric corresponent.',
  relatedTopic: 'Comentari de fonts visuals',
  difficulty: i % 3 === 0 ? 'baixa' : i % 3 === 1 ? 'mitjana' : 'alta'
}));
