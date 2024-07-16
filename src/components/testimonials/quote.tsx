import styled from '@emotion/styled';
import { useState } from 'react';

const CollapsibleQuote = styled.blockquote<{
  collapse: boolean;
}>(({ collapse }) => ({
  cursor: 'pointer',
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  WebkitLineClamp: collapse ? 3 : 'none',
  minHeight: 40,
}));

interface Props {
  children: string;
}

export default function Quote({ children }: Props) {
  const [collapse, setCollapse] = useState(true);

  return (
    <CollapsibleQuote
      collapse={collapse}
      data-test-collapse={collapse}
      onClick={() => setCollapse((prev) => !prev)}
    >
      <span style={{ marginRight: 2 }}>&ldquo;</span>
      {children}
      <span style={{ marginLeft: 2 }}>&rdquo;</span>
    </CollapsibleQuote>
  );
}
