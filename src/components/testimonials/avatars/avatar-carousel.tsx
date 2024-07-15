'use client';

import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';
import { TestimonialItem } from '../testimonial-items';
import { NextButton, PrevButton } from './nav-buttons';

const avatarSize = 56;

const Container = styled.div({
  display: 'flex',
  alignItems: 'center',
  gap: 8,
});

const AvatarGroup = styled.div({
  position: 'relative',
  height: avatarSize,
  display: 'flex',
  flexDirection: 'row-reverse',
});

const Avatar = styled(Image)({
  borderRadius: '100%',
  cursor: 'pointer',
  position: 'relative',
  boxShadow: '2px 0px 6px rgb(0 0 0 / 50%);',
});

interface Props {
  testimonials: TestimonialItem[];
  onChange: (selectedItem: number) => void;
}

export default function AvatarCarousel({ testimonials, onChange }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const numberOfVisibleAvatars = testimonials.length;
  const orderedTestimonials = useMemo(
    () =>
      [
        ...testimonials.slice(
          currentIndex,
          currentIndex + numberOfVisibleAvatars,
        ),
        ...testimonials.slice(0, currentIndex),
      ]
        .slice(0, numberOfVisibleAvatars)
        .toReversed(),
    [testimonials, currentIndex, numberOfVisibleAvatars],
  );

  const handlePrevClick = () =>
    setCurrentIndex((prev) => {
      if (prev === 0) return testimonials.length - 1;
      return prev - 1;
    });

  const handleNextClick = () =>
    setCurrentIndex((prev) => {
      if (prev === testimonials.length - 1) return 0;
      return prev + 1;
    });

  const handleAvatarClick = (testimonial: TestimonialItem) =>
    setCurrentIndex(testimonials.indexOf(testimonial));

  useEffect(() => {
    onChange(currentIndex);
  }, [currentIndex, onChange]);

  return (
    <Container>
      <PrevButton onClick={handlePrevClick} />

      <AvatarGroup>
        {orderedTestimonials.map((testimonial, index) => {
          const baseOverlapPercentage = 0.6;
          const additionalOverlapForPosition =
            0.01 * (testimonials.length - index);
          const overlapPercentage =
            baseOverlapPercentage + additionalOverlapForPosition;
          const overlapAmount = -(avatarSize * overlapPercentage);

          return (
            <motion.div
              key={testimonial.name}
              layout
              transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
              style={{
                marginLeft:
                  index !== testimonials.length - 1 ? overlapAmount : 0,
              }}
            >
              <Avatar
                src={`/avatars/${testimonial.avatar}`}
                alt={`avatar for ${testimonial.name}`}
                width={avatarSize}
                height={avatarSize}
                onClick={() => handleAvatarClick(testimonial)}
              />
            </motion.div>
          );
        })}
      </AvatarGroup>

      <NextButton onClick={handleNextClick} />
    </Container>
  );
}
