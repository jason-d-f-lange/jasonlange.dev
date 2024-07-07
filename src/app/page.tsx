'use client';

import About from '@/components/about';
import styled from '@emotion/styled';

const BackgroundPattern = styled.div({
  position: 'fixed',
  top: '0',
  left: '0',
  height: '100vh',
  width: '100vw',
  zIndex: -1,
  backgroundImage:
    "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64' width='64' height='64' fill='none' stroke='rgb(255 255 255 / .02)'%3e%3cpath d='M0 0L64 64M0 64L64 0'/%3e%3c/svg%3e\")",
});

const Content = styled.main({
  height: '100vh',
  // width: ['100vw', 'var(--max-width)'],
  width: 'var(--max-width)',
  zIndex: -1,
  display: 'flex',
  flexDirection: 'row',
  minHeight: '100vh',
  margin: '0 auto',
});

const Column = styled.div({
  padding: 60,
  width: '100%',
});

export default function Home() {
  return (
    <>
      <BackgroundPattern />

      <Content>
        <Column>
          <About />
        </Column>
        <Column />
      </Content>
    </>
  );
}
