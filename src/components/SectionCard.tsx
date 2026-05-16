import type { ReactNode } from 'react';

type Props = { title: string; children: ReactNode };

export default function SectionCard({ title, children }: Props) {
  return (
    <section className="card mb-4">
      <h3 className="text-lg font-semibold text-sky-800 mb-2">{title}</h3>
      {children}
    </section>
  );
}
