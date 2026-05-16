export type HistoricalMedia = {
  id: string; title: string; period: string; date: string; description: string; imageUrl: string; sourceName: string; sourceUrl: string; license: string; relatedTopic: string; altText: string; suggestedUse: string; type: 'pintura'|'fotografia'|'mapa'|'cartell'|'caricatura'|'document jurídic';
};

const W = 'https://commons.wikimedia.org/wiki/Special:Redirect/file/';
const mk=(id:string,title:string,period:string,date:string,file:string,relatedTopic:string,type:HistoricalMedia['type']):HistoricalMedia=>({id,title,period,date,description:`Font visual del període ${period} útil per a comentari PAU.`,imageUrl:`${W}${file}`,sourceName:'Wikimedia Commons',sourceUrl:`${W}${file}`,license:'Domini públic o llicència oberta en Wikimedia Commons',relatedTopic,altText:title,suggestedUse:'Identificar autor, context, missatge i utilitat com a font històrica a la PAU.',type});

export const mediaItems: HistoricalMedia[] = [
mk('m1','Los fusilamientos del 3 de mayo','Crisi de l’Antic Règim i Guerra del Francés','1814','El_Tres_de_Mayo,_by_Francisco_de_Goya,_from_Prado_in_Google_Earth.jpg','Guerra del Francés','pintura'),
mk('m2','Proclamació de la Constitució de Cadis','Crisi de l’Antic Règim i Guerra del Francés','1812','Proclamacion_Constitucion_Cadiz_1812.jpg','Corts de Cadis i Constitució de 1812','pintura'),
mk('m3','Retrat de Ferran VII','Crisi de l’Antic Règim i Guerra del Francés','1814','Vicente_L%C3%B3pez_Porta%C3%B1a_-_Fernando_VII_de_Espa%C3%B1a.jpg','Regnat de Ferran VII','pintura'),
mk('m4','Batalla de Somosierra','Crisi de l’Antic Règim i Guerra del Francés','1808','Jean-Charles_Langlois_-_Bataille_de_Somosierra.jpg','Guerra del Francés','pintura'),
mk('m5','Isabel II','Regnat d’Isabel II i construcció de l’Estat liberal','1850','Isabel_II_de_Espa%C3%B1a,_por_Federico_de_Madrazo.jpg','Regnat d’Isabel II i construcció de l’Estat liberal','pintura'),
mk('m6','Baldomero Espartero','Regnat d’Isabel II i construcció de l’Estat liberal','1840','Baldomero_Espartero.jpg','Regnat d’Isabel II i construcció de l’Estat liberal','fotografia'),
mk('m7','Ramón María Narváez','Regnat d’Isabel II i construcció de l’Estat liberal','1848','Retrato_de_Ram%C3%B3n_Mar%C3%ADa_Narv%C3%A1ez.jpg','Regnat d’Isabel II i construcció de l’Estat liberal','pintura'),
mk('m8','Batalla de Mendigorría','Regnat d’Isabel II i construcció de l’Estat liberal','1835','Batalla_de_Mendigorria.jpg','Regnat d’Isabel II i construcció de l’Estat liberal','pintura'),
mk('m9','Amadeu I','Sexenni Democràtic','1871','Amadeo_de_Saboya.jpg','Sexenni Democràtic','fotografia'),
mk('m10','Francesc Pi i Margall','Sexenni Democràtic','1873','Pi_y_Margall.jpg','Sexenni Democràtic','fotografia'),
mk('m11','Constitució de 1869','Sexenni Democràtic','1869','Constituci%C3%B3n_espa%C3%B1ola_de_1869.jpg','Sexenni Democràtic','document jurídic'),
mk('m12','Primera República','Sexenni Democràtic','1873','Alegor%C3%ADa_de_la_I_Rep%C3%BAblica_espa%C3%B1ola.jpg','Sexenni Democràtic','caricatura'),
mk('m13','Antonio Cánovas','Restauració borbònica','1890','Antonio_C%C3%A1novas_del_Castillo.jpg','Restauració borbònica','fotografia'),
mk('m14','Práxedes Mateo Sagasta','Restauració borbònica','1900','Pr%C3%A1xedes_Mateo_Sagasta_by_Christian_Franzen.jpg','Restauració borbònica','fotografia'),
mk('m15','Alfons XII','Restauració borbònica','1875','Alfonso_XII_de_Espa%C3%B1a.jpg','Restauració borbònica','fotografia'),
mk('m16','Alfons XIII','Restauració borbònica','1905','Alfonso_XIII_of_Spain.jpg','Restauració borbònica','fotografia'),
mk('m17','Caciquisme (vinyeta)','Restauració borbònica','1898','La_oligarqu%C3%ADa_y_el_caciquismo_(Costa).jpg','Restauració borbònica','caricatura'),
mk('m18','Desastre del 98','Restauració borbònica','1898','Spanish_American_War_1898.jpg','Restauració borbònica','mapa'),
mk('m19','Setmana Tràgica de Barcelona','Crisi de la Restauració','1909','Barcelona_Tragic_Week_1909.jpg','Crisi de la Restauració','fotografia'),
mk('m20','Miguel Primo de Rivera','Crisi de la Restauració','1923','Miguel_Primo_de_Rivera.jpg','Crisi de la Restauració','fotografia'),
mk('m21','Desembarcament d’Alhucemas','Crisi de la Restauració','1925','Alhucemas_landing_1925.jpg','Crisi de la Restauració','fotografia'),
mk('m22','Annual','Crisi de la Restauració','1921','Annual_disaster_map-es.svg','Crisi de la Restauració','mapa'),
mk('m23','Proclamació de la Segona República','Segona República','1931','Proclamaci%C3%B3n_de_la_II_Rep%C3%BAblica_en_Barcelona.jpg','Segona República','fotografia'),
mk('m24','Manuel Azaña','Segona República','1931','Manuel_Aza%C3%B1a.jpg','Segona República','fotografia'),
mk('m25','Clara Campoamor','Segona República','1931','Clara_Campoamor.jpg','Segona República','fotografia'),
mk('m26','Vot femení','Segona República','1933','Mujeres_votando_en_Espa%C3%B1a_1933.jpg','Segona República','fotografia'),
mk('m27','Mapa Guerra Civil','Guerra Civil','1936-1939','Spanish_Civil_War_map.png','Guerra Civil','mapa'),
mk('m28','Cartell republicà','Guerra Civil','1937','Cartel_republicano_Guerra_Civil_Espa%C3%B1ola.jpg','Guerra Civil','cartell'),
mk('m29','Cartell franquista','Guerra Civil','1938','Cartel_franquista_Guerra_Civil.jpg','Guerra Civil','cartell'),
mk('m30','Franco','Franquisme','1940','Francisco_Franco_1930.jpg','Franquisme','fotografia'),
mk('m31','Cartilla de racionament','Franquisme','1941','Cartilla_racionamiento_Espa%C3%B1a.jpg','Franquisme','document jurídic'),
mk('m32','Adolfo Suárez','Transició democràtica i Constitució de 1978','1977','Adolfo_Su%C3%A1rez_1978.jpg','Transició democràtica i Constitució de 1978','fotografia'),
mk('m33','Constitució de 1978','Transició democràtica i Constitució de 1978','1978','Constituci%C3%B3n_espa%C3%B1ola_de_1978_(portada).jpg','Transició democràtica i Constitució de 1978','document jurídic'),
mk('m34','23-F al Congrés','Transició democràtica i Constitució de 1978','1981','Tejero_23F.jpg','Transició democràtica i Constitució de 1978','fotografia'),
mk('m35','Entrada d’Espanya a la CEE','Transició democràtica i Constitució de 1978','1986','Treaty_of_Accession_of_Spain_to_the_EEC_1985.jpg','Transició democràtica i Constitució de 1978','fotografia')
];
