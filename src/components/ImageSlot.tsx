import SeaChart from './SeaChart';

type Props = {
  /** Photograph to show once one is supplied. Relative to /public. */
  src?: string;
  /** Brief for the photograph — used as alt text once one is filled in. */
  placeholder: string;
  className?: string;
  /** Draw the chart on the dark ground. Heroes pass this. */
  tone?: 'deep' | 'shallow';
  /** Animate the chart. The home hero opts in; nothing else should. */
  live?: boolean;
};

/**
 * A photo slot. Until a photograph arrives the slot draws a chart seeded from the brief,
 * so the page is finished-looking rather than grey — see SeaChart for why.
 */
export default function ImageSlot({ src, placeholder, className, tone, live }: Props) {
  const cls = className ? `slot ${className}` : 'slot';
  if (!src) {
    return (
      <div className={cls}>
        <SeaChart seed={placeholder} tone={tone} live={live} />
      </div>
    );
  }
  return (
    <div className={cls}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={placeholder} />
    </div>
  );
}
