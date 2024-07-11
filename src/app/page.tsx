'use client';

import About from '@/components/about';
import Resume from '@/components/resume/resume';
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

type GridArea = 'about' | 'experience' | 'testimonials' | 'skills';

const singleColumnLayout: GridArea[] = [
  'about',
  'testimonials',
  'experience',
  'skills',
];

const dualColumnLayout: [GridArea, GridArea][] = [
  ['about', 'experience'],
  ['testimonials', 'experience'],
  ['skills', 'experience'],
];

const Content = styled.main({
  margin: '0 auto',
  maxWidth: 1126,

  display: 'grid',
  gridTemplateAreas: singleColumnLayout.map((area) => `"${area}"`).join(' '),

  padding: 20,
  gap: 20,

  '@media (min-width: 800px)': {
    gridTemplateColumns: '1fr 1fr',
    gridTemplateAreas: dualColumnLayout
      .map((areas) => `"${areas.join(' ')}"`)
      .join(' '),

    padding: 40,
    gap: 40,
  },
});

interface SectionProps {
  gridArea: GridArea;
  hideBackground?: boolean;
}

const Section = styled.section<SectionProps>(
  ({ gridArea, hideBackground = false }) => ({
    borderRadius: 10,
    background: hideBackground ? 'none' : 'rgba(52, 52, 52, 0.33)',
    gridArea,
  }),
);

export default function Home() {
  return (
    <>
      <BackgroundPattern />

      <Content>
        <Section
          gridArea="about"
          hideBackground
        >
          <About />
        </Section>
        <Section gridArea="experience">
          <Resume />
        </Section>
        <Section
          gridArea="testimonials"
          style={{ padding: 'var(--section-inner-padding)' }}
        >
          <Testimonials testimonials={testimonialItems} />
        </Section>
        <Section gridArea="skills">
          <Skills />
        </Section>
        {/* <span style={{ fontSize: 14, fontWeight: 'normal' }}>
          Built with Next.js and React, hosted on Vercel.
        </span> */}
      </Content>
    </>
  );
}
