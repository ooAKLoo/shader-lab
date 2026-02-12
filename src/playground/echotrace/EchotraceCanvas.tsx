import React, { useRef, useEffect } from 'react';
import { EchotraceParams, Point, ShapeType } from './types';
import { useTrailSystem } from './useTrailSystem';

interface EchotraceCanvasProps {
  params: EchotraceParams;
}

interface ShapeRendererProps {
  type: ShapeType;
  text: string;
  size: number;
}

const ShapeRenderer: React.FC<ShapeRendererProps> = ({ type, text, size }) => {
  const style = {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  switch (type) {
    case 'square':
      return <div style={{ ...style, backgroundColor: 'currentColor' }} />;
    case 'circle':
      return <div style={{ ...style, backgroundColor: 'currentColor', borderRadius: '50%' }} />;
    case 'triangle':
      return (
        <div
          style={{
            width: 0,
            height: 0,
            borderLeft: `${size / 2}px solid transparent`,
            borderRight: `${size / 2}px solid transparent`,
            borderBottom: `${size}px solid currentColor`,
          }}
        />
      );
    case 'star':
      return (
        <div
          style={{
            ...style,
            backgroundColor: 'currentColor',
            clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
          }}
        />
      );
    case 'text':
      return (
        <div
          style={{
            ...style,
            fontSize: `${size}px`,
            whiteSpace: 'nowrap',
            color: 'currentColor',
            fontWeight: 'bold',
          }}
        >
          {text}
        </div>
      );
    default:
      return null;
  }
};

export const EchotraceCanvas: React.FC<EchotraceCanvasProps> = ({ params }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { trail, handleMove } = useTrailSystem(params);

  const handlePointerMove = (e: React.PointerEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      handleMove(e.clientX - rect.left, e.clientY - rect.top);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const touch = e.touches[0];
      handleMove(touch.clientX - rect.left, touch.clientY - rect.top);
    }
  };

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const preventDefault = (e: TouchEvent) => e.preventDefault();
    node.addEventListener('touchmove', preventDefault, { passive: false });
    return () => node.removeEventListener('touchmove', preventDefault);
  }, []);

  return (
    <div
      ref={containerRef}
      onPointerMove={handlePointerMove}
      onTouchMove={handleTouchMove}
      className="relative w-full h-full bg-neutral-950 overflow-hidden cursor-crosshair touch-none"
    >
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <h1 className="text-[120px] font-black text-white tracking-tighter select-none">
          ECHO
        </h1>
      </div>

      {trail.length === 0 && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <p className="text-neutral-500 text-sm animate-pulse">Move your cursor</p>
        </div>
      )}

      {trail.map((point, index) => {
        const progress = index / params.trailLength;
        const scale = params.scaleDecay ? Math.max(0.1, 1 - progress) : 1;
        const opacity = params.opacityDecay ? 1 - progress : 1;
        const color = `hsl(${point.hue}, 100%, 50%)`;

        return (
          <div
            key={point.id}
            className="absolute top-0 left-0 pointer-events-none will-change-transform"
            style={{
              transform: `translate3d(${point.x - params.size / 2}px, ${point.y - params.size / 2}px, 0) scale(${scale}) rotate(${point.angle}deg)`,
              width: params.size,
              height: params.size,
              opacity: opacity,
              color: color,
              mixBlendMode: params.blendMode as any,
              zIndex: params.trailLength - index,
            }}
          >
            <ShapeRenderer type={params.shape} text={params.text} size={params.size} />
          </div>
        );
      })}
    </div>
  );
};
