import React, { useRef, useState, useEffect } from "react";
import { EFFECT_REGISTRY } from "../data/effectThumbnailRegistry";

interface EffectThumbnailProps {
  effectName: string;
  onClick?: () => void;
}

/**
 * Renders a live mini canvas of an effect at tiny resolution.
 * Uses IntersectionObserver to only mount when visible (performance).
 * Clickable to navigate to the full effect.
 */
export const EffectThumbnail: React.FC<EffectThumbnailProps> = ({
  effectName,
  onClick,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const entry = EFFECT_REGISTRY[effectName];

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([e]) => {
        setIsVisible(e.isIntersecting);
      },
      { threshold: 0.1, rootMargin: "100px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  if (!entry) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      onClick={onClick}
      className="group relative rounded-lg overflow-hidden cursor-pointer flex-shrink-0"
      style={{ width: 100, height: 60 }}
    >
      {/* Live mini canvas — only mounted when visible */}
      {isVisible && (
        <div className="absolute inset-0 pointer-events-none">
          {entry.render()}
        </div>
      )}

      {/* Fallback bg when not visible */}
      {!isVisible && (
        <div className="absolute inset-0 bg-neutral-200" />
      )}

      {/* Hover overlay with effect name */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-end justify-center pb-1">
        <span className="text-[7px] font-medium text-transparent group-hover:text-white transition-colors truncate px-1">
          {entry.name}
        </span>
      </div>

      {/* Play icon on hover */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="w-4 h-4 rounded-full bg-white/80 flex items-center justify-center">
          <svg width="6" height="8" viewBox="0 0 6 8" fill="none">
            <path d="M0.5 0.5L5.5 4L0.5 7.5V0.5Z" fill="#525252" />
          </svg>
        </div>
      </div>
    </div>
  );
};
