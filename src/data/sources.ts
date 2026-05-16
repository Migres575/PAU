export type HistoricalSource = {
  id: string; title: string; date: string; period: string; type: string; nature: string; author: string;
  historicalContext: string; excerpt: string; fullReference: string; sourceUrl: string; relatedImageUrl?: string;
  mainIdeas: string[]; commentaryQuestions: string[]; modelCommentary: string; pauUse: string; relatedTopics: string[]; difficulty: 'baixa'|'mitjana'|'alta';
};

const longModel = (title: string, period: string) => `Aquest model de comentari per a ${title} està pensat per a un exercici de PAU complet. En primer lloc, la classificació és essencial: és una font primària de naturalesa política i jurídica, produïda en el marc de ${period}. Cal identificar autor, destinatari i intencionalitat. L’autor vol legitimar un projecte d’Estat concret, fixar prioritats ideològiques i donar una base institucional al poder. Esta identificació inicial ja suma punts perquè demostra domini de la metodologia del comentari de text històric.

En segon lloc, la contextualització ha de ser precisa i cronològica. Situa el document en el seu moment immediat i explica quins conflictes polítics, socials i econòmics hi havia: guerra, crisi fiscal, lluita entre moderats i progressistes, o transformacions del sistema de representació. També convé vincular-lo amb processos de mitjà termini, com la construcció de l’Estat liberal, la crisi de la Restauració, la democratització o la consolidació de la dictadura i la posterior transició. Un bon comentari no es limita a repetir la data: explica per què eixe text apareix exactament en eixe context.

En tercer lloc, desenvolupa les idees clau del fragment. Has de diferenciar entre principis doctrinals (sobirania, drets, religió, ordre social), mecanismes institucionals (Corts, Corona, Govern, sufragi, administració) i efectes pràctics (repressió, reforma, ampliació de drets o limitacions). És recomanable comentar termes significatius del text i mostrar com connecten amb el programa polític del període. Açò et permet passar de la descripció a l’anàlisi, que és el que penalitza o premia la PAU.

Finalment, valora abast i límits. Pregunta’t si la norma o el manifest es va aplicar de manera efectiva, quines resistències va trobar i quines conseqüències tingué a curt i llarg termini. Tanca amb una síntesi argumentada: este document és útil perquè explica el model d’Estat del moment i permet comparar continuïtats i ruptures amb altres etapes. Si acabes amb una comparació breu amb un altre text del temari, el comentari guanya qualitat, coherència i profunditat.`;

const build = (id:string,title:string,date:string,period:string,author:string,sourceUrl:string,relatedImageUrl:string,excerpt:string,relatedTopics:string[],difficulty:'baixa'|'mitjana'|'alta'): HistoricalSource => ({
  id,title,date,period,author,sourceUrl,relatedImageUrl,excerpt: `${excerpt}\n\nAquest fragment, llegit en conjunt amb la resta del document, mostra com el llenguatge polític del moment definia qui tenia la legitimitat, quins límits tenia el poder i quina idea de ciutadania es volia imposar. També evidencia tensions entre principis teòrics i aplicació pràctica.`,fullReference:title,type:'text',nature:'font primària',
  historicalContext: `${title} s’emmarca en una etapa de redefinició del poder polític a Espanya. El text reflectix un conflicte entre projectes de legitimitat: tradició, sobirania nacional, ordre social i representació política. Per això és fonamental llegir-lo no només com una declaració formal, sinó com una resposta a crisis concretes (militars, institucionals i socials) que condicionen el seu contingut.

Des d’una perspectiva de llarga durada, esta font permet entendre com evoluciona l’Estat contemporani espanyol entre continuïtats i ruptures. Les decisions sobre drets, confessionalitat, participació política o relació entre govern central i territoris revelen quin model de societat volien consolidar les elits del moment. Per a la PAU, esta lectura comparada ajuda a enllaçar temes i a construir explicacions causals sòlides.`,
  mainIdeas:[
    'Defineix un marc polític concret i una forma de legitimar el poder.',
    'Mostra la tensió entre reforma i conservació dins del sistema polític.',
    'Relaciona institucions i ideologia amb objectius d’estabilització.',
    'Té efectes sobre drets, representació i organització de l’Estat.',
    'Permet comparar continuïtats i ruptures amb altres textos del temari.',
    'Ajuda a entendre la relació entre conflicte social i transformació institucional.'
  ],
  commentaryQuestions:[
    'Classifica la font per tipus, naturalesa i autoria.',
    'Quin context immediat explica l’aparició d’aquest text?',
    'Quines idees polítiques centrals s’hi poden identificar?',
    'Quin impacte pràctic tingué en la vida política i social?',
    'Amb quins altres documents del temari el compararies i per què?',
    'Quins conceptes clau del text (sobirania, nació, drets, ordre) exigeixen definició?',
    'Quines continuïtats i ruptures detectes respecte de l’etapa anterior?'
  ],
  modelCommentary: longModel(title, period),
  pauUse:'Pot aparéixer com a comentari de text complet (classificació, contextualització, anàlisi d’idees, valoració crítica i conclusió), però també com a document comparatiu en una pregunta de desenvolupament. És especialment útil per entrenar la redacció d’introduccions i conclusions de qualitat en PAU, perquè obliga a connectar el text amb processos de llarga durada (construcció de l’Estat, conflictivitat social, ampliació o restricció de drets) i amb altres fonts del mateix bloc temàtic.',
  relatedTopics,
  difficulty
});

export const historicalSources: HistoricalSource[] = [
  build('s1','Constitució de 1812','1812','Corts de Cadis i primer liberalisme','Corts de Cadis','https://www.congreso.es/constitucion-ficha?nombre=1812&tipo=historicas','/images/cadis-1812.svg','«La sobirania resideix essencialment en la nació.»',['Corts de Cadis i Constitució de 1812'],'mitjana'),
  build('s2','Manifest dels Perses','1814','Restauració absolutista','Diputats absolutistes','https://es.wikisource.org/wiki/Manifiesto_de_los_Persas','/images/antic-regim.svg','«Desitgem restablir la monarquia en la seua constitució antiga.»',['Regnat de Ferran VII'],'mitjana'),
  build('s3','Constitució de 1837','1837','Consolidació inicial de l’Estat liberal','Corts constituents','https://www.congreso.es/constitucion-ficha?nombre=1837&tipo=historicas','/images/estat-liberal.svg','«La potestat de fer les lleis resideix en les Corts amb el Rei.»',['Regència de Maria Cristina'],'mitjana'),
  build('s4','Constitució de 1876','1876','Restauració borbònica','Corts de la Restauració','https://www.congreso.es/constitucion-ficha?nombre=1876&tipo=historicas','/images/restauracio.svg','«La religió catòlica és la de l’Estat.»',['Restauració borbònica'],'mitjana'),
  build('s5','Constitució de 1931','1931','Segona República','Corts constituents','https://www.congreso.es/constitucion-ficha?nombre=1931&tipo=historicas','/images/segona-republica.svg','«Espanya és una República democràtica de treballadors de tota classe.»',['Segona República'],'alta')
];
