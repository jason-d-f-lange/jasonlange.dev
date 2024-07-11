import styled from '@emotion/styled';
import { useEffect, useRef, useState } from 'react';

const TwoLineQuote = styled.blockquote<{
  limitToTwoLines: boolean;
  cursor: 'pointer' | 'initial';
}>(({ limitToTwoLines, cursor }) => ({
  cursor,
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  WebkitLineClamp: limitToTwoLines ? 2 : 'none',
  minHeight: 40,
}));

interface Props {
  children: string;
}

export default function Quote({ children }: Props) {
  const [limitToTwoLines, setLimitToTwoLines] = useState(true);
  const [isMoreThanTwoLines, setIsMoreThanTwoLines] = useState(false);
  const quoteRef = useRef<HTMLQuoteElement>(null);

  useEffect(() => {
    setLimitToTwoLines(true);

    const checkOverflow = () => {
      const current = quoteRef.current;

      if (current)
        setIsMoreThanTwoLines(current.scrollHeight > current.clientHeight);
    };

    checkOverflow();

    window.addEventListener('resize', checkOverflow);

    return () => window.removeEventListener('resize', checkOverflow);
  }, [children]);

  const toggleLimitToTwoLines = () => setLimitToTwoLines((prev) => !prev);

  return (
    <TwoLineQuote
      ref={quoteRef}
      limitToTwoLines={limitToTwoLines}
      cursor={isMoreThanTwoLines ? 'pointer' : 'initial'}
      onClick={toggleLimitToTwoLines}
    >
      {children}
    </TwoLineQuote>
  );
}
