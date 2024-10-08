'use client';

import About from '@/components/about';
import AdditionalInfo from '@/components/additional-info';
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

  '@media (min-width: 1080px)': {
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
        <SectionHeading>
          Core skills
          <AdditionalInfo>
            Just the core ones, there&rsquo;s some like C# and ASP.NET which
            didn&rsquo;t make the list
          </AdditionalInfo>
        </SectionHeading>
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
