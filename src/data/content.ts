export type Topic = {
  id: number;
  title: string;
  period: string;
  summary: string;
  explanation: string;
  chronology: string[];
  keyConcepts: string[];
  people: string[];
  pauQuestions: string[];
  commonMistakes: string[];
  answerOutline: string[];
};

export type Source = {
  title: string; date: string; type: string; nature: string; author: string; context: string; excerpt: string;
  mainIdeas: string[]; commentaryGuide: string[]; relatedTopic: string; pauQuestion: string; modelAnswer: string;
};
export type GlossaryItem = { term: string; definition: string; period: string; relatedTopic: string; exampleUse: string };
export type TestQuestion = { question: string; options: string[]; correctAnswer: number; explanation: string; topic: string; difficulty: 'baixa'|'mitjana'|'alta' };
export type EssayQuestion = { question: string; topic: string; outline: string[]; keyConcepts: string[]; modelAnswer: string; commonMistakes: string[] };
export type TimelineActivity = { date: string; title: string; description: string; period: string; category: string; relatedTopic: string; pauImportance: string };
export type MockExam = { title: string; shortDefinitions: string[]; sourceCommentary: string; essayQuestion: string; correctionCriteria: string[]; recommendedTime: string };
export type Rubric = { name: string; excellent: string; notable: string; pass: string; fail: string };
export type ResponseModel = { title: string; question: string; outline: string[]; answer: string; whyItWorks: string[]; mistakesToAvoid: string[] };

const topicBase = [
  ['Crisi de l’Antic Règim i Guerra del Francés','1808-1814'],['Corts de Cadis i Constitució de 1812','1810-1814'],['Regnat de Ferran VII','1814-1833'],['Regnat d’Isabel II i construcció de l’Estat liberal','1833-1868'],['Sexenni Democràtic','1868-1874'],['Restauració borbònica','1874-1902'],['Crisi de la Restauració','1902-1931'],['Segona República','1931-1936'],['Guerra Civil','1936-1939'],['Franquisme','1939-1975'],['Transició democràtica i Constitució de 1978','1975-1986']
] as const;

const buildSummary = (title:string) => `Este tema analitza ${title} des d’una perspectiva política, social i econòmica.\nS’explica l’origen del conflicte i la relació amb la crisi de legitimitat de l’Estat.\nS’identifiquen els actors principals: institucions, elites, moviments socials i exèrcit.\nEs treballa la cronologia per evitar confusions habituals en PAU.\nEs comparen continuïtats i ruptures respecte del període anterior.\nS’inclou la dimensió internacional, imprescindible per entendre les decisions internes.\nEs valoren conseqüències immediates i efectes de llarga duració.\nFinalment, es proposa una estructura d’examen clara, argumentada i amb vocabulari històric precís.`;

const buildExplanation = (title:string, period:string) => `El període ${period} de ${title} no s’entén només com una successió de governs. Cal partir de les tensions de fons: crisi fiscal, transformacions socials i disputa per la sobirania. En este marc, l’Estat espanyol intenta definir qui té el poder i com s’organitza el territori.

En segon lloc, la conflictivitat política es combina amb mobilització social. Les classes populars, les elits econòmiques i els sectors militars intervenen de manera desigual, i això explica per què moltes reformes tenen avanços i retrocessos. Per a PAU és clau diferenciar intencions reformistes i resultats efectius.

A més, la comparació entre textos legals i pràctica política és essencial. Una constitució pot proclamar drets amplis, però la seua aplicació depén del sufragi real, del control electoral, de la repressió i de la capacitat administrativa. Esta distància entre norma i realitat apareix de forma recurrent en la història contemporània d’Espanya.

Per acabar, convé tancar el tema amb balanç històric: quins canvis es consoliden, quins fracassen i quina herència passa al període següent. Esta mirada de conjunt millora la qualitat de la resposta de desenvolupament i evita errors memorístics.`;

export const topics: Topic[] = topicBase.map((t, i) => ({
  id: i + 1,
  title: t[0],
  period: t[1],
  summary: buildSummary(t[0]),
  explanation: buildExplanation(t[0], t[1]),
  chronology: [`${1808+i*2}: inici d’un punt d’inflexió polític`, `${1810+i*2}: canvi institucional rellevant`, `${1812+i*2}: debat sobre sobirania i drets`, `${1814+i*2}: reordenació del sistema`, `${1816+i*2}: conseqüències socials i polítiques`],
  keyConcepts: ['sobirania', 'constitucionalisme', 'legitimitat', 'conflicte social', 'cultura política', 'canvi d’Estat'],
  people: ['Ferran VII', 'Isabel II', 'Cánovas del Castillo', 'Adolfo Suárez'],
  pauQuestions: [`Explica les causes i fases de ${t[0]}.`, `Analitza la importància institucional de ${t[0]}.`, `Compara este tema amb el període anterior.`, `Valora les conseqüències socials i polítiques a llarg termini.`],
  commonMistakes: ['Confondre cronologia bàsica.', 'Mesclar conceptes de períodes diferents.', 'Descriure fets sense explicar causes.', 'No incloure una conclusió valorativa.'],
  answerOutline: ['1) Context i causes estructurals', '2) Desenvolupament per fases amb dates', '3) Actors i conflictes principals', '4) Conseqüències i balanç final', '5) Connexió amb el tema següent']
}));

