'use client';

import About from '@/components/about';
import Resume from '@/components/resume/resume';
import Spacer from '@/components/shared/spacer';
import Skills from '@/components/skills/skills';
import { testimonialItems } from '@/components/testimonials/testimonial-items';
import Testimonials from '@/components/testimonials/testimonials';
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
  width: 'var(--max-width)',
  zIndex: -1,
  display: 'flex',
  flexDirection: 'row',
  gap: 'var(--section-outer-padding)',
  margin: '0 auto',
});

const Column = styled.div({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
});

const Section = styled.div({
  borderRadius: 10,
  background: 'rgba(52, 52, 52, 0.33)',
});

export default function Home() {
  return (
    <>
      <BackgroundPattern />

      <Content>
        <Column>
          <About />
          <Spacer height={20} />
          <Section style={{ padding: 'var(--section-inner-padding)' }}>
            <Testimonials testimonials={testimonialItems} />
          </Section>
          <Spacer height={20} />
          <Section>
            <Skills />
          </Section>
          <Spacer height={20} />
          <span style={{ fontSize: 14, fontWeight: 'normal' }}>
            Built with Next.js and React, hosted on Vercel.
          </span>
        </Column>
        <Column>
          <Section>
            <Resume />
          </Section>
        </Column>
      </Content>
    </>
  );
}
