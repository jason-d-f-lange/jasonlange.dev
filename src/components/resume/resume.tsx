import styled from '@emotion/styled';
import ResumeCard from './resume-card';
import { resumeItems } from './resume-items';

const Section = styled.section({
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
  padding: 'var(--section-inner-padding)',
});

export default function Resume() {
  return (
    <Section>
      {resumeItems.map((item, index) => (
        <ResumeCard
          key={index}
          item={item}
        />
      ))}
    </Section>
  );
}
