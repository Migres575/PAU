export type Topic = { id: number; titol: string; resum: string; puntsClau: string[] };
export type SourceDoc = { id: number; titol: string; any: string; autor: string; tipus: string; fragment: string; preguntaGuia: string };
export type GlossaryTerm = { terme: string; definicio: string };
export type TestQuestion = { id: number; pregunta: string; opcions: string[]; resposta: number };
export type EssayQuestion = { id: number; pregunta: string; pauta: string };
export type TimelineActivity = { id: number; enunciat: string; esdeveniments: string[]; ordreCorrecte: string[] };
export type MockExam = { id: number; titol: string; apartats: string[] };

export const topics: Topic[] = [
  { id: 1, titol: 'La crisi de l’Antic Règim (1808-1833)', resum: 'De la Guerra del Francés a la fi del regnat de Ferran VII.', puntsClau: ['Constitució de Cadis (1812)', 'Absolutisme i liberalisme', 'Emancipació americana'] },
  { id: 2, titol: 'Construcció de l’Estat liberal (1833-1874)', resum: 'Regnat d’Isabel II, Sexenni Democràtic i Primera República.', puntsClau: ['Desamortitzacions', 'Constitució de 1869', 'Conflictes socials i carlins'] },
  { id: 3, titol: 'Restauració borbònica (1874-1931)', resum: 'Sistema canovista, caciquisme i crisi del 98.', puntsClau: ['Turnisme polític', 'Nacionalismes perifèrics', 'Dictadura de Primo de Rivera'] },
  { id: 4, titol: 'Segona República i Guerra Civil (1931-1939)', resum: 'Reformes republicanes, polarització política i conflicte bèl·lic.', puntsClau: ['Constitució de 1931', 'Bienni reformista i conservador', 'Internacionalització de la guerra'] },
  { id: 5, titol: 'Franquisme i Transició (1939-1982)', resum: 'Dictadura, desenvolupisme, oposició i consolidació democràtica.', puntsClau: ['Autarquia i obertura', 'Constitució de 1978', 'Estat de les autonomies'] }
];

export const sources: SourceDoc[] = Array.from({ length: 10 }, (_, i) => {
  const base = [
    ['Constitució de Cadis', '1812', 'Corts de Cadis', 'Text legal'],
    ['Manifest dels Perses', '1814', 'Diputats absolutistes', 'Manifest polític'],
    ['Decret de desamortització de Mendizábal', '1836', 'J. Á. Mendizábal', 'Decret'],
    ['Constitució democràtica', '1869', 'Corts constituents', 'Text constitucional'],
    ['Pacte del Pardo', '1885', 'Cánovas i Sagasta', 'Acord polític'],
    ['Manifest de Primo de Rivera', '1923', 'Miguel Primo de Rivera', 'Manifest'],
    ['Constitució de la II República', '1931', 'Corts republicanes', 'Text constitucional'],
    ['Discurs de Clara Campoamor', '1931', 'Clara Campoamor', 'Discurs parlamentari'],
    ['Fuero de los Españoles', '1945', 'Règim franquista', 'Llei fonamental'],
    ['Constitució espanyola', '1978', 'Corts constituents', 'Text constitucional']
  ] as const;
  const item = base[i];
  return {
    id: i + 1,
    titol: item[0],
    any: item[1],
    autor: item[2],
    tipus: item[3],
    fragment: `Fragment representatiu de ${item[0]} per a practicar la classificació, contextualització i anàlisi crítica segons el model PAU.`,
    preguntaGuia: 'Quin context històric explica aquest document i quina rellevància té?'
  };
});

export const glossary: GlossaryTerm[] = [
  'Absolutisme','Liberalisme','Sobirania nacional','Sufragi censatari','Sufragi universal','Desamortització','Constitució','Pronunciament','Caciquisme','Turnisme','Regeneracionisme','Nacionalisme','Obrerisme','Anarquisme','Socialisme','Autarquia','Desenvolupisme','Tecnocràcia','Maquis','Reconciliació nacional','Transició','Monarquia parlamentària','Estat de dret','Divisió de poders','Bipartidisme','Reforma agrària','Milícies','Brigades Internacionals','Pactes de la Moncloa','Estat de les autonomies'
].map((terme, idx) => ({ terme, definicio: `Definició breu del concepte ${terme} aplicada al context de la Història d'Espanya contemporània (${idx + 1}/30).` }));

export const testQuestions: TestQuestion[] = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  pregunta: `Pregunta tipus test ${i + 1}: identifica l'opció correcta sobre un procés clau de la història contemporània d'Espanya.`,
  opcions: ['Opció A', 'Opció B', 'Opció C', 'Opció D'],
  resposta: i % 4
}));

export const essayQuestions: EssayQuestion[] = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  pregunta: `Pregunta de desenvolupament ${i + 1}: explica causes, desenvolupament i conseqüències d'un període històric.`,
  pauta: 'Inclou cronologia, actors principals, mesures polítiques i valoració final amb vocabulari històric precís.'
}));

export const timelineActivities: TimelineActivity[] = [
  { id: 1, enunciat: 'Ordena el procés constitucional del segle XIX.', esdeveniments: ['1812', '1837', '1845', '1869'], ordreCorrecte: ['1812', '1837', '1845', '1869'] },
  { id: 2, enunciat: 'Ordena els fets clau del Sexenni Democràtic.', esdeveniments: ['Primera República', 'Revolució Gloriosa', 'Regnat d’Amadeu I'], ordreCorrecte: ['Revolució Gloriosa', 'Regnat d’Amadeu I', 'Primera República'] },
  { id: 3, enunciat: 'Ordena etapes de la Restauració.', esdeveniments: ['Crisi del 98', 'Inici Restauració', 'Dictadura de Primo de Rivera'], ordreCorrecte: ['Inici Restauració', 'Crisi del 98', 'Dictadura de Primo de Rivera'] },
  { id: 4, enunciat: 'Ordena fases de la Segona República i Guerra Civil.', esdeveniments: ['Bienni reformista', 'Guerra Civil', 'Bienni conservador'], ordreCorrecte: ['Bienni reformista', 'Bienni conservador', 'Guerra Civil'] },
  { id: 5, enunciat: 'Ordena la Transició democràtica.', esdeveniments: ['Constitució de 1978', 'Mort de Franco', 'Pactes de la Moncloa'], ordreCorrecte: ['Mort de Franco', 'Pactes de la Moncloa', 'Constitució de 1978'] }
];

export const mockExams: MockExam[] = [
  { id: 1, titol: 'Simulacre 1 - Del liberalisme a la Restauració', apartats: ['Comentari de font: Constitució 1812', 'Tema: Estat liberal', '5 preguntes test'] },
  { id: 2, titol: 'Simulacre 2 - República i Guerra Civil', apartats: ['Comentari de font: Discurs de Campoamor', 'Tema: reformes republicanes', '5 preguntes test'] },
  { id: 3, titol: 'Simulacre 3 - Franquisme i Transició', apartats: ['Comentari de font: Constitució 1978', 'Tema: canvi polític', '5 preguntes test'] }
];
