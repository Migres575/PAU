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
  },
  {
    id: 4,
    title: 'Regències i inici de l’Estat liberal',
    period: '1833-1843',
    summary: `La mort de Ferran VII en 1833 obrí una etapa de transició decisiva cap a l’Estat liberal a Espanya.
La minoria d’edat d’Isabel II obligà a governar mitjançant regències, primer amb Maria Cristina i després amb Espartero.
Al mateix temps esclatà la Primera Guerra Carlina, que combinava conflicte dinàstic i enfrontament ideològic.
Els governs liberals impulsaren reformes per desmuntar l’Antic Règim i centralitzar l’Estat.
Entre estes mesures destaquen l’Estatut Reial de 1834, la desamortització de Mendizábal i la Constitució de 1837.
El procés estigué marcat per inestabilitat política, pronunciaments militars i tensions socials.
Moderats i progressistes discrepaven sobre sobirania, sufragi i grau de reforma.
Malgrat les dificultats, en esta dècada es consolidaren bases institucionals del liberalisme espanyol.
Per a PAU és clau relacionar guerra carlina, reformes i construcció de l’Estat contemporani.`,
    explanation: `La regència de Maria Cristina (1833-1840) començà en plena guerra carlina. Els carlins defensaven els drets successoris de Carles Maria Isidre i un model tradicionalista (monarquia absoluta, foralisme i pes social de l’Església), mentre que l’isabelisme s’identificà progressivament amb el liberalisme.

En un primer moment, el govern optà per reformes limitades amb l’Estatut Reial de 1834, una carta atorgada que no reconeixia plenament la sobirania nacional. La pressió de la guerra, de les juntes i de la mobilització urbana afavorí un gir progressista entre 1835 i 1837.

Mendizábal impulsà la desamortització eclesiàstica per obtindre recursos fiscals, reduir el poder econòmic de l’Església i crear una base social liberal propietària. Encara que incrementà ingressos i transformà la propietat, també generà conflictes socials i no resolgué la pobresa camperola.

La Constitució de 1837 representà un compromís entre moderats i progressistes: sobirania nacional, Corts bicamerals (Congrés i Senat), reconeixement de drets individuals (impremta, propietat i garanties jurídiques) i un paper rellevant de la Corona amb capacitat de dissoldre les Corts i nomenar govern. Això mostrava que el liberalisme espanyol avançava, però amb pactes i límits.

La guerra carlina finalitzà principalment amb el Conveni de Bergara (1839), que facilità la integració d’una part de l’exèrcit carlí i consolidà la victòria isabelina. Després, la regència d’Espartero (1840-1843) intentà aprofundir reformes, però el seu autoritarisme i els conflictes amb el proteccionisme industrial català debilitarem el règim.

En 1843, la caiguda d’Espartero i la declaració de majoria d’edat d’Isabel II tancaren la fase regencial. El balanç és clar: entre 1833 i 1843 es posaren els fonaments polítics i jurídics del nou Estat liberal espanyol.`,
    chronology: ['1833: mort de Ferran VII i inici de la regència de Maria Cristina.', '1833-1840: Primera Guerra Carlina.', '1834: Estatut Reial.', '1836-1837: reformes progressistes i desamortització de Mendizábal.', '1837: aprovació de la Constitució de 1837.', '1839: Conveni de Bergara.', '1840-1843: regència d’Espartero.', '1843: majoria d’edat d’Isabel II.'],
    keyConcepts: ['regència', 'carlisme', 'Estatut Reial', 'desamortització', 'Constitució de 1837', 'sobirania nacional'],
    people: ['Maria Cristina de Borbó', 'Baldomero Espartero', 'Juan Álvarez Mendizábal', 'Carles Maria Isidre', 'Isabel II'],
    pauQuestions: ['Explica la relació entre Primera Guerra Carlina i construcció de l’Estat liberal.', 'Analitza l’abast de la desamortització de Mendizábal.', 'Compara Estatut Reial (1834) i Constitució de 1837.'],
    commonMistakes: ['Presentar la guerra carlina com un conflicte només dinàstic.', 'Confondre l’Estatut Reial amb una constitució liberal plena.', 'Oblidar la importància del Conveni de Bergara.'],
    answerOutline: ['Context successori i esclat carlí', 'Regència de Maria Cristina i gir liberal', 'Reformes clau: desamortització i Constitució de 1837', 'Regència d’Espartero', 'Balanç del període 1833-1843']
  }
];

