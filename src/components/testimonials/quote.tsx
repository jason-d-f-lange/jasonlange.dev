import styled from '@emotion/styled';
import { useState } from 'react';

const TwoLineQuote = styled.blockquote<{
  collapse: boolean;
}>(({ collapse }) => ({
  cursor: 'pointer',
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  WebkitLineClamp: collapse ? 2 : 'none',
  minHeight: 40,
}));

interface Props {
  children: string;
}

export default function Quote({ children }: Props) {
  const [collapse, setCollapse] = useState(true);

  return (
    <TwoLineQuote
      collapse={collapse}
      data-test-collapse={collapse}
      onClick={() => setCollapse((prev) => !prev)}
    >
      {children}
    </TwoLineQuote>
  );
}
