import { useCallback, useEffect, useState } from 'react';

const throttle = (func: (...args: any[]) => void, limit: number) => {
  let lastFunc: NodeJS.Timeout;
  let lastRan: number;

  return function (...args: any[]) {
    if (!lastRan) {
      func(...args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(
        () => {
          if (Date.now() - lastRan >= limit) {
            func(...args);
            lastRan = Date.now();
          }
        },
        limit - (Date.now() - lastRan),
      );
    }
  };
};

export const useMousePosition = () => {
  const deviceHasPointer =
    typeof window !== 'undefined' &&
    window.matchMedia('(pointer: fine)').matches;

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleMouseMove = useCallback(
    throttle(
      (e: MouseEvent) => setMousePosition({ x: e.clientX, y: e.clientY }),
      16,
    ),
    [],
  );

  useEffect(() => {
    if (!deviceHasPointer) return;

    window.addEventListener('mousemove', handleMouseMove);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [deviceHasPointer, handleMouseMove]);

  return mousePosition;
};