export const glossary: GlossaryItem[] = [
  { term: "Abdicacions de Baiona", definition: "Cessió de la corona espanyola per part de Carles IV i Ferran VII a Napoleó Bonaparte que en cedeix els drets al seu germà Josep I, que es converteix en rei d'Espanya el 1808 i dona lloc a la Guerra del Francés.", period: "1808", relatedTopic: "Guerra del Francés", exampleUse: "Les abdicacions de Baiona obriren la crisi de legitimitat de 1808." },
  { term: "afrancesat", definition: "Espanyols partidaris de les polítiques de Josep I Bonaparte en el context de la Guerra del Francés (1808-1814). Majoritàriament eren intel·lectuals que amb la derrota francesa van ser perseguits i van marxar a l'exili.", period: "1808-1814", relatedTopic: "Guerra del Francés", exampleUse: "Molts afrancesats acabaren a l’exili després de 1814." },
  { term: "africanista", definition: "Militar espanyol destinat a les guerres colonials del Marroc del començament del segle XX. La presència al territori marroquí li permetia un ascens més ràpid per mèrits de guerra.", period: "Segle XX", relatedTopic: "Crisi de la Restauració", exampleUse: "El sector africanista de l’exèrcit guanyà pes polític." },
  { term: "Alianza Popular", definition: "Partit polític espanyol de caràcter liberal i conservador fundat per Manuel Fraga l’any 1976. El 1989 va ser refundat i va passar a denominar-se Partit Popular. Aconseguirà el poder en les eleccions del 1996 de la mà de José María Aznar.", period: "1976-1996", relatedTopic: "Transició i democràcia", exampleUse: "Alianza Popular es transformà en l’actual Partit Popular." },
  { term: "almogàvers", definition: "Tropes mercenàries al servei de la Corona d'Aragó durant els segles XIII i XIV que van ser fonamentals en l'expansió territorial d'aquesta Corona per la Mediterrània.", period: "Segles XIII-XIV", relatedTopic: "Edat Mitjana", exampleUse: "Els almogàvers reforçaren l’expansió mediterrània de la Corona d’Aragó." },
  { term: "almohades", definition: "Dinastia musulmana del nord d'Àfrica amb presència a la Península al final del segle XII. Van frenar l'avanç dels regnes cristians encara que van ser derrotats a la batalla de Las Navas de Tolosa.", period: "Segle XII", relatedTopic: "al-Àndalus", exampleUse: "La derrota almohade a Las Navas de Tolosa fou clau." },
  { term: "almoràvits", definition: "Dinastia musulmana del nord d'Àfrica amb protagonisme a la Península durant els segles XI i XII, que van provocar la reunificació dels regnes de taifes i van frenar l'avançament dels regnes cristians peninsulars fins que van ser substituïts pels almohades.", period: "Segles XI-XII", relatedTopic: "al-Àndalus", exampleUse: "Els almoràvits reunificaren taifes i frenaren l’avanç cristià." },
  { term: "Armada Invencible", definition: "Nom assignat a l'expedició militar enviada durant el regnat de Felip II per lluitar contra Anglaterra i posar fi al regnat d'Isabel I. Aquesta expedició, dirigida pel duc de Medina Sidonia, va patir una derrota contundent que va fer minvar les forces navals de la monarquia hispànica.", period: "1588", relatedTopic: "Monarquia Hispànica", exampleUse: "La derrota de l’Armada Invencible afectà el prestigi hispànic." },
  { term: "Atapuerca", definition: "Conjunt arqueològic i paleontològic situat a la serra d'Atapuerca a Burgos on s'han trobat les restes d'homínids més antics de la península Ibèrica fins al moment.", period: "Prehistòria", relatedTopic: "Prehistòria", exampleUse: "Atapuerca és una referència essencial per a la prehistòria peninsular." },
  { term: "Aula Règia", definition: "Assemblea consultiva de la monarquia visigòtica de Toledo formada pels grans dignataris del regne amb funcions consultives en les tasques de govern del rei.", period: "Regne visigot", relatedTopic: "Antiguitat tardana", exampleUse: "L’Aula Règia assessorava el monarca visigot." },
  { term: "béns comunals", definition: "Terres pertanyents a un municipi que no s'arrenden, sinó que són aprofitades directament pels veïns.", period: "Edat Moderna-Contemporània", relatedTopic: "Règim senyorial i municipi", exampleUse: "Els béns comunals sostenien economies locals camperoles." },
  { term: "béns de propis", definition: "Terres pertanyents a un municipi que s'arrenden per obtenir-ne rendes destinades a serveis municipals.", period: "Edat Moderna-Contemporània", relatedTopic: "Hisenda municipal", exampleUse: "Els béns de propis finançaven despeses locals." },
  { term: "berbers", definition: "Pobles del nord d'Àfrica absorbits per l'expansió de l'islam. Van ser un dels principals contingents que van penetrar a la Península i que van formar part d’al-Àndalus.", period: "Segle VIII", relatedTopic: "Conquesta musulmana", exampleUse: "Els berbers foren decisius en la conquesta inicial." },
  { term: "Brigades Internacionals", definition: "Grup de voluntaris de diferents nacionalitats que va participar en la Guerra Civil Espanyola fent costat al bàndol republicà.", period: "1936-1939", relatedTopic: "Guerra Civil", exampleUse: "Les Brigades Internacionals simbolitzen la dimensió internacional del conflicte." },
  { term: "caciquisme", definition: "Pràctica electoral duta a terme durant la Restauració borbònica en què els cacics pressionaven els electors per garantir la victòria del partit de torn.", period: "Restauració", relatedTopic: "Sistema canovista", exampleUse: "El caciquisme adulterava la representació política." },
  { term: "cantonalisme", definition: "Moviment insurreccional durant la Primera República espanyola que aspirava a dividir l'Estat en territoris quasi independents.", period: "1873", relatedTopic: "Primera República", exampleUse: "El cantonalisme reflecteix la feblesa de la Primera República." },
  { term: "carlisme", definition: "Moviment polític sorgit després de la mort de Ferran VII, partidari de Carles Maria Isidre i contrari a Isabel II.", period: "Segle XIX", relatedTopic: "Construcció de l’Estat liberal", exampleUse: "El carlisme desencadenà guerres civils al segle XIX." },
  { term: "carta atorgada", definition: "Text legal elaborat per un monarca que recull drets i llibertats sense participació popular.", period: "Segle XIX", relatedTopic: "Constitucionalisme", exampleUse: "L’Estatut Reial és una carta atorgada." },
  { term: "Constitució", definition: "Llei fonamental de l'Estat que en recull l’estructura i funcionament i els drets ciutadans.", period: "1812 i 1978", relatedTopic: "Liberalisme i democràcia", exampleUse: "La Constitució de Cadis és clau en PAU." },
  { term: "Desastre d’Annual", definition: "Derrota militar de l'exèrcit espanyol en mans dels rebels rifenys l’any 1921.", period: "1921", relatedTopic: "Crisi de la Restauració", exampleUse: "Annual accelerà la crisi del règim restauracionista." },
  { term: "estraperlo", definition: "Comerç il·legal de productes bàsics durant la postguerra per l’escassetat i el racionament.", period: "Postguerra", relatedTopic: "Franquisme", exampleUse: "L’estraperlo va ser habitual als anys quaranta." },
  { term: "ETA", definition: "Organització terrorista sorgida el 1959 que defensava la independència d'Euskadi i es dissolgué el 2018.", period: "1959-2018", relatedTopic: "Franquisme i democràcia", exampleUse: "ETA marcà dècades de violència política." },
  { term: "Falange Española", definition: "Organització política d'ideologia feixista fundada el 1933 per José Antonio Primo de Rivera.", period: "Des de 1933", relatedTopic: "Segona República i Franquisme", exampleUse: "La Falange fou integrada en el partit únic franquista." },
  { term: "guerrilla", definition: "Grup autònom de voluntaris armats que assetgen l'enemic i defugen el combat obert.", period: "Segles XIX-XX", relatedTopic: "Guerra del Francés", exampleUse: "La guerrilla desgastà l’exèrcit napoleònic." },
  { term: "Inquisició", definition: "Tribunal eclesiàstic establit pels Reis Catòlics per perseguir heretges.", period: "Segles XV-XIX", relatedTopic: "Monarquia Catòlica", exampleUse: "La Inquisició fou un instrument de control religiós." },
  { term: "junta", definition: "Òrgan de poder sorgit per iniciativa popular en la Guerra del Francés.", period: "1808", relatedTopic: "Guerra del Francés", exampleUse: "Les juntes organitzaren la resistència contra l’ocupació." },
  { term: "Lleis fonamentals", definition: "Conjunt de huit lleis promulgades entre 1938 i 1977 durant la dictadura franquista.", period: "1938-1977", relatedTopic: "Franquisme", exampleUse: "Les Lleis fonamentals articulaven el règim franquista." },
  { term: "Manifest dels Perses", definition: "Document de diputats de Cadis que demanava a Ferran VII la tornada a l'absolutisme.", period: "1814", relatedTopic: "Regnat de Ferran VII", exampleUse: "El Manifest dels Perses justificà la restauració absolutista." },
  { term: "motí d'Aranjuez", definition: "Revolta popular del 1808 contra Godoy que acabà amb l’abdicació de Carles IV.", period: "1808", relatedTopic: "Crisi de l’Antic Règim", exampleUse: "El motí d’Aranjuez precipità la crisi dinàstica." },
  { term: "NO-DO", definition: "Noticiari propagandístic del règim franquista projectat als cinemes (1942-1981).", period: "1942-1981", relatedTopic: "Franquisme", exampleUse: "El NO-DO difonia la narrativa oficial del règim." },
  { term: "Pactes de la Moncloa", definition: "Acords signats l’octubre de 1977 per estabilitzar economia i democràcia durant la Transició.", period: "1977", relatedTopic: "Transició", exampleUse: "Els Pactes de la Moncloa foren clau per consolidar la democràcia." },
  { term: "Pragmàtica Sanció", definition: "Llei de 1830 que derogava la llei sàlica vigent des de 1713.", period: "1830", relatedTopic: "Regnat de Ferran VII", exampleUse: "La Pragmàtica Sanció obrí la qüestió dinàstica carlina." },
  { term: "pronunciament", definition: "Rebel·lió militar per enderrocar un govern i instaurar-ne un altre.", period: "Segle XIX", relatedTopic: "Liberalisme espanyol", exampleUse: "Els pronunciaments foren freqüents al segle XIX." },
  { term: "Renaixença", definition: "Moviment cultural català de la segona meitat del segle XIX que promovia el català literari.", period: "Segle XIX", relatedTopic: "Nacionalismes", exampleUse: "La Renaixença impulsà la recuperació cultural catalana." },
  { term: "romanització", definition: "Procés d'assimilació de les estructures romanes pels pobles conquistats.", period: "Antiguitat", relatedTopic: "Hispània romana", exampleUse: "La romanització transformà la societat peninsular." },
  { term: "Setmana Tràgica", definition: "Successos de Barcelona de 1909 arran d'una vaga general contra la guerra del Marroc.", period: "1909", relatedTopic: "Crisi de la Restauració", exampleUse: "La Setmana Tràgica provocà la caiguda del govern de Maura." },
  { term: "sobirania nacional", definition: "Principi liberal segons el qual el poder recau en els ciutadans de la nació.", period: "Segle XIX", relatedTopic: "Liberalisme", exampleUse: "La sobirania nacional inspira la Constitució de 1812." },
  { term: "sufragi censatari", definition: "Dret de vot restringit a una minoria amb renda o propietat.", period: "Segle XIX", relatedTopic: "Liberalisme doctrinari", exampleUse: "El sufragi censatari limitava la participació política." },
  { term: "sufragi universal", definition: "Dret a vot de tots els ciutadans majors d'edat, inicialment masculí.", period: "Segle XIX-XX", relatedTopic: "Democratització", exampleUse: "El sufragi universal amplià la base electoral." },
  { term: "taifes", definition: "Regnes musulmans sorgits després de la caiguda del califat de Còrdova al segle XI.", period: "Segle XI", relatedTopic: "al-Àndalus", exampleUse: "Les taifes pagaven paries als regnes cristians." },
  { term: "terços", definition: "Unitat militar d'infanteria de l'Exèrcit espanyol durant l'època dels Àustries.", period: "Segles XVI-XVII", relatedTopic: "Monarquia Hispànica", exampleUse: "Els terços destacaren en els conflictes europeus." },
  { term: "torn dinàstic", definition: "Sistema d'alternança pacífica al govern entre conservadors i liberals durant la Restauració.", period: "1875-1923", relatedTopic: "Restauració", exampleUse: "El torn dinàstic depenia del frau electoral." },
  { term: "Trienni bolxevic", definition: "Període entre 1918 i 1921 d'agitació social amb vagues i violència.", period: "1918-1921", relatedTopic: "Crisi de postguerra", exampleUse: "El Trienni bolxevic incrementà la conflictivitat social." },
  { term: "Unió General de Treballadors (UGT)", definition: "Organització sindical creada a Espanya el 1888, molt unida al PSOE.", period: "Des de 1888", relatedTopic: "Moviment obrer", exampleUse: "La UGT fou un actor sindical clau del segle XX." },
  { term: "Unión de Centro Democrático (UCD)", definition: "Coalició política fundada per Adolfo Suárez el 1977, protagonista dels primers governs de la Transició.", period: "1977-1982", relatedTopic: "Transició", exampleUse: "La UCD liderà el procés constituent." },
  { term: "Unión Liberal", definition: "Partit centrista creat per O’Donnell el 1854 com una escissió del Partido Moderado.", period: "Segle XIX", relatedTopic: "Regnat d’Isabel II", exampleUse: "La Unión Liberal intentà una via centrista entre moderats i progressistes." }
];

