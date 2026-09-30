import Image from 'next/image';
import { basicImages } from '@/lib/basic-images';

export default function BasicChapterImage({ group, compact = false }: { group: string; compact?: boolean }) {
  const asset = basicImages[group];
  if (!asset) return null;
  return <figure className={`basic-chapter-image${compact ? ' basic-chapter-image-compact' : ''}`}>
    <Image src={asset.src} alt={asset.alt} width={1200} height={800} sizes={compact ? '(max-width: 760px) calc(100vw - 40px), 360px' : '(max-width: 820px) calc(100vw - 40px), 772px'} />
    {!compact && <figcaption>Saily’s illustrated sailing world · {group}</figcaption>}
  </figure>;
}
