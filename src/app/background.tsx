'use client';

import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const maskSize = 300;

const getBackgroundImage = (size: number) =>
  `url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64' width='${size}' height='${size}' fill='none' stroke='rgb(255 255 255 / .02)'%3e%3cpath d='M0 0L64 64M0 64L64 0'/%3e%3c/svg%3e\")`;

const BackgroundPattern = styled.div({
  position: 'fixed',
  height: '100vh',
  width: '100vw',
  backgroundImage: getBackgroundImage(64),
  zIndex: -2,
});

const Mask = styled(motion.div)({
  position: 'fixed',
  height: '100%',
  width: '100%',
  maskImage: "url('/mask.svg')",
  maskRepeat: 'no-repeat',
  maskSize,
  zIndex: -1,
  backgroundImage: getBackgroundImage(128),
});

export default function Background() {
  const deviceHasPointer = window.matchMedia('(pointer: fine)').matches;

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { x, y } = mousePosition;

  useEffect(() => {
    if (!deviceHasPointer) return;

    const updateMousePosition = (e: MouseEvent) =>
      setMousePosition({ x: e.clientX, y: e.clientY });

    window.addEventListener('mousemove', updateMousePosition);

    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, [deviceHasPointer]);

  return (
    <>
      <BackgroundPattern />

      <Mask
        animate={{
          WebkitMaskPosition: `${x - maskSize / 2}px ${y - maskSize / 2}px`,
        }}
        transition={{ type: 'tween', ease: 'backOut' }}
      />
    </>
  );
}
