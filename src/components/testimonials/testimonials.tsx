import { useState } from 'react';
import Spacer from '../layout/spacer';
import { HorizontalStack } from '../layout/stack';
import AvatarCarousel from './avatars/avatar-carousel';
import Quote from './quote';
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
      <a
        href={selectedTestimonial.profileUrl}
        target="_blank"
        style={{
          fontWeight: 'var(--font-weight-semibold)',
          color: 'var(--secondary-color)',
          display: 'block',
          width: 'fit-content',
        }}
      >
        <HorizontalStack
          flexWrap="wrap"
          gap={4}
        >
          {selectedTestimonial.name}
          <span>•</span>
          <HorizontalStack>
            {selectedTestimonial.relationship}

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              style={{ width: 14 }}
            >
              {/* Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
              <path
                fill="var(--secondary-color)"
                d="M352 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9L370.7 96 201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L416 141.3l41.4 41.4c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V32c0-17.7-14.3-32-32-32H352zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"
              />
            </svg>
          </HorizontalStack>
        </HorizontalStack>
      </a>
      <Spacer />
      <Quote>{selectedTestimonial.quote}</Quote>
    </>
  );
}
