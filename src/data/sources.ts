import { mediaItems } from './media';
export type HistoricalSource = {id:string;title:string;date:string;period:string;type:string;nature:string;author:string;historicalContext:string;excerpt:string;fullReference:string;sourceUrl:string;relatedImageUrl?:string;mainIdeas:string[];commentaryQuestions:string[];modelCommentary:string;pauUse:string;relatedTopics:string[];difficulty:'baixa'|'mitjana'|'alta'};

const longCommentary=(title:string,period:string)=>Array.from({length:10},(_,i)=>`Paràgraf ${i+1}. ${title} s’ha de comentar com a font clau del període ${period}. Cal classificar la font, definir autor i destinatari, contextualitzar amb cronologia precisa i explicar la funció política del document. En una resposta de PAU és essencial vincular idees del text amb processos de llarga durada: construcció de l’Estat liberal, crisi del parlamentarisme, guerra, dictadura o transició. També s’ha d’analitzar el llenguatge polític, les categories jurídiques i els límits de l’aplicació real. Un comentari complet incorpora causes, contingut normatiu, impacte social, resistències i conseqüències. Finalment, cal tancar amb una valoració crítica comparant el document amb altres fonts del temari i explicant per què és útil per entendre continuïtats i ruptures en la història contemporània d’Espanya.`).join('\n\n');

const build=(id:string,title:string,date:string,period:string,author:string,relatedImageId:string):HistoricalSource=>{const img=mediaItems.find(m=>m.id===relatedImageId);return {id,title,date,period,type:'text històric',nature:'font primària política i jurídica',author,historicalContext:`${title} apareix en un context de transformacions profundes del sistema polític espanyol.

El document respon a conflictes de legitimitat, lluites entre opcions ideològiques i tensions socials que condicionen el ritme de les reformes.

Per això la seua lectura és central en PAU: permet entendre com es formulen drets, sobirania, representació i model d’Estat en cada fase del segle XIX i XX.`,excerpt:`Fragment orientatiu de ${title}: el text defensa un model institucional concret, fixa competències de poder i expressa una cultura política determinada. Aquest tipus de formulació és especialment útil per a entrenar la identificació d’idees principals en el comentari de text.`,fullReference:title,sourceUrl:img?.sourceUrl||'https://commons.wikimedia.org',relatedImageUrl:img?.imageUrl,mainIdeas:['Defineix un model de legitimitat política.','Ordena institucions i jerarquia de poder.','Impacta en drets i participació ciutadana.','Mostra tensions entre reforma i control social.','Relaciona context intern i influències internacionals.','Permet explicar continuïtats i ruptures històriques.'],commentaryQuestions:['Classifica la font (tipus, naturalesa i autoria).','Quin context immediat explica la redacció del text?','Quines idees centrals sobre sobirania i Estat hi apareixen?','Com afecta el document la participació política?','Quins límits tingué la seua aplicació real?','Amb quines altres fonts del temari el compararies?'],modelCommentary:longCommentary(title,period),pauUse:'Pot eixir com a comentari de text complet o com a document de suport en una pregunta de desenvolupament; convé preparar classificació, context, idees, valoració i connexió amb altres etapes.',relatedTopics:[period,title],difficulty:'mitjana'};};

export const historicalSources: HistoricalSource[] = [
  build('s1','Constitució de 1812','1812','Crisi de l’Antic Règim','Corts de Cadis','m2'),
  build('s2','Manifest dels Perses','1814','Regnat de Ferran VII','Diputats absolutistes','m3'),
  build('s3','Decret d’abolició de la Inquisició','1813','Corts de Cadis i Constitució de 1812','Corts de Cadis','m2'),
  build('s4','Conveni de Bergara','1839','Regnat d’Isabel II i construcció de l’Estat liberal','Espartero i Maroto','m8'),
  build('s5','Constitució de 1837','1837','Regnat d’Isabel II i construcció de l’Estat liberal','Corts constituents','m5'),
  build('s6','Constitució de 1845','1845','Regnat d’Isabel II i construcció de l’Estat liberal','Corts moderades','m5'),
  build('s7','Llei de Desamortització de Madoz','1855','Regnat d’Isabel II i construcció de l’Estat liberal','Pascual Madoz','m5'),
  build('s8','Constitució de 1869','1869','Sexenni Democràtic','Corts constituents','m11'),
  build('s9','Projecte constitucional federal de 1873','1873','Sexenni Democràtic','Corts republicanes','m10'),
  build('s10','Constitució de 1876','1876','Restauració borbònica','Corts de la Restauració','m13'),
  build('s11','Text sobre caciquisme','1901','Restauració borbònica','Joaquín Costa','m17'),
  build('s12','Manifest de Primo de Rivera','1923','Crisi de la Restauració','Miguel Primo de Rivera','m20'),
  build('s13','Constitució de 1931','1931','Segona República','Corts constituents','m23'),
  build('s14','Discurs de Clara Campoamor','1931','Segona República','Clara Campoamor','m25'),
  build('s15','Discurs d’Azaña sobre qüestió religiosa','1931','Segona República','Manuel Azaña','m24'),
  build('s16','Text reforma agrària republicana','1932','Segona República','Govern republicà','m26'),
  build('s17','Ban del colp d’Estat','1936','Guerra Civil','Generals sublevats','m27'),
  build('s18','Fuero del Trabajo','1938','Franquisme','Jefatura del Estado','m30'),
  build('s19','Ley de Principios del Movimiento Nacional','1958','Franquisme','Francisco Franco','m30'),
  build('s20','Pla d’Estabilització de 1959','1959','Franquisme','Govern tecnòcrata','m31'),
  build('s21','Text sobre oposició antifranquista','1962','Franquisme','Comissions Obreres','m31'),
  build('s22','Llei per a la Reforma Política','1976','Transició democràtica i Constitució de 1978','Corts espanyoles','m32'),
  build('s23','Pactes de la Moncloa','1977','Transició democràtica i Constitució de 1978','Govern, partits i sindicats','m32'),
  build('s24','Constitució de 1978','1978','Transició democràtica i Constitució de 1978','Corts constituents','m33'),
  build('s25','Entrada d’Espanya a la CEE','1985-1986','Transició democràtica i Constitució de 1978','Govern d’Espanya i CEE','m35'),
];
