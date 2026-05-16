export type HistoricalSource = {
  id: string; title: string; date: string; period: string; type: string; nature: string; author: string;
  historicalContext: string; excerpt: string; fullReference: string; sourceUrl: string; relatedImageUrl?: string;
  mainIdeas: string[]; commentaryQuestions: string[]; modelCommentary: string; pauUse: string; difficulty: 'baixa'|'mitjana'|'alta';
};

const make = (id:string,title:string,date:string,period:string,author:string,url:string): HistoricalSource => ({
  id,title,date,period,type:'text',nature:'font primària',author,historicalContext:`${title} s’inscriu en un context de canvi polític i conflicte social, clau per entendre la construcció de l’Estat contemporani.`,excerpt:'«La nació i les seues institucions han d’organitzar-se segons els principis establits en este text.»',fullReference:title,sourceUrl:url,
  mainIdeas:['Defineix model d’Estat i sobirania.','Mostra conflicte entre projectes polítics.','Té impacte institucional en el període.'],
  commentaryQuestions:['Classifica la font i justifica-ho.','Quin context polític explica el text?','Quines idees clau conté?','Quina repercussió té per al temari PAU?'],
  modelCommentary:`Per comentar ${title}, cal classificar-la com a font primària i contextualitzar-la en el seu moment. El text reflectix la disputa per la legitimitat i la forma d’Estat. Les idees principals es relacionen amb sobirania, drets i organització política. Com a conclusió, s’ha de valorar la seua incidència real i els seus límits.`,
  pauUse:'Molt útil per a comentari de text i per enllaçar amb preguntes de desenvolupament.',difficulty:'mitjana'
});

export const historicalSources: HistoricalSource[] = [
make('s1','Constitució de 1812','1812','Crisi de l’Antic Règim','Corts de Cadis','https://www.congreso.es/constitucion-ficha?nombre=1812&tipo=historicas'),
make('s2','Manifest dels Perses','1814','Restauració absolutista','Diputats absolutistes','https://es.wikisource.org/wiki/Manifiesto_de_los_Persas'),
make('s3','Decret d’abolició de la Inquisició','1813','Corts de Cadis','Corts de Cadis','https://pares.culturaydeporte.gob.es/'),
make('s4','Conveni de Bergara','1839','Construcció de l’Estat liberal','Espartero i Maroto','https://es.wikisource.org/wiki/Convenio_de_Bergara'),
make('s5','Constitució de 1837','1837','Construcció de l’Estat liberal','Corts constituents','https://www.congreso.es/constitucion-ficha?nombre=1837&tipo=historicas'),
make('s6','Constitució de 1845','1845','Construcció de l’Estat liberal','Corts','https://www.congreso.es/constitucion-ficha?nombre=1845&tipo=historicas'),
make('s7','Llei de Desamortització de Madoz','1855','Construcció de l’Estat liberal','Pascual Madoz','https://es.wikisource.org/wiki/Ley_de_desamortizaci%C3%B3n_general'),
make('s8','Constitució de 1869','1869','Sexenni Democràtic','Corts constituents','https://www.congreso.es/constitucion-ficha?nombre=1869&tipo=historicas'),
make('s9','Projecte constitucional federal','1873','Sexenni Democràtic','Corts republicanes','https://es.wikisource.org/wiki/Proyecto_de_Constituci%C3%B3n_Federal_de_1873'),
make('s10','Constitució de 1876','1876','Restauració borbònica','Corts','https://www.congreso.es/constitucion-ficha?nombre=1876&tipo=historicas'),
make('s11','Text sobre caciquisme i torn','1890','Restauració borbònica','Joaquín Costa','https://es.wikisource.org/wiki/Oligarqu%C3%ADa_y_caciquismo'),
make('s12','Manifest de Primo de Rivera','1923','Crisi de la Restauració','Miguel Primo de Rivera','https://es.wikisource.org/wiki/Manifiesto_de_Miguel_Primo_de_Rivera'),
make('s13','Constitució de 1931','1931','Segona República','Corts constituents','https://www.congreso.es/constitucion-ficha?nombre=1931&tipo=historicas'),
make('s14','Discurs de Clara Campoamor','1931','Segona República','Clara Campoamor','https://es.wikisource.org/wiki/Discurso_de_Clara_Campoamor_(1_de_octubre_de_1931)'),
make('s15','Discurs d’Azaña sobre la qüestió religiosa','1931','Segona República','Manuel Azaña','https://es.wikisource.org/wiki/Discurso_de_Manuel_Aza%C3%B1a_en_las_Cortes_(13_de_octubre_de_1931)'),
make('s16','Text sobre la reforma agrària republicana','1932','Segona República','Govern de la República','https://www.boe.es/datos/pdfs/BOE//1932/257/A01867-01874.pdf'),
make('s17','Declaració del colp d’Estat de juliol de 1936','1936','Guerra Civil','Generals sublevats','https://pares.culturaydeporte.gob.es/'),
make('s18','Fuero del Trabajo','1938','Franquisme','Jefatura del Estado','https://www.boe.es/datos/pdfs/BOE//1938/505/A06178-06181.pdf'),
make('s19','Ley de Principios del Movimiento Nacional','1958','Franquisme','Jefatura del Estado','https://www.boe.es/buscar/doc.php?id=BOE-A-1958-18894'),
make('s20','Pla d’Estabilització de 1959','1959','Franquisme','Govern d’Espanya','https://www.boe.es/datos/pdfs/BOE//1959/173/A10242-10243.pdf'),
make('s21','Text sobre oposició antifranquista','1962','Franquisme','Oposició democràtica','https://pares.culturaydeporte.gob.es/'),
make('s22','Llei per a la Reforma Política','1976','Transició i democràcia','Corts franquistes','https://www.boe.es/buscar/doc.php?id=BOE-A-1977-2484'),
make('s23','Constitució de 1978','1978','Transició i democràcia','Corts constituents','https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229'),
make('s24','Pactes de la Moncloa','1977','Transició i democràcia','Forces polítiques i socials','https://www.congreso.es/docu/constituciones/pactos_moncloa.pdf'),
make('s25','Document d’entrada d’Espanya a la CEE','1985','Transició i democràcia','Regne d’Espanya i CEE','https://www.boe.es/buscar/doc.php?id=BOE-A-1985-11684')
];
