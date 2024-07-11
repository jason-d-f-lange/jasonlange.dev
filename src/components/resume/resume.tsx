import { Stack } from '../layout/stack';
import ResumeCard from './resume-card';
import { resumeItems } from './resume-items';

export default function Resume() {
  return (
    <Stack
      gap={24}
      style={{ padding: 'var(--section-inner-padding)' }}
    >
      {resumeItems.map((item, index) => (
        <ResumeCard
          key={index}
          item={item}
        />
      ))}
    </Stack>
  );
}
