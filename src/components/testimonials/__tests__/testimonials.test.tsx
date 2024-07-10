import { faker } from '@faker-js/faker';
import { render, RenderResult } from '@testing-library/react';
import userEvent, { UserEvent } from '@testing-library/user-event';
import { TestimonialItem } from '../testimonial-items';
import Testimonials from '../testimonials';

let user: UserEvent;

beforeEach(() => {
  user = userEvent.setup();
});

const mockTestimonial = (): TestimonialItem => ({
  avatar: faker.image.avatarLegacy(),
  name: faker.person.fullName(),
  profileUrl: '',
  relationship: faker.person.bio().replaceAll(/[^A-z\d\s]/g, ''),
  quote: faker.lorem.sentences(2),
});

const mockTestimonials = (n: number = 3): TestimonialItem[] =>
  faker.helpers.multiple(mockTestimonial, { count: n });

const getAvatar = (component: RenderResult, n: number) => {
  // The elements in the DOM are in reverse order so the current/first is actually the last in the DOM
  const avatars = component.getAllByRole('img', { name: /avatar/ });
  return avatars[avatars.length - n - 1];
};

const verifyTestimonialShown = (
  component: RenderResult,
  testimonial: TestimonialItem,
) => {
  const src = getAvatar(component, 0).getAttribute('src');
  expect(src).toBe(testimonial.avatar);

  const titleLine = component.getByRole('paragraph').innerHTML;
  expect(titleLine).toContain(testimonial.name);
  expect(titleLine).toContain(testimonial.relationship);

  expect(component.getByRole('blockquote')).toHaveTextContent(
    testimonial.quote,
  );
};

const moveNext = async (component: RenderResult) => {
  const nextButton = component.getByRole('button', { name: /next/i });
  await user.click(nextButton);
};

const movePrev = async (component: RenderResult) => {
  const prevButton = component.getByRole('button', { name: /prev/i });
  await user.click(prevButton);
};

it('displays the first testimonial by default', () => {
  const testimonials = mockTestimonials();
  const component = render(<Testimonials testimonials={testimonials} />);
  verifyTestimonialShown(component, testimonials[0]);
});

it('moves to next avatar when next button is clicked', async () => {
  const testimonials = mockTestimonials();
  const component = render(<Testimonials testimonials={testimonials} />);

  await moveNext(component);
  verifyTestimonialShown(component, testimonials[1]);

  await moveNext(component);
  verifyTestimonialShown(component, testimonials[2]);
});

it('moves to first avatar when next button is clicked while on the last avatar', async () => {
  const testimonials = mockTestimonials(2);
  const component = render(<Testimonials testimonials={testimonials} />);

  await moveNext(component);
  verifyTestimonialShown(component, testimonials[1]);

  await moveNext(component);
  verifyTestimonialShown(component, testimonials[0]);
});

it('moves to previous avatar when prev button is clicked', async () => {
  const testimonials = mockTestimonials();
  const component = render(<Testimonials testimonials={testimonials} />);

  await moveNext(component);
  verifyTestimonialShown(component, testimonials[1]);

  await movePrev(component);
  verifyTestimonialShown(component, testimonials[0]);
});

it('moves to last avatar when prev button is clicked while on the first avatar', async () => {
  const testimonials = mockTestimonials();
  const component = render(<Testimonials testimonials={testimonials} />);

  await movePrev(component);
  verifyTestimonialShown(component, testimonials[2]);
});

it('moves directly to avatar on click', async () => {
  const testimonials = mockTestimonials();
  const component = render(<Testimonials testimonials={testimonials} />);

  const lastAvatar = getAvatar(component, 2);
  await user.click(lastAvatar);

  verifyTestimonialShown(component, testimonials[2]);
});
