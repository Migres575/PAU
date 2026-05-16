import { useState } from 'react';

type Props = { src: string; alt: string; className?: string };

export default function SafeImage({ src, alt, className }: Props) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className={`grid place-items-center rounded-lg border border-dashed border-slate-300 bg-slate-50 text-slate-500 p-4 text-center ${className ?? ''}`}>
        <div>
          <p className="font-semibold">Imatge no disponible</p>
          <p className="text-xs mt-1">{alt}</p>
        </div>
      </div>
    );
  }

  return <img src={src} alt={alt} className={className} loading="lazy" onError={() => setFailed(true)} />;
}
