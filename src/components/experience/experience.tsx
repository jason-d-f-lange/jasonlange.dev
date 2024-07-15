import { Stack } from '../layout/stack';
import ExperienceCard from './experience-card';
import { experienceItems } from './experience-items';

export default function Experience() {
  return (
    <Stack gap={24}>
      {experienceItems.map((item, index) => (
        <ExperienceCard
          key={index}
          item={item}
        />
      ))}
    </Stack>
  );
}
