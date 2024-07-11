import styled from '@emotion/styled';
import React from 'react';
import { skillCategories } from './skills-items';

const Category = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  padding: 'var(--section-inner-padding) 0',
});

const Heading = styled.h2({
  color: 'var(--secondary-color)',
  padding: '4px var(--section-inner-padding)',
});

const Row = styled.div({
  width: '100%',
  padding: '10px var(--section-inner-padding)',
  whiteSpace: 'pre',
  fontWeight: 'normal',
  '&:hover': {
    background: 'white',
    color: 'black',
  },
});

export default function Skills() {
  return (
    <Category>
      {skillCategories.map((category) => (
        <React.Fragment key={category.title}>
          <Heading>{category.title}</Heading>
          {category.skills.map((row, index) => (
            <Row key={index}>{row.join('  •  ').split('')}</Row>
          ))}
        </React.Fragment>
      ))}
    </Category>
  );
}