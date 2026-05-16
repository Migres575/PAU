import type { HistoricalMedia } from '../data/media';

type Props = { image: HistoricalMedia };

import SafeImage from './SafeImage';

export default function HistoricalImageCard({ image }: Props) {
  return (
    <article className="card overflow-hidden h-full flex flex-col">
      <div className="relative w-full h-48 md:h-52 rounded-lg overflow-hidden bg-slate-100">
        <SafeImage src={image.imageUrl} alt={image.altText} className={`w-full h-full ${'object-contain bg-slate-50 p-2'}`} />
      </div>

      <h4 className="font-semibold mt-3 text-lg leading-tight">{image.title}</h4>
      <p className="text-xs text-slate-600 mt-1">{image.date} · {image.period}</p>
      <p className="text-sm mt-2 flex-1">{image.description}</p>
      <p className="text-xs text-slate-600 mt-3">Font: {image.sourceName}</p>
      <a className="text-xs text-blue-700 hover:underline" href={image.sourceUrl} target="_blank" rel="noreferrer">Veure font original</a>
      <p className="text-xs text-slate-500 mt-1">Llicència: {image.license}</p>
    </article>
  );
}
