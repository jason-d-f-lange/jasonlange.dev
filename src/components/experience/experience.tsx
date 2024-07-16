import { Stack } from '../layout/stack';
import Card from './card';
import { experienceItems } from './experience-items';

export default function Experience() {
  return (
    <Stack gap={24}>
      {experienceItems.map((item, index) => (
        <Card
          key={index}
          item={item}
        />
      ))}
    </Stack>
  );
}
