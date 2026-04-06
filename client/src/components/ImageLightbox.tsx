// Design: Knowledge Atlas style - dark overlay with clean modal
// Purpose: Full-screen image viewer with zoom and navigation
import { useEffect, useState } from "react";
import { X, ZoomIn, ZoomOut, RotateCcw } from "lucide-react";

interface ImageLightboxProps {
  src: string;
  alt: string;
  onClose: () => void;
}

export function ImageLightbox({ src, alt, onClose }: ImageLightboxProps) {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "+" || e.key === "=") setScale((s) => Math.min(s + 0.25, 3));
      if (e.key === "-") setScale((s) => Math.max(s - 0.25, 0.5));
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{ background: "rgba(0,0,0,0.92)" }}
      onClick={onClose}
    >
      {/* Controls */}
      <div
        className="absolute top-4 right-4 flex items-center gap-2 z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setScale((s) => Math.min(s + 0.25, 3))}
          className="w-9 h-9 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          title="放大 (+)"
        >
          <ZoomIn size={18} />
        </button>
        <button
          onClick={() => setScale((s) => Math.max(s - 0.25, 0.5))}
          className="w-9 h-9 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          title="缩小 (-)"
        >
          <ZoomOut size={18} />
        </button>
        <button
          onClick={() => setScale(1)}
          className="w-9 h-9 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          title="重置"
        >
          <RotateCcw size={18} />
        </button>
        <button
          onClick={onClose}
          className="w-9 h-9 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors ml-2"
          title="关闭 (Esc)"
        >
          <X size={20} />
        </button>
      </div>

      {/* Scale indicator */}
      <div className="absolute top-4 left-4 text-white/60 text-sm font-mono">
        {Math.round(scale * 100)}%
      </div>

      {/* Hint */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/40 text-xs">
        点击背景关闭 · 使用 +/- 键缩放 · Esc 退出
      </div>

      {/* Image */}
      <div
        className="overflow-auto max-w-[95vw] max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
        style={{ cursor: scale > 1 ? "grab" : "default" }}
      >
        <img
          src={src}
          alt={alt}
          style={{
            transform: `scale(${scale})`,
            transformOrigin: "top center",
            transition: "transform 0.2s ease",
            maxWidth: scale <= 1 ? "90vw" : "none",
            maxHeight: scale <= 1 ? "85vh" : "none",
            objectFit: "contain",
            borderRadius: "8px",
            boxShadow: "0 25px 60px rgba(0,0,0,0.5)",
          }}
        />
      </div>
    </div>
  );
}

// Hook for easy use
export function useImageLightbox() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  const openLightbox = (src: string, alt: string) => setLightbox({ src, alt });
  const closeLightbox = () => setLightbox(null);

  const LightboxComponent = lightbox ? (
    <ImageLightbox src={lightbox.src} alt={lightbox.alt} onClose={closeLightbox} />
  ) : null;

  return { openLightbox, closeLightbox, LightboxComponent };
}
