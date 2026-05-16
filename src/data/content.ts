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

export const topics: Topic[] = [
  {
    id: 1,
    title: 'Crisi de l’Antic Règim i Guerra del Francés',
    period: '1808-1814',
    summary: `La crisi de l’Antic Règim a Espanya esclata en un context de debilitat de la monarquia borbònica i d’expansió napoleònica a Europa.
La invasió francesa de 1808 i les abdicacions de Baiona provocaren un buit de poder i una crisi de legitimitat.
El poble, les juntes i part de l’exèrcit impulsaren una resistència armada molt desigual al territori.
La guerra combinà fronts militars convencionals amb guerrilles locals que desgastaren les tropes franceses.
Alhora, el conflicte tingué dimensió internacional per la intervenció britànica dirigida per Wellington.
La guerra causà una forta destrucció econòmica, crisi agrària i retrocés demogràfic en moltes zones.
Políticament, el conflicte obrí el debat entre absolutisme i liberalisme.
Les Corts reunides a Cadis intentaren construir un nou marc polític en plena guerra.
Això connecta la guerra amb l’origen del constitucionalisme espanyol contemporani.
La derrota final de Napoleó permeté el retorn de Ferran VII en 1814.
Tanmateix, la tornada del rei no significà estabilitat, sinó un nou cicle de conflicte polític.
Per a PAU és clau distingir causes, desenvolupament bèl·lic i conseqüències institucionals.` ,
    explanation: `La crisi de 1808 no fou un accident sobtat, sinó el resultat de la descomposició de l’Antic Règim espanyol. La monarquia de Carles IV patia desprestigi polític, dependència exterior i tensions internes, agreujades pel pes de Manuel Godoy i per la derrota naval de Trafalgar (1805), que afeblí el paper internacional d’Espanya.

Napoleó aprofità esta debilitat per intervenir en la Península. Amb el Tractat de Fontainebleau (1807), les tropes franceses entraren suposadament per atacar Portugal, però acabaren ocupant posicions estratègiques. Les abdicacions de Baiona (maig de 1808) i la imposició de Josep I desencadenaren la ruptura de l’obediència dinàstica tradicional.

L’aixecament del 2 de maig de 1808 a Madrid simbolitza l’inici de la resistència. Ràpidament es formaren juntes locals i provincials que afirmaren governar en nom de Ferran VII. Esta sobirania de fet des de baix representà una novetat política important, perquè traslladava la legitimitat a la nació en absència del rei.

La guerra tingué diverses fases: èxits inicials espanyols (Bailén, 1808), contraofensiva francesa amb la presència directa de Napoleó, i etapa final de desgast (1812-1814) amb el suport britànic. Les guerrilles, encara que descoordinades, foren decisives per dificultar el control francès del territori.

El cost social i econòmic fou enorme: morts, fam, destrucció d’infraestructures i bloqueig comercial. A més, la guerra accentuà fractures ideològiques entre afrancesats, absolutistes i liberals. Este pluralisme polític explica per què el final del conflicte no portà una pau política duradora.

La principal conseqüència estructural és que la guerra obrí el camí del liberalisme polític, articulat a Cadis, però també deixà una cultura de militarització i pronunciaments que marcaria el segle XIX espanyol. Per això este tema és clau per entendre la transició de l’Antic Règim a l’Estat liberal.`,
    chronology: ['1807: Tractat de Fontainebleau entre Espanya i França.', '2 maig 1808: alçament de Madrid contra l’ocupació francesa.', 'juliol 1808: victòria espanyola a Bailén.', '1810: reunió de les Corts a Cadis.', '1812: ofensiva aliada i inici del retrocés francès.', '1813: Tractat de Valençay.', '1814: retirada francesa i retorn de Ferran VII.'],
    keyConcepts: ['Antic Règim', 'abdicacions de Baiona', 'juntes', 'guerrilla', 'sobirania nacional', 'guerra d’independència'],
    people: ['Carles IV', 'Manuel Godoy', 'Napoleó Bonaparte', 'Josep I Bonaparte', 'Arthur Wellesley (Wellington)', 'Ferran VII'],
    pauQuestions: ['Explica les causes internes i externes de la Guerra del Francés.', 'Descriu les fases del conflicte i el paper de la guerrilla.', 'Analitza les conseqüències polítiques de la guerra sobre la crisi de l’Antic Règim.'],
    commonMistakes: ['Confondre la Guerra del Francés amb les guerres carlines.', 'Oblidar la dimensió internacional britànica.', 'No relacionar guerra i naixement del liberalisme.'],
    answerOutline: ['Context europeu i crisi borbònica', 'Invasió, Baiona i alçament de 1808', 'Fases militars i guerrilla', 'Impacte social i econòmic', 'Conseqüències polítiques i llegat']
  },
  {
    id: 2,
    title: 'Corts de Cadis i Constitució de 1812',
    period: '1810-1814',
    summary: `Les Corts de Cadis naixen durant la Guerra del Francés com a resposta al buit de poder provocat per la invasió napoleònica.
Representaren un intent de construir legitimitat política sense el rei present.
A Cadis confluiren diputats peninsulars i americans amb interessos sovint diferents.
El debat central fou qui tenia la sobirania: el monarca o la nació.
La Constitució de 1812 proclamà la sobirania nacional i la divisió de poders.
També establí sufragi masculí indirecte, llibertat d’impremta i igualtat jurídica formal.
Confirmà la confessionalitat catòlica de l’Estat, mostrant límits del programa liberal.
El text intentava desmantellar estructures de l’Antic Règim i crear un Estat centralitzat.
La seua aplicació fou irregular per la guerra i l’oposició absolutista.
Malgrat la curta vigència inicial, es convertí en símbol del liberalisme hispànic.
Influïren en processos constitucionals posteriors a Espanya i a Amèrica.
En PAU és fonamental separar principis constitucionals, pràctica política i límits reals.` ,
    explanation: `La reunió de les Corts a Cadis (1810) respon a una necessitat política urgent: organitzar la resistència i donar cobertura legal al govern en guerra. La Junta Central cedí el protagonisme a una assemblea representativa que, malgrat les dificultats de guerra, assumí funcions constituents.

Cadis era una plaça forta no ocupada pels francesos i amb intensa activitat comercial atlàntica. Això afavorí la circulació d’idees il·lustrades i liberals. No obstant això, la composició de les Corts no era democràtica en sentit modern i quedava condicionada per absències, suplements i interessos corporatius.

La decisió més transcendental fou declarar la sobirania nacional. Este principi trencava amb la legitimitat d’origen diví de la monarquia absoluta i convertia la nació en font última del poder. A partir d’ací, les Corts legislaren per abolir institucions senyorials i reforçar un marc jurídic uniforme.

La Constitució de 1812, promulgada el 19 de març, articulava una monarquia constitucional amb separació de poders: Corts unicamerals per al legislatiu, rei per a l’executiu i tribunals per al judicial. Reconeixia drets com la llibertat d’impremta i establia un sistema electoral masculí indirecte, ampli per al context però encara restringit.

Tanmateix, el text presentava límits clars. Mantingué la religió catòlica com a única permesa, no resolgué de manera satisfactòria la representació americana i topà amb resistències de sectors privilegiats. La guerra dificultava, a més, l’aplicació efectiva de moltes reformes en el territori.

Quan Ferran VII tornà en 1814, abolí la Constitució i restaurà l’absolutisme. Malgrat això, la “Pepa” quedà com a referent simbòlic i doctrinal del liberalisme espanyol, recuperada en el Trienni Liberal i present en la cultura política del segle XIX.`,
    chronology: ['1810: inauguració de les Corts de Cadis.', '1811: abolició dels senyorius jurisdiccionals.', '19 març 1812: promulgació de la Constitució de 1812.', '1813: Tractat de Valençay i final de la guerra imminent.', 'maig 1814: Ferran VII aboleix la Constitució i restaura l’absolutisme.'],
    keyConcepts: ['sobirania nacional', 'divisió de poders', 'monarquia constitucional', 'sufragi indirecte', 'nació', 'liberalisme gadità'],
    people: ['Agustín Argüelles', 'Diego Muñoz Torrero', 'Ferran VII', 'diputats americans de Cadis'],
    pauQuestions: ['Comenta els principis polítics de la Constitució de 1812.', 'Explica els límits socials i polítics del model gadità.', 'Relaciona Corts de Cadis i crisi de l’Antic Règim.'],
    commonMistakes: ['Dir que la Constitució establí sufragi universal directe.', 'Oblidar la confessionalitat catòlica.', 'No explicar per què s’aboleix en 1814.'],
    answerOutline: ['Origen de les Corts en guerra', 'Principis constitucionals de 1812', 'Reformes legislatives', 'Límits i oposicions', 'Abolició i llegat històric']
  },
  {
    id: 3,
    title: 'Regnat de Ferran VII',
    period: '1814-1833',
    summary: `El regnat de Ferran VII és una etapa clau per entendre la lluita entre absolutisme i liberalisme a l’Espanya contemporània.
Comença en 1814 amb la restauració de l’absolutisme i l’anul·lació de l’obra de Cadis.
El rei governa inicialment amb repressió política i retorn de privilegis tradicionals.
La crisi d’Hisenda, la conflictivitat social i la pressió militar afavoriren pronunciaments liberals.
El de Rafael del Riego (1820) obrí el Trienni Liberal i restablí la Constitució de 1812.
Durant eixe trienni es feren reformes administratives, fiscals i militars amb forta resistència absolutista.
En 1823, la intervenció dels Cent Mil Fills de Sant Lluís restaurà de nou l’absolutisme.
La Dècada Ominosa (1823-1833) combinà repressió, crisi econòmica i intents parcials de reforma.
Paral·lelament, s’accelerà la independència de la major part de l’imperi americà.
La qüestió successòria culminà amb la Pragmàtica Sanció i l’oposició carlina.
A la mort del rei, en 1833, esclatà la Primera Guerra Carlina.
Per a PAU cal perioditzar bé: Sexenni absolutista, Trienni Liberal i Dècada Ominosa.` ,
    explanation: `Ferran VII tornà en 1814 en un context d’expectatives contradictòries. Mentre els liberals esperaven consolidar el marc constitucional de 1812, els sectors absolutistes pressionaren per restaurar el poder reial ple. El Manifest dels Perses serví de suport ideològic a la ruptura amb el constitucionalisme.

El primer període (1814-1820) es caracteritza per l’anul·lació de la Constitució, la persecució de liberals i la restauració institucional de l’Antic Règim. No obstant això, l’Estat patia una crisi fiscal profunda i creixia el malestar en exèrcit i societat, sobretot per l’impacte de la guerra i la pèrdua de control colonial.

En 1820, el pronunciament de Riego obligà el rei a jurar la Constitució, iniciant el Trienni Liberal. Les Corts impulsaren reformes per modernitzar administració i economia, limitar poders tradicionals i reforçar la Milícia Nacional. El procés, però, quedà tensionat per divisions entre moderats i exaltats.

L’oposició absolutista interna i la por de les monarquies europees a l’expansió liberal acabaren afavorint la intervenció francesa de 1823. Els Cent Mil Fills de Sant Lluís restabliren Ferran com a monarca absolut i posaren fi al Trienni. S’inicià així la Dècada Ominosa amb intensa repressió política.

En els últims anys del regnat coexistiren immobilisme i reformes limitades. La fallida de la Hisenda i la descomposició de l’imperi americà obligaven a canvis, però el nucli absolutista bloquejava transformacions profundes. Mentrestant, la disputa successòria entre isabelins i carlins polaritzava la política.

La Pragmàtica Sanció (1830) permeté heretar a Isabel, filla de Ferran VII, en detriment de Carles Maria Isidre. Esta decisió convertí la successió en conflicte polític i ideològic. Quan el rei morí en 1833, l’enfrontament derivà en guerra civil carlina i obrí definitivament l’etapa de construcció liberal.`,
    chronology: ['1814: restauració absolutista i anul·lació de la Constitució de 1812.', '1820: pronunciament de Riego.', '1820-1823: Trienni Liberal.', '1823: intervenció dels Cent Mil Fills de Sant Lluís.', '1823-1833: Dècada Ominosa.', '1830: Pragmàtica Sanció.', '1833: mort de Ferran VII i inici de la Primera Guerra Carlina.'],
    keyConcepts: ['absolutisme', 'pronunciament', 'Trienni Liberal', 'Dècada Ominosa', 'Pragmàtica Sanció', 'carlisme'],
    people: ['Ferran VII', 'Rafael del Riego', 'Carles Maria Isidre', 'Maria Cristina de Borbó', 'Lluís Antoni d’Angulema'],
    pauQuestions: ['Perioditza i explica el regnat de Ferran VII.', 'Analitza causes i conseqüències del Trienni Liberal.', 'Relaciona qüestió successòria i origen del carlisme.'],
    commonMistakes: ['Mesclar Trienni Liberal amb el Sexenni Democràtic.', 'No citar la intervenció francesa de 1823.', 'Ignorar la relació entre successió i guerra carlina.'],
    answerOutline: ['Restauració de 1814', 'Crisi de l’absolutisme', 'Trienni Liberal i reformes', 'Reacció absolutista de 1823', 'Dècada Ominosa i balanç final']
  }
];

