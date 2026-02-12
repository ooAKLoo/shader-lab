import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { SpotlightParams } from './types';

interface SpotlightCanvasProps {
  params: SpotlightParams;
}

export const SpotlightCanvas: React.FC<SpotlightCanvasProps> = ({ params }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const shape1Ref = useRef<HTMLDivElement>(null);
  const shape2Ref = useRef<HTMLDivElement>(null);
  const shape3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (evt: MouseEvent) => {
      const mouseX = evt.clientX;
      const mouseY = evt.clientY;

      if (cursorRef.current) {
        gsap.set(cursorRef.current, {
          x: mouseX,
          y: mouseY,
        });
      }

      const shapes = [shape1Ref.current, shape2Ref.current, shape3Ref.current].filter(Boolean);
      if (shapes.length > 0) {
        gsap.to(shapes, {
          x: mouseX,
          y: mouseY,
          stagger: -params.stagger,
        });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, [params.stagger]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full overflow-hidden"
      style={{ cursor: 'none' }}
    >
      {/* Background with shapes */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: params.bgColor }}
      >
        {/* Shape 1 */}
        <div
          ref={shape1Ref}
          className="absolute rounded-full will-change-transform"
          style={{
            backgroundColor: params.shape1Color,
            width: params.shape1Size,
            height: params.shape1Size,
            marginLeft: -params.shape1Size / 2,
            marginTop: -params.shape1Size / 2,
          }}
        />

        {/* Shape 2 */}
        <div
          ref={shape2Ref}
          className="absolute rounded-full will-change-transform"
          style={{
            backgroundColor: params.shape2Color,
            width: params.shape2Size,
            height: params.shape2Size,
            marginLeft: -params.shape2Size / 2,
            marginTop: -params.shape2Size / 2,
          }}
        />

        {/* Shape 3 */}
        <div
          ref={shape3Ref}
          className="absolute rounded-full will-change-transform"
          style={{
            backgroundColor: params.shape3Color,
            width: params.shape3Size,
            height: params.shape3Size,
            marginLeft: -params.shape3Size / 2,
            marginTop: -params.shape3Size / 2,
          }}
        />
      </div>

      {/* Content with screen blend mode */}
      <div
        className="absolute inset-0 flex items-center justify-center bg-white"
        style={{ mixBlendMode: 'screen' }}
      >
        <h1
          className="font-black text-center m-0 select-none"
          style={{
            color: '#000',
            fontSize: `${params.fontSize}px`,
            lineHeight: 1.2,
          }}
        >
          {params.text}
        </h1>
      </div>

      {/* Custom cursor */}
      <div
        ref={cursorRef}
        className="fixed rounded-full will-change-transform pointer-events-none select-none z-[10000]"
        style={{
          backgroundColor: params.bgColor,
          width: params.cursorSize,
          height: params.cursorSize,
          marginLeft: -params.cursorSize / 2,
          marginTop: -params.cursorSize / 2,
        }}
      />
    </div>
  );
};
