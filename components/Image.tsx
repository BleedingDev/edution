import {
  alignClasses,
  aspect,
  aspectRatio as twAspectRatio,
} from "@utils/puckUtils";

export function Image({
  src,
  alt,
  maxWidth,
  aspectRatio,
  align,
}: {
  src: string;
  alt: string;
  maxWidth: number;
  aspectRatio: keyof typeof twAspectRatio;
  align: keyof typeof alignClasses;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      decoding="async"
      loading="lazy"
      src={src}
      alt={alt}
      className={`${aspect[aspectRatio]} flex h-auto w-full ${alignClasses[align]}`}
      style={{ maxWidth: `${maxWidth}%` }}
    />
  );
}
