'use client';

import About from '@/components/about';
import Experience from '@/components/experience/experience';
import Skills from '@/components/skills/skills';
import { testimonialItems } from '@/components/testimonials/testimonial-items';
import Testimonials from '@/components/testimonials/testimonials';
import styled from '@emotion/styled';

const baseGap = 20;

const Content = styled.main({
  margin: '0 auto',
  maxWidth: 1126,

  display: 'flex',
  flexDirection: 'column',
  padding: baseGap,
  gap: baseGap,

  '@media (min-width: 1020px)': {
    display: 'block',
    columns: 2,
    padding: baseGap * 2,
    gap: baseGap * 2, // gap between columns

    '& > *': {
      breakInside: 'avoid',
      marginBottom: baseGap * 2,
    },
  },
});

interface SectionProps {
  hideBackground?: boolean;
  padding?: React.CSSProperties['padding'];
}

const Section = styled.section<SectionProps>(
  ({ hideBackground = false, padding = 24 }) => ({
    borderRadius: 'var(--border-radius)',
    background: hideBackground ? 'none' : 'rgba(52, 52, 52, 0.33)',
    padding,
  }),
);

const SectionHeading = styled.h2({
  fontWeight: 'var(--font-weight-bold)',
  fontSize: '1.5em',
  marginBottom: 12,
});

export default function Home() {
  return (
    <Content>
      <Section
        hideBackground
        padding={0}
      >
        <About />
      </Section>

      <Section>
        <SectionHeading>Testimonials</SectionHeading>
        <Testimonials testimonials={testimonialItems} />
      </Section>

      <Section>
        <SectionHeading>Core skills</SectionHeading>
        <Skills />
      </Section>

      <Section>
        <SectionHeading>Experience</SectionHeading>
        <Experience />
      </Section>

      <Section
        hideBackground
        style={{ fontSize: '0.85em', paddingTop: 0, paddingBottom: 0 }}
      >
        Built with Next.js and React, hosted on Vercel.
      </Section>
    </Content>
  );
}
