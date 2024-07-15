import { faker } from '@faker-js/faker';
import { render, screen } from '@testing-library/react';
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

describe('avatar carousel', () => {
  const getAvatar = (n: number) => {
    // The elements in the DOM are in reverse order so the current/first is actually the last in the DOM
    const avatars = screen.getAllByRole('img', { name: /avatar/ });
    return avatars[avatars.length - n - 1];
  };

  const verifyTestimonialShown = (testimonial: TestimonialItem) => {
    const nextImageSrc = getAvatar(0).getAttribute('src');
    expect(nextImageSrc).not.toBeNull();

    const nextImageRegex = /^\/_next\/image\?url=(.+)&w=\d+&q=\d+$/;
    const nextImageSrcMatch = nextImageSrc!.match(nextImageRegex);
    expect(nextImageSrcMatch).not.toBeNull();
    expect(nextImageSrcMatch![1]).toBe(
      encodeURIComponent(`/avatars/${testimonial.avatar}`),
    );

    const titleLine = screen.getByRole('paragraph').innerHTML;
    expect(titleLine).toContain(testimonial.name);
    expect(titleLine).toContain(testimonial.relationship);

    expect(screen.getByRole('blockquote')).toHaveTextContent(testimonial.quote);
  };

  const moveNext = async () => {
    const nextButton = screen.getByRole('button', { name: /next/i });
    await user.click(nextButton);
  };

  const movePrev = async () => {
    const prevButton = screen.getByRole('button', { name: /prev/i });
    await user.click(prevButton);
  };

  it('displays the first testimonial by default', () => {
    const testimonials = mockTestimonials();
    render(<Testimonials testimonials={testimonials} />);
    verifyTestimonialShown(testimonials[0]);
  });

  it('moves to next avatar when next button is clicked', async () => {
    const testimonials = mockTestimonials();
    render(<Testimonials testimonials={testimonials} />);

    await moveNext();
    verifyTestimonialShown(testimonials[1]);

    await moveNext();
    verifyTestimonialShown(testimonials[2]);
  });

  it('moves to first avatar when next button is clicked while on the last avatar', async () => {
    const testimonials = mockTestimonials(2);
    render(<Testimonials testimonials={testimonials} />);

    await moveNext();
    verifyTestimonialShown(testimonials[1]);

    await moveNext();
    verifyTestimonialShown(testimonials[0]);
  });

  it('moves to previous avatar when prev button is clicked', async () => {
    const testimonials = mockTestimonials();
    render(<Testimonials testimonials={testimonials} />);

    await moveNext();
    verifyTestimonialShown(testimonials[1]);

    await movePrev();
    verifyTestimonialShown(testimonials[0]);
  });

  it('moves to last avatar when prev button is clicked while on the first avatar', async () => {
    const testimonials = mockTestimonials();
    render(<Testimonials testimonials={testimonials} />);

    await movePrev();
    verifyTestimonialShown(testimonials[2]);
  });

  it('moves directly to avatar on click', async () => {
    const testimonials = mockTestimonials();
    render(<Testimonials testimonials={testimonials} />);

    const lastAvatar = getAvatar(2);
    await user.click(lastAvatar);

    verifyTestimonialShown(testimonials[2]);
  });
});

describe('quote', () => {
  const isCollapsed = (quote: HTMLElement) =>
    quote.getAttribute('data-test-collapse') === 'true';

  it('is collapsed by default', () => {
    render(<Testimonials testimonials={[mockTestimonial()]} />);
    const quote = screen.getByRole('blockquote');
    expect(isCollapsed(quote)).toBe(true);
  });

  it('toggles expansion when clicked', async () => {
    render(<Testimonials testimonials={[mockTestimonial()]} />);
    const quote = screen.getByRole('blockquote');

    await user.click(quote);
    expect(isCollapsed(quote)).toBe(false);

    await user.click(quote);
    expect(isCollapsed(quote)).toBe(true);
  });
});
