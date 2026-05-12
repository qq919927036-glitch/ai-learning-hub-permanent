// Design: Knowledge Atlas - responsive image gallery with lightbox navigation
// Purpose: Display a grid of images with click-to-expand lightbox, keyboard nav, and lazy loading
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export interface GalleryImage {
  src: string;
  alt: string;
  title?: string;
  description?: string;
}

interface ImageGalleryProps {
  images: GalleryImage[];
  columns?: 2 | 3 | 4;
}

function LazyImage({ src, alt, onClick }: { src: string; alt: string; onClick: () => void }) {
  const imgRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const el = imgRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={imgRef} className="w-full h-full min-h-[120px]">
      {isVisible && (
        <img
          src={src}
          alt={alt}
          onClick={onClick}
          onLoad={() => setIsLoaded(true)}
          className="w-full h-full object-cover cursor-pointer"
          style={{
            opacity: isLoaded ? 1 : 0,
            transition: "opacity 0.4s ease",
          }}
        />
      )}
    </div>
  );
}

export function ImageGallery({ images, columns = 3 }: ImageGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const goNext = useCallback(() => {
    setLightboxIndex((i) => (i !== null ? (i + 1) % images.length : null));
  }, [images.length]);

  const goPrev = useCallback(() => {
    setLightboxIndex((i) => (i !== null ? (i - 1 + images.length) % images.length : null));
  }, [images.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [lightboxIndex, closeLightbox, goNext, goPrev]);

  const colClass =
    columns === 2
      ? "grid grid-cols-1 sm:grid-cols-2 gap-4"
      : columns === 4
        ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4";

  return (
    <div>
      <div className={colClass}>
        {images.map((image, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
            style={{
              backgroundColor: "var(--hub-card-bg)",
              border: "1px solid var(--hub-card-border)",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            }}
          >
            <div className="aspect-[4/3] overflow-hidden">
              <LazyImage
                src={image.src}
                alt={image.alt}
                onClick={() => openLightbox(index)}
              />
            </div>
            {/* Gradient overlay for title/description */}
            {(image.title || image.description) && (
              <div
                className="absolute bottom-0 left-0 right-0 p-3"
                style={{
                  background: "linear-gradient(transparent, rgba(0,0,0,0.7))",
                }}
              >
                {image.title && (
                  <p className="text-white text-sm font-semibold leading-tight">
                    {image.title}
                  </p>
                )}
                {image.description && (
                  <p className="text-white/70 text-xs mt-0.5 leading-tight">
                    {image.description}
                  </p>
                )}
              </div>
            )}
            {/* Title/description below image (visible without overlay) */}
            {(image.title || image.description) && (
              <div className="p-3" style={{ borderTop: "1px solid var(--hub-card-border)" }}>
                {image.title && (
                  <p className="text-sm font-semibold" style={{ color: "var(--hub-text)" }}>
                    {image.title}
                  </p>
                )}
                {image.description && (
                  <p className="text-xs mt-0.5" style={{ color: "var(--hub-text-muted)" }}>
                    {image.description}
                  </p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          style={{ background: "rgba(0,0,0,0.92)" }}
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            title="Close (Esc)"
          >
            <X size={22} />
          </button>

          {/* Image counter */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white/70 text-sm font-mono z-10">
            {lightboxIndex + 1} / {images.length}
          </div>

          {/* Previous button */}
          {images.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full flex items-center justify-center text-white bg-white/10 hover:bg-white/25 transition-colors"
              title="Previous (ArrowLeft)"
            >
              <ChevronLeft size={24} />
            </button>
          )}

          {/* Next button */}
          {images.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full flex items-center justify-center text-white bg-white/10 hover:bg-white/25 transition-colors"
              title="Next (ArrowRight)"
            >
              <ChevronRight size={24} />
            </button>
          )}

          {/* Image */}
          <div
            className="max-w-[90vw] max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[lightboxIndex].src}
              alt={images[lightboxIndex].alt}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
              style={{ boxShadow: "0 25px 60px rgba(0,0,0,0.5)" }}
            />
            {/* Caption below image */}
            {(images[lightboxIndex].title || images[lightboxIndex].description) && (
              <div className="mt-3 text-center max-w-lg">
                {images[lightboxIndex].title && (
                  <p className="text-white text-sm font-semibold">
                    {images[lightboxIndex].title}
                  </p>
                )}
                {images[lightboxIndex].description && (
                  <p className="text-white/60 text-xs mt-1">
                    {images[lightboxIndex].description}
                  </p>
                )}
              </div>
            )}
          </div>

          {/* Hint */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/40 text-xs">
            Arrow keys to navigate · Esc to close
          </div>
        </div>
      )}
    </div>
  );
}
