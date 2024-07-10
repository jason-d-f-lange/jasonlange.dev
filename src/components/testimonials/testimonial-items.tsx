import { faker } from '@faker-js/faker';

export interface TestimonialItem {
  avatar: string;
  name: string;
  profileUrl: string;
  relationship: string;
  quote: string;
}

faker.seed(42);

export const testimonialItems: TestimonialItem[] = faker.helpers.multiple(
  (): TestimonialItem => ({
    // avatar: 'https://placehold.co/80x80?text=',
    avatar: faker.image.avatarLegacy(),
    name: faker.person.fullName(),
    profileUrl: '',
    relationship: faker.person.bio(),
    quote: faker.lorem.sentences(2),
  }),
  { count: 5 },
);
// .map((x, i) => ({ ...x, avatar: x.avatar + i }));
