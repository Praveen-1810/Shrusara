import LazyImage from './LazyImage';
import { contactLinks } from '../data/content';

export default function HeroBanner({
  eyebrow,
  title,
  description,
  image,
  videoUrl,
  primaryLabel = 'WhatsApp',
  secondaryLabel = 'Call Now',
  primaryHref = contactLinks.whatsapp,
  secondaryHref = contactLinks.call
}) {
  return (
    <section className="section-shell pb-12 pt-6 sm:pb-16">
      {/* Media container — fully visible, no overlay box on top */}
      <div className="relative overflow-hidden rounded-[36px] border border-white/60 shadow-soft">
        {videoUrl ? (
          <video
            key={videoUrl}
            className="h-full w-full object-cover min-h-[520px] sm:min-h-[620px]"
            autoPlay
            muted
            loop
            playsInline
            poster={image}
          >
            <source src={videoUrl} type="video/mp4" />
          </video>
        ) : (
          <LazyImage
            src={image}
            alt={title}
            priority
            sizes="(min-width: 1280px) 1280px, 100vw"
            wrapperClassName="min-h-[520px] sm:min-h-[620px]"
            className="h-full w-full object-cover"
          />
        )}
      </div>

      {/* Text + CTA box — sits below the media */}
      <div className="mt-6 px-2 sm:px-4">
        <div className="max-w-3xl space-y-6 rounded-[30px] border border-ink/10 bg-white/80 p-6 shadow-card backdrop-blur-md sm:p-8">
          <span className="inline-flex rounded-full border border-cocoa/20 bg-linen px-3 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-cocoa">
            {eyebrow}
          </span>
          <div className="space-y-4">
            <h1 className="font-heading text-4xl leading-tight text-ink sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="max-w-2xl text-base leading-7 text-stone-600 sm:text-lg">{description}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a className="button-primary" href={primaryHref}>
              {primaryLabel}
            </a>
            <a className="button-secondary" href={secondaryHref}>
              {secondaryLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}