import { useState, useEffect, useRef, useCallback } from 'react';
import { Point, EchotraceParams } from './types';

export const useTrailSystem = (config: EchotraceParams) => {
  const [trail, setTrail] = useState<Point[]>([]);
  const requestRef = useRef<number>();
  const cursorRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const pointsRef = useRef<Point[]>([]);
  const frameCountRef = useRef(0);
  const idCounterRef = useRef(0);

  const handleMove = useCallback((x: number, y: number) => {
    cursorRef.current = { x, y };
  }, []);

  const animate = useCallback(() => {
    frameCountRef.current++;

    const currentPoint: Point = {
      x: cursorRef.current.x,
      y: cursorRef.current.y,
      id: idCounterRef.current++,
      angle: frameCountRef.current * config.rotationSpeed,
      hue: (config.baseHue + frameCountRef.current * config.hueSpeed) % 360,
      timestamp: Date.now(),
    };

    pointsRef.current = [currentPoint, ...pointsRef.current].slice(0, config.trailLength);
    setTrail([...pointsRef.current]);

    requestRef.current = requestAnimationFrame(animate);
  }, [config.trailLength, config.rotationSpeed, config.hueSpeed, config.baseHue]);

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [animate]);

  return { trail, handleMove };
};