const baseTopic = topics.map(t => t.title);
export const testQuestions: TestQuestion[] = Array.from({ length: 15 }, (_, i) => ({ question: `Qüestió PAU ${i + 1}: identifica l’opció correcta sobre ${baseTopic[i % baseTopic.length]}.`, options: ['Relaciona bé cronologia, actors i conseqüències', 'No hi hagué conflicte polític', 'El procés fou lineal i sense resistències', 'No tingué impacte institucional'], correctAnswer: 0, explanation: 'La resposta correcta integra causes, evolució i conseqüències reals del procés històric.', topic: baseTopic[i % baseTopic.length], difficulty: i % 3 === 0 ? 'baixa' : i % 3 === 1 ? 'mitjana' : 'alta' }));

export const essayQuestions: EssayQuestion[] = topics.map((t) => ({ question: `Desenvolupa el tema: ${t.title}.`, topic: t.title, outline: t.answerOutline, keyConcepts: t.keyConcepts, modelAnswer: t.explanation, commonMistakes: t.commonMistakes }));
export const timelineActivities: TimelineActivity[] = topics.flatMap((t) => t.chronology.map((c) => ({ date: c.split(':')[0], title: t.title, description: c, period: t.period, category: 'política', relatedTopic: t.title, pauImportance: 'Data clau per ordenar una resposta de desenvolupament a PAU.' })));
export const sources: Source[] = [];
export const mockExams: MockExam[] = [{ title: 'Simulacre PAU', shortDefinitions: glossary.slice(0, 2).map(g => g.term), sourceCommentary: 'Comentari guiat de la Constitució de 1812', essayQuestion: essayQuestions[0].question, correctionCriteria: ['Precisió històrica', 'Cronologia', 'Anàlisi', 'Expressió escrita'], recommendedTime: '90 minuts' }];
export const rubrics: Rubric[] = [{ name: 'Resposta de desenvolupament', excellent: 'Cronologia exacta, arguments coherents i balanç crític.', notable: 'Bona contextualització amb alguna llacuna menor.', pass: 'Contingut acceptable però poc aprofundit.', fail: 'Errors cronològics o conceptuals greus.' }];
export const responseModels: ResponseModel[] = topics.map((t) => ({ title: t.title, question: `Model de resposta: ${t.title}`, outline: t.answerOutline, answer: t.explanation, whyItWorks: ['Contextualitza', 'Argumenta', 'Conclou amb balanç'], mistakesToAvoid: t.commonMistakes }));
