type Props = {
  /** Photograph to show once one is supplied. Relative to /public. */
  src?: string;
  /** Brief for the photograph — shown in the empty slot, used as alt text once filled. */
  placeholder: string;
  className?: string;
};

/**
 * A photo slot. The design hands over with the photography still to come, so an
 * unfilled slot renders its brief rather than collapsing the layout.
 */
export default function ImageSlot({ src, placeholder, className }: Props) {
  const cls = className ? `slot ${className}` : 'slot';
  if (!src) {
    return (
      <div className={cls}>
        <div className="slot-empty">{placeholder}</div>
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
