import { getDocIllustration } from "@/lib/doc-illustrations";

export function DocIllustration({ slug }: { slug: string }) {
  const image = getDocIllustration(slug);
  if (!image) return null;

  return (
    <figure className="my-7 overflow-hidden rounded-2xl border border-black/10 dark:border-white/15">
      {/* Both responsive sources are already encoded as WebP. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image.url}
        srcSet={`${image.small} 480w, ${image.url} 1200w`}
        sizes="(max-width: 639px) calc(100vw - 32px), (max-width: 800px) calc(100vw - 48px), 768px"
        width={image.width}
        height={image.height}
        alt={image.alt}
        loading="lazy"
        decoding="async"
        className="block h-auto w-full"
      />
    </figure>
  );
}
