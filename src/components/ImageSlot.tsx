import Image from 'next/image';
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
  const brief = placeholder.toLowerCase();
  const resolvedSrc = src ?? resolveEditorialImage(brief);

  if (!resolvedSrc) {
    return (
      <div className={cls}>
        <SeaChart seed={placeholder} tone={tone} live={live} />
      </div>
    );
  }
  return (
    <div className={cls}>
      <Image
        src={resolvedSrc}
        alt={cleanAlt(placeholder)}
        fill
        priority={live}
        quality={82}
        sizes={tone === 'deep' ? '100vw' : '(max-width: 720px) 100vw, (max-width: 1080px) 50vw, 25vw'}
      />
    </div>
  );
}

/**
 * A small, curated photo library serves the many editorial slots across the site.
 * Maps and intentionally diagrammatic slots continue to use SeaChart.
 */
function resolveEditorialImage(brief: string): string | undefined {
  if (brief.includes('map of')) return undefined;
  if (brief.includes('chart') || brief.includes('dividers') || brief.includes('logbook')) {
    return '/images/sailing/navigation-chart.jpg';
  }
  if (brief.includes('catamaran') || brief.includes('multihull')) {
    return '/images/sailing/whitsundays-catamaran.jpg';
  }
  if (brief.includes('offshore') || brief.includes('yachtmaster') || brief.includes('reefing')) {
    return '/images/sailing/offshore-training.jpg';
  }
  if (brief.includes('dinghy')) return '/images/sailing/dinghy-training.jpg';
  if (brief.includes('skipper') || brief.includes('helm')) {
    return '/images/sailing/skipper-at-helm.jpg';
  }
  if (
    brief.includes('first sail') ||
    brief.includes('first-timer') ||
    brief.includes('crew') ||
    brief.includes('on deck') ||
    brief.includes('classroom')
  ) {
    return '/images/sailing/learn-to-sail.jpg';
  }
  if (
    brief.includes('sail') ||
    brief.includes('yacht') ||
    brief.includes('training water') ||
    brief.includes('marina')
  ) {
    return '/images/sailing/hero-sydney.jpg';
  }
  return undefined;
}

function cleanAlt(placeholder: string): string {
  return placeholder
    .replace(/^Drop (your |a )?/i, '')
    .replace(/^(?:hero )?Photo(?:graph)?\s*[—-]\s*/i, '')
    .replace(/^the /i, '')
    .replace(/^./, (letter) => letter.toUpperCase());
}
