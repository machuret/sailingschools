import Image from 'next/image';
import ImageSlot from './ImageSlot';
import { courseImages } from '@/lib/course-images';
import styles from './CourseImage.module.css';

export default function CourseImage({ courseKey, title, eager = false }: { courseKey: string; title?: string; eager?: boolean }) {
  const asset = courseImages[courseKey];
  if (!asset) return title ? <div className="photo wide" style={{ marginTop: 32 }}><ImageSlot placeholder={`Photo — ${title}`} /></div> : null;
  return (
    <figure className={styles.figure} data-course-image={courseKey}>
      <Image
        src={asset.src}
        alt={asset.alt}
        width={1200}
        height={800}
        sizes="(max-width: 760px) calc(100vw - 40px), (max-width: 1100px) 50vw, 600px"
        loading={eager ? 'eager' : 'lazy'}
        className={styles.image}
      />
      <figcaption className={styles.caption}>AI-generated course illustration · Australian-inspired setting</figcaption>
    </figure>
  );
}
