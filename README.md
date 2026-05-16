# PAU Història d'Espanya

## Execució
- `npm install`
- `npm run dev`
- `npm run build`

## Afegir noves imatges
Edita `src/data/media.ts` i afig un objecte amb: `id, title, period, date, description, imageUrl, sourceName, sourceUrl, license, relatedTopic, altText, suggestedUse`.

## Citar correctament les fonts
Cada font visual o textual ha d’incloure sempre:
- institució o arxiu (`sourceName`)
- URL pública (`sourceUrl`)
- llicència (`license`) o condició de domini públic.

## Afegir noves fonts històriques
Edita `src/data/sources.ts` i crea una nova entrada amb context, fragment, preguntes de comentari, model i ús PAU.

## Ampliar activitats visuals
Edita `src/data/visualActivities.ts` i incorpora activitats amb preguntes i resposta esperada.
