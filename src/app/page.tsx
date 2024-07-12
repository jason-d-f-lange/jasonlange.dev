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

  '@media (min-width: 920px)': {
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
}

const Section = styled.section<SectionProps>(({ hideBackground = false }) => ({
  borderRadius: 'var(--border-radius)',
  background: hideBackground ? 'none' : 'rgba(52, 52, 52, 0.33)',
}));

export default function Home() {
  return (
    <Content>
      <Section hideBackground>
        <About />
      </Section>

      <Section style={{ padding: 'var(--section-inner-padding)' }}>
        <Testimonials testimonials={testimonialItems} />
      </Section>

      <Section>
        <Skills />
      </Section>

      <Section>
        <Experience />
      </Section>

      {/* <span style={{ fontSize: 14, fontWeight: 'normal' }}>
          Built with Next.js and React, hosted on Vercel.
        </span> */}
    </Content>
  );
}
