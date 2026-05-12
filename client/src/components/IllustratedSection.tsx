// Design: Knowledge Atlas - reusable image-text mixed layout component
// Purpose: Flexible layout for combining illustrations/SVGs with text content
import React from "react";

interface IllustratedSectionProps {
  layout?: "image-left" | "image-right" | "image-top" | "image-bottom";
  image?: React.ReactNode;
  imageUrl?: string;
  imageAlt?: string;
  title: string;
  description?: string;
  points?: string[];
  className?: string;
}

export function IllustratedSection({
  layout = "image-left",
  image,
  imageUrl,
  imageAlt = "",
  title,
  description,
  points,
  className = "",
}: IllustratedSectionProps) {
  const isHorizontal = layout === "image-left" || layout === "image-right";

  const imageContent = image ? (
    <div className="w-full h-full flex items-center justify-center">{image}</div>
  ) : imageUrl ? (
    <img
      src={imageUrl}
      alt={imageAlt}
      className="w-full h-full object-cover rounded-lg"
      style={{ maxHeight: isHorizontal ? "400px" : "320px" }}
    />
  ) : (
    <div
      className="w-full rounded-lg flex items-center justify-center"
      style={{
        minHeight: "200px",
        background: "linear-gradient(135deg, var(--hub-forest), var(--hub-amber))",
        opacity: 0.15,
      }}
    />
  );

  const textContent = (
    <div className="flex flex-col justify-center">
      <h3
        className="text-xl md:text-2xl font-bold leading-tight"
        style={{
          color: "var(--hub-text)",
          fontFamily: "'Playfair Display', serif",
        }}
      >
        {title}
      </h3>
      {description && (
        <p
          className="mt-3 text-sm md:text-base leading-relaxed"
          style={{ color: "var(--hub-text-muted)" }}
        >
          {description}
        </p>
      )}
      {points && points.length > 0 && (
        <ul className="mt-4 space-y-2">
          {points.map((point, i) => (
            <li key={i} className="flex items-start gap-2 text-sm md:text-base">
              <span
                className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: "var(--hub-forest)" }}
              />
              <span style={{ color: "var(--hub-text)" }}>{point}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  // Vertical layouts (image-top, image-bottom)
  if (!isHorizontal) {
    const isTop = layout === "image-top";
    return (
      <div
        className={`rounded-xl p-5 md:p-6 ${className}`}
        style={{
          backgroundColor: "var(--hub-card-bg)",
          border: "1px solid var(--hub-card-border)",
        }}
      >
        <div className="flex flex-col gap-5">
          {isTop && <div className="w-full">{imageContent}</div>}
          <div className="w-full">{textContent}</div>
          {!isTop && <div className="w-full">{imageContent}</div>}
        </div>
      </div>
    );
  }

  // Horizontal layouts (image-left, image-right) - stacked on mobile
  const isLeft = layout === "image-left";
  return (
    <div
      className={`rounded-xl p-5 md:p-6 ${className}`}
      style={{
        backgroundColor: "var(--hub-card-bg)",
        border: "1px solid var(--hub-card-border)",
      }}
    >
      <div className="flex flex-col md:flex-row gap-5 md:gap-8 items-center">
        {isLeft && (
          <>
            <div className="w-full md:w-[40%] flex-shrink-0">{imageContent}</div>
            <div className="w-full md:w-[60%]">{textContent}</div>
          </>
        )}
        {!isLeft && (
          <>
            <div className="w-full md:w-[60%]">{textContent}</div>
            <div className="w-full md:w-[40%] flex-shrink-0">{imageContent}</div>
          </>
        )}
      </div>
    </div>
  );
}