export const glossary: GlossaryItem[] = [
  { term: "Abdicacions de Baiona", definition: "Cessió de la corona espanyola per part de Carles IV i Ferran VII a Napoleó Bonaparte que en cedeix els drets al seu germà Josep I.", period: "1808", relatedTopic: "Crisi de l’Antic Règim i Guerra del Francés", exampleUse: "Les abdicacions de Baiona precipiten la Guerra del Francés." },
  { term: "Afrancesat", definition: "Espanyols partidaris de les polítiques de Josep I Bonaparte durant la Guerra del Francés.", period: "1808-1814", relatedTopic: "Crisi de l’Antic Règim i Guerra del Francés", exampleUse: "Una part dels afrancesats acabà exiliada després de la derrota francesa." },
  { term: "Africanista", definition: "Militar espanyol destinat a les guerres colonials del Marroc a inicis del segle XX.", period: "Segle XX", relatedTopic: "Crisi de la Restauració", exampleUse: "Els africanistes guanyaren pes polític en l’exèrcit." },
  { term: 'Sobirania nacional', definition: 'Principi segons el qual el poder polític emana de la nació i no del dret diví del monarca.', period: 'Primer liberalisme (1808-1837)', relatedTopic: 'Corts de Cadis i Constitució de 1812', exampleUse: 'En PAU pots explicar que la Constitució de 1812 trasllada la legitimitat política a la nació.' },
  { term: 'Antic Règim', definition: 'Sistema social i polític preliberal basat en monarquia absoluta, societat estamental i privilegis jurídics.', period: 'Fins a inicis del segle XIX', relatedTopic: 'Crisi de l’Antic Règim i Guerra del Francés', exampleUse: 'La invasió napoleònica accelera la crisi de l’Antic Règim a Espanya.' },
  { term: 'Pronunciament', definition: 'Intervenció militar en política per forçar un canvi de govern o de règim.', period: 'Segle XIX', relatedTopic: 'Regnat de Ferran VII', exampleUse: 'El pronunciament de Riego (1820) inicia el Trienni Liberal.' },
  { term: 'Guerrilla', definition: 'Forma de combat irregular, amb unitats petites i mobilitat alta contra un exèrcit ocupant.', period: 'Guerra del Francés', relatedTopic: 'Crisi de l’Antic Règim i Guerra del Francés', exampleUse: 'La guerrilla dificultà el control territorial de les tropes napoleòniques.' },
  { term: 'Manifest dels Perses', definition: 'Text de 1814 signat per diputats absolutistes que reclamava restaurar el poder absolut de Ferran VII.', period: '1814', relatedTopic: 'Regnat de Ferran VII', exampleUse: 'S’utilitza per justificar la ruptura amb la Constitució de 1812.' }
];

