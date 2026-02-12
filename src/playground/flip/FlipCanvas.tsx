import React, { useRef, useEffect, useCallback } from 'react';
import { flushSync } from 'react-dom';
import { gsap } from 'gsap';
import { Flip } from 'gsap/Flip';
import { FlipParams, LayoutType } from './types';

gsap.registerPlugin(Flip);

const LAYOUTS: LayoutType[] = ['final', 'plain', 'columns', 'grid'];

interface FlipCanvasProps {
  params: FlipParams;
}

export const FlipCanvas: React.FC<FlipCanvasProps> = ({ params }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const layoutIndexRef = useRef(0); // mutable index, like the reference
  const timerRef = useRef<gsap.core.Tween | null>(null);
  const isFirstRef = useRef(true);
  // Force re-render to update inline styles after layout change
  const [, setTick] = React.useState(0);

  const currentLayout = LAYOUTS[layoutIndexRef.current];

  const nextLayout = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const elements = container.querySelectorAll('.letter, .for-text, .gsap-text');
    if (!elements.length) return;

    // 1. Capture current state
    const state = Flip.getState(elements, {
      props: 'color,backgroundColor',
      simple: true,
    });

    // 2. Advance layout index (mutable, like the reference)
    layoutIndexRef.current = (layoutIndexRef.current + 1) % LAYOUTS.length;
    const nextLayoutType = LAYOUTS[layoutIndexRef.current];

    // 3. Synchronously flush React re-render so DOM updates immediately
    flushSync(() => {
      setTick((t) => t + 1);
    });

    // 4. Animate from captured state to new DOM state (synchronous, no flash)
    Flip.from(state, {
      absolute: true,
      stagger: params.stagger,
      duration: params.duration,
      ease: 'power2.inOut',
      spin: params.spinOnFinal && nextLayoutType === 'final',
      simple: true,
      onEnter: (elements: Element[], animation: gsap.core.Animation) =>
        gsap.fromTo(
          elements,
          { opacity: 0 },
          { opacity: 1, delay: animation.duration() - 0.1 }
        ),
      onLeave: (elements: Element[]) => gsap.to(elements, { opacity: 0 }),
    });

    // 5. Schedule next (matching reference pattern)
    timerRef.current?.kill();
    if (params.autoPlay) {
      timerRef.current = gsap.delayedCall(
        nextLayoutType === 'final' ? 3.5 : params.interval,
        nextLayout
      );
    }
  }, [params.stagger, params.duration, params.spinOnFinal, params.autoPlay, params.interval]);

  // Auto-play: start the cycle
  useEffect(() => {
    timerRef.current?.kill();
    if (params.autoPlay) {
      // Reference uses 1s for the very first transition, 3.5/1.5 thereafter
      const delay = isFirstRef.current ? 1 : (currentLayout === 'final' ? 3.5 : params.interval);
      isFirstRef.current = false;
      timerRef.current = gsap.delayedCall(delay, nextLayout);
    }
    return () => {
      timerRef.current?.kill();
    };
  }, [params.autoPlay, nextLayout]);

  const isWrap = currentLayout === 'grid' || currentLayout === 'columns';

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full flex overflow-hidden justify-center ${
        isWrap ? 'flex-wrap content-stretch items-stretch' : 'items-center'
      }`}
      style={{
        backgroundColor: params.bgColor,
        containerType: 'size',
      } as React.CSSProperties}
    >
      {/* Letter F */}
      <div
        className="letter text-center flex items-center justify-center"
        style={{
          backgroundColor:
            currentLayout === 'plain' ? 'transparent' : params.colorF,
          color: currentLayout === 'plain' ? params.textColor : '#000',
          fontSize: `${params.fontSize}cqmax`,
          fontWeight: 400,
          padding: currentLayout === 'plain' ? 0 : '2px 6px',
          flexBasis:
            currentLayout === 'grid'
              ? '50%'
              : currentLayout === 'columns'
              ? '25%'
              : 'auto',
        }}
      >
        F
      </div>

      {/* Letter L */}
      <div
        className="letter text-center flex items-center justify-center"
        style={{
          backgroundColor:
            currentLayout === 'plain' ? 'transparent' : params.colorL,
          color: currentLayout === 'plain' ? params.textColor : '#000',
          fontSize: `${params.fontSize}cqmax`,
          fontWeight: 400,
          padding: currentLayout === 'plain' ? 0 : '2px 6px',
          flexBasis:
            currentLayout === 'grid'
              ? '50%'
              : currentLayout === 'columns'
              ? '25%'
              : 'auto',
        }}
      >
        L
      </div>

      {/* Letter I */}
      <div
        className="letter text-center flex items-center justify-center"
        style={{
          backgroundColor:
            currentLayout === 'plain' ? 'transparent' : params.colorI,
          color: currentLayout === 'plain' ? params.textColor : '#000',
          fontSize: `${params.fontSize}cqmax`,
          fontWeight: 400,
          padding: currentLayout === 'plain' ? 0 : '2px 6px',
          flexBasis:
            currentLayout === 'grid'
              ? '50%'
              : currentLayout === 'columns'
              ? '25%'
              : 'auto',
        }}
      >
        I
      </div>

      {/* Letter P */}
      <div
        className="letter text-center flex items-center justify-center"
        style={{
          backgroundColor:
            currentLayout === 'plain' ? 'transparent' : params.colorP,
          color: currentLayout === 'plain' ? params.textColor : '#000',
          fontSize: `${params.fontSize}cqmax`,
          fontWeight: 400,
          padding: currentLayout === 'plain' ? 0 : '2px 6px',
          flexBasis:
            currentLayout === 'grid'
              ? '50%'
              : currentLayout === 'columns'
              ? '25%'
              : 'auto',
        }}
      >
        P
      </div>

      {/* "for" text */}
      <div
        className="for-text"
        style={{
          fontSize: `${params.fontSize / 2}cqmax`,
          color: params.textColor,
          padding: `2px ${params.fontSize * 0.16}cqmax`,
          fontWeight: 300,
          display: currentLayout === 'final' ? 'block' : 'none',
        }}
      >
        for
      </div>

      {/* "GSAP" text */}
      <div
        className="gsap-text"
        style={{
          fontSize: `${params.fontSize / 2}cqmax`,
          color: params.textColor,
          padding: '2px 0',
          fontWeight: 600,
          display: currentLayout === 'final' ? 'block' : 'none',
        }}
      >
        GSAP
      </div>

      {/* Manual control button */}
      {!params.autoPlay && (
        <button
          onClick={nextLayout}
          className="absolute bottom-5 right-5 px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg text-white text-sm font-medium transition-colors"
        >
          Next Layout
        </button>
      )}
    </div>
  );
};
