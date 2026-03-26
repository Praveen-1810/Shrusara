import { useEffect, useMemo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { contactLinks } from '../data/content';
import LazyImage from './LazyImage';

function buildWhatsAppMessage(item) {
  const title = item.title || item.alt || 'Boutique design';
  const description =
    item.description ||
    item.alt ||
    'A premium boutique design with custom detailing and tailored finishing.';
  const lines = [
    'I am interested in this design:',
    `Title: ${title}`,
    `Description: ${description}`
  ];

  if (item.url) {
    lines.push(`Image: ${item.url}`);
  }

  return `${contactLinks.whatsapp.split('?')[0]}?text=${encodeURIComponent(lines.join('\n'))}`;
}

export default function ImageModal({ item, onClose }) {
  useEffect(() => {
    if (!item) {
      return undefined;
    }

    // Keep scroll locked at the current position so modal opening doesn't jump
    const scrollY = window.scrollY;
    const previousBodyStyle = {
      overflow: document.body.style.overflow,
      position: document.body.style.position,
      top: document.body.style.top,
      width: document.body.style.width
    };

    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100%';

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        onClose();
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousBodyStyle.overflow;
      document.body.style.position = previousBodyStyle.position;
      document.body.style.top = previousBodyStyle.top;
      document.body.style.width = previousBodyStyle.width;
      window.scrollTo(0, scrollY);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, onClose]);

  const whatsappLink = useMemo(() => (item ? buildWhatsAppMessage(item) : '#'), [item]);

  if (!item) {
    return null;
  }

  const title = item.title || item.alt || 'Boutique design';
  const description =
    item.description ||
    item.alt ||
    'A custom boutique design with premium finishing, thoughtful fit, and celebration-ready detailing.';

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[70] flex items-center justify-center overflow-hidden bg-ink/70 p-4 backdrop-blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="glass-panel relative h-screen w-screen max-h-screen max-w-screen overflow-hidden"
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 24 }}
          transition={{ duration: 0.28, ease: 'easeOut' }}
          onClick={(event) => event.stopPropagation()}
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/70 bg-white/85 text-ink shadow-soft"
            aria-label="Close design preview"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-2">
              <path d="M6 6 18 18M18 6 6 18" />
            </svg>
          </button>

          <div className="flex flex-col max-h-[90vh] gap-4 items-center overflow-hidden">
            <div className="flex w-full min-h-[320px] items-center justify-center overflow-hidden rounded-2xl border border-ink/10 bg-white p-2 lg:p-4">
              <LazyImage
                src={item.url || item.thumbUrl}
                alt={title}
                priority
                sizes="(min-width: 1024px) 60vw, 100vw"
                wrapperClassName="flex h-[70vh] w-full items-center justify-center"
                className="h-full w-full max-h-[70vh] max-w-full object-contain"
              />
            </div>
            <div className="w-full rounded-2xl border border-ink/10 bg-white/90 p-4 sm:p-6">
              <div className="space-y-4">
                <span className="eyebrow">Design Preview</span>
                <h3 className="font-heading text-3xl leading-tight text-ink sm:text-4xl">{title}</h3>
                <p className="text-base leading-8 text-stone-600">{description}</p>
              </div>

              <div className="space-y-3">
                <a
                  className="button-primary w-full"
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  Order on WhatsApp
                </a>
                <button className="button-secondary w-full" type="button" onClick={onClose}>
                  Continue browsing
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