const baseTopic = topics.map(t => t.title);
export const testQuestions: TestQuestion[] = Array.from({ length: 15 }, (_, i) => ({ question: `Qüestió PAU ${i + 1}: identifica l’opció correcta sobre ${baseTopic[i % 3]}.`, options: ['Relaciona bé cronologia, actors i conseqüències', 'No hi hagué conflicte polític', 'El procés fou lineal i sense resistències', 'No tingué impacte institucional'], correctAnswer: 0, explanation: 'La resposta correcta integra causes, evolució i conseqüències reals del procés històric.', topic: baseTopic[i % 3], difficulty: i % 3 === 0 ? 'baixa' : i % 3 === 1 ? 'mitjana' : 'alta' }));

export const essayQuestions: EssayQuestion[] = topics.map((t) => ({ question: `Desenvolupa el tema: ${t.title}.`, topic: t.title, outline: t.answerOutline, keyConcepts: t.keyConcepts, modelAnswer: t.explanation, commonMistakes: t.commonMistakes }));
export const timelineActivities: TimelineActivity[] = topics.flatMap((t) => t.chronology.map((c) => ({ date: c.split(':')[0], title: t.title, description: c, period: t.period, category: 'política', relatedTopic: t.title, pauImportance: 'Data clau per ordenar una resposta de desenvolupament a PAU.' })));
export const sources: Source[] = [];
export const mockExams: MockExam[] = [{ title: 'Simulacre PAU', shortDefinitions: glossary.slice(0, 2).map(g => g.term), sourceCommentary: 'Comentari guiat de la Constitució de 1812', essayQuestion: essayQuestions[0].question, correctionCriteria: ['Precisió històrica', 'Cronologia', 'Anàlisi', 'Expressió escrita'], recommendedTime: '90 minuts' }];
export const rubrics: Rubric[] = [{ name: 'Resposta de desenvolupament', excellent: 'Cronologia exacta, arguments coherents i balanç crític.', notable: 'Bona contextualització amb alguna llacuna menor.', pass: 'Contingut acceptable però poc aprofundit.', fail: 'Errors cronològics o conceptuals greus.' }];
export const responseModels: ResponseModel[] = topics.map((t) => ({ title: t.title, question: `Model de resposta: ${t.title}`, outline: t.answerOutline, answer: t.explanation, whyItWorks: ['Contextualitza', 'Argumenta', 'Conclou amb balanç'], mistakesToAvoid: t.commonMistakes }));