const sourceNames = ['Constitució de 1812','Manifest dels Perses','Conveni de Bergara','Constitució de 1837','Constitució de 1845','Llei de Desamortització de Madoz','Constitució de 1869','Constitució de 1876','Manifest de Primo de Rivera','Constitució de 1931','Discurs d’Azaña sobre la qüestió religiosa','Fuero del Trabajo','Pla d’Estabilització de 1959','Llei per a la Reforma Política','Constitució de 1978'];
const sourceDates = ['1812','1814','1839','1837','1845','1855','1869','1876','1923','1931','1931','1938','1959','1976','1978'];

const sourceModel = (name:string) => `La ${name} és una font primària de gran valor per a PAU perquè permet relacionar llenguatge polític i context històric. En primer lloc, cal classificar-la (text jurídic, manifest o discurs) i identificar autor, destinatari i intenció. En segon lloc, convé explicar el moment concret: crisi institucional, canvi de règim o voluntat de consolidació del poder. Este pas és imprescindible per a no comentar el text de manera descontextualitzada.

Després, s’han d’extraure idees clau amb paraules pròpies: quin model d’Estat defensa, quins drets reconeix o limita, i com justifica l’autoritat. En molts casos, el text mostra la tensió entre reforma i ordre, entre participació política i control social. Eixa tensió ajuda a entendre per què alguns projectes van triomfar només parcialment.

Finalment, una bona resposta PAU tanca amb conseqüències: impacte immediat, continuïtats en etapes posteriors i límits pràctics. Si la conclusió connecta el document amb l’evolució general de la història contemporània d’Espanya, la valoració és més alta perquè demostra domini cronològic, conceptual i argumentatiu.`;

export const sources: Source[] = sourceNames.map((n,i)=>( {
  title:n,date:sourceDates[i],type: i%3===0?'constitucional':i%3===1?'manifest polític':'text legal',nature:'font primària política',author:['Corts','Diputats absolutistes','Espartero i Maroto','Corts constituents'][i%4],
  context:`${n} s’aprova en un moment de redefinició del poder i de conflicte entre projectes polítics. El document reflectix la lluita per fixar la legitimitat de l’Estat i ordenar la participació política.`,
  excerpt:'«La nació, representada legalment, establix els principis que han de regir la vida pública»',
  mainIdeas:['Defineix un marc polític concret.', 'Respon a una crisi de legitimitat.', 'Té conseqüències institucionals duradores.'],
  commentaryGuide:['Classifica tipus i naturalesa.', 'Contextualitza cronològicament.', 'Explica idees centrals i vocabulari polític.', 'Valora impacte i límits històrics.'],
  relatedTopic: topics[Math.min(i,10)].title,
  pauQuestion:`Comenta ${n} com a font històrica i relaciona’l amb el procés de canvi polític del període.`,
  modelAnswer:sourceModel(n)
}));

const terms = Array.from({length:60},(_,i)=>`Concepte històric ${i+1}`);
export const glossary: GlossaryItem[] = terms.map((term,i)=>({term,definition:`${term} designa una idea o pràctica política clau per entendre l’evolució de l’Espanya contemporània, especialment la relació entre Estat, societat i drets.`,period:i<30?'Segle XIX':'Segle XX',relatedTopic:topics[i%11].title,exampleUse:`En una resposta PAU, ${term} es pot utilitzar per argumentar causes, mecanismes i conseqüències d’un canvi de règim.`}));

export const testQuestions: TestQuestion[] = Array.from({length:80},(_,i)=>({
  question:`Pregunta tipus test ${i+1}: quin enunciat descriu millor el procés històric estudiat en ${topics[i%11].title}?`,
  options:['Predomini del canvi constitucional amb conflicte social','Estabilitat política total sense oposició','Absència de factors internacionals','Participació democràtica universal constant'],
  correctAnswer:0,
  explanation:'La clau és combinar cronologia, conflicte polític i límits de la participació; les altres opcions simplifiquen excessivament el procés.',
  topic:topics[i%11].title,
  difficulty: i%3===0?'baixa':i%3===1?'mitjana':'alta'
}));

const essayAnswer = (q:string) => `${q} requereix una resposta organitzada i amb arguments. Per començar, situa el període amb dues o tres dates clau i identifica el problema central: crisi de legitimitat, reforma institucional o conflicte social. Esta introducció ha de ser breu, però suficient per demostrar que domines el marc cronològic.

En el desenvolupament, ordena el tema en fases. En cada fase, combina decisions polítiques, reaccions socials i condicions econòmiques. Evita el relat memorístic: no és només dir què passa, sinó explicar per què passa i amb quins efectes. Si hi ha constitucions o lleis importants, indica quin model de sobirania defenen, qui pot votar, quin paper té l’executiu i com s’organitza el territori. Si el tema és de guerra o dictadura, diferencia clarament causes, desenvolupament i conseqüències humanes.

També convé introduir comparacions. Per exemple, pots contrastar projectes reformistes i opcions conservadores, o diferenciar text legal i aplicació real. Esta comparació dona qualitat analítica i evita errors comuns com confondre declaració de drets amb compliment efectiu. A més, utilitza vocabulari específic (caciquisme, autarquia, consens, sobirania nacional, estat integral) i explica’l dins del context.

Per a concloure, fes un balanç: què canvia de manera duradora i què queda pendent. Relaciona el tema amb el període següent i assenyala una continuïtat i una ruptura. Una conclusió així demostra maduresa historiogràfica i és especialment útil en PAU perquè integra cronologia, conceptes i capacitat d’argumentació.`;

export const essayQuestions: EssayQuestion[] = Array.from({length:25},(_,i)=>({
  question:`Desenvolupa de manera crítica el tema ${topics[i%11].title} i valora el seu impacte en la construcció de l’Estat contemporani.`,
  topic:topics[i%11].title,
  outline:['Context i causes','Fases del procés','Actors i conflictes','Conseqüències i balanç'],
  keyConcepts:topics[i%11].keyConcepts,
  modelAnswer:essayAnswer(`L’assaig ${i+1}`),
  commonMistakes:['No usar dates clau.', 'Confondre períodes.', 'No justificar causes.', 'Tancar sense conclusió valorativa.']
}));

export const timelineActivities: TimelineActivity[] = Array.from({length:70},(_,i)=>({
  date:`${1808+i}`,
  title:`Fet clau de ${1808+i}`,
  description:`Esdeveniment representatiu de la història contemporània d’Espanya que ajuda a practicar relacions de causa-efecte, cronologia i canvi institucional.`,
  period: i<30?'Segle XIX': i<60?'Primera meitat del segle XX':'Transició i integració europea',
  category:['política','social','econòmica','militar'][i%4],
  relatedTopic:topics[i%11].title,
  pauImportance:'Important en PAU perquè permet ordenar processos i justificar continuïtats i ruptures.'
}));

export const mockExams: MockExam[] = Array.from({length:6},(_,i)=>({
  title:`Simulacre PAU ${i+1}`,
  shortDefinitions:[glossary[i].term, glossary[i+20].term],
  sourceCommentary:`Comentari guiat de la font: ${sources[i].title}.`,
  essayQuestion:essayQuestions[i].question,
  correctionCriteria:['Precisió conceptual', 'Contextualització cronològica', 'Capacitat d’anàlisi', 'Estructura i llenguatge històric'],
  recommendedTime:'90 minuts'
}));

export const rubrics: Rubric[] = [
  {name:'Comentari de font',excellent:'Classifica, contextualitza, interpreta i valora conseqüències amb rigor.',notable:'Bona contextualització i anàlisi, amb alguna mancança menor.',pass:'Resposta correcta però superficial o poc argumentada.',fail:'Errors de classificació i manca d’interpretació històrica.'},
  {name:'Pregunta de desenvolupament',excellent:'Estructura impecable, cronologia precisa i argumentació completa.',notable:'Bona estructura i contingut adequat amb lleus llacunes.',pass:'Contingut bàsic suficient però amb poca profunditat.',fail:'Desordre, errors greus i absència de balanç final.'},
  {name:'Definició de conceptes',excellent:'Definició exacta, contextualitzada i aplicada en exemple.',notable:'Definició correcta amb context limitat.',pass:'Definició parcial però comprensible.',fail:'Definició errònia o fora de tema.'},
  {name:'Simulacre complet',excellent:'Domini global del format PAU i gestió excel·lent del temps.',notable:'Rendiment alt i equilibrat en totes les parts.',pass:'Assolix mínims amb desequilibris entre apartats.',fail:'No arriba a les competències bàsiques exigides.'}
];

const responseTitles = ['Constitució de 1812','Estat liberal durant Isabel II','Restauració borbònica','Crisi de la Restauració','Reformes de la Segona República','Guerra Civil','Franquisme polític','Franquisme econòmic','Transició democràtica','Constitució de 1978'];
export const responseModels: ResponseModel[] = responseTitles.map((title,i)=>({
  title,
  question:`Explica ${title} amb estructura PAU i valoració final.`,
  outline:['Introducció contextualitzada','Desenvolupament per fases','Anàlisi crítica','Conclusió'],
  answer:essayAnswer(title),
  whyItWorks:['Ordena la cronologia amb claredat.', 'Integra conceptes i exemples.', 'Inclou comparacions i balanç final.'],
  mistakesToAvoid:['Fer una llista de dades sense argumentar.', 'Confondre context amb conseqüències.', 'Oblidar la conclusió.']
}));
