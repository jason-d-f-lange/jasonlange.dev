import { useState } from 'react';
import Spacer from '../shared/spacer';
import AvatarCarousel from './avatars/avatar-carousel';
import { TestimonialItem } from './testimonial-items';

interface Props {
  testimonials: TestimonialItem[];
}

export default function Testimonials({ testimonials }: Props) {
  const [selectedTestimonial, setSelectedTestimonial] =
    useState<TestimonialItem>(testimonials[0]);

  const handleCarouselChange = (selectedItem: number) =>
    setSelectedTestimonial(testimonials[selectedItem]);

  return (
    <>
      <AvatarCarousel
        testimonials={testimonials}
        onChange={handleCarouselChange}
      />
      <Spacer />
      <p style={{ fontWeight: 'var(--font-weight-semibold)' }}>
        {selectedTestimonial.name} • {selectedTestimonial.relationship}
      </p>
      <Spacer />
      <blockquote>{selectedTestimonial.quote}</blockquote>
    </>
  );
}
