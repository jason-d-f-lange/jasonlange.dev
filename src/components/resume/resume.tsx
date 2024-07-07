import styled from '@emotion/styled';
import ResumeCard from './resume-card';
import { resumeItems } from './resume-items';

const Section = styled.section({
  display: 'flex',
  flexDirection: 'column',
  padding: '0 20px',
  gap: 24,
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
