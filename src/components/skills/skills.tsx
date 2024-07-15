import styled from '@emotion/styled';
import React from 'react';
import Spacer from '../layout/spacer';
import { Stack } from '../layout/stack';
import { skillCategories } from './skills-items';

const singleColumnBreakpoint = '@media (max-width: 430px)';

const Heading = styled.h2({
  color: 'var(--secondary-color)',
});

const LeadDotPointDisplacer = styled.div({
  marginLeft: -13,
  [singleColumnBreakpoint]: {
    marginLeft: 0,
    columnCount: 2,
  },
});

const Skill = styled.span({
  display: 'inline-block',
  marginRight: 6,
  lineHeight: '2em',
  [singleColumnBreakpoint]: {
    display: 'block',
    lineHeight: '1.5em',
  },
});

const Breakpoint = styled.div({
  [singleColumnBreakpoint]: {
    display: 'none',
  },
});

export default function Skills() {
  return (
    <Stack
      gap={12}
      style={{ overflow: 'hidden' }}
    >
      {skillCategories.map((category) => (
        <div key={category.title}>
          <Heading>{category.title}</Heading>

          <Spacer height={4} />

          <LeadDotPointDisplacer>
            {category.skills.map((skills, index) => (
              <React.Fragment key={index}>
                {skills.map((s) => (
                  <Skill key={s}>• {s}</Skill>
                ))}
                <Breakpoint />
              </React.Fragment>
            ))}
          </LeadDotPointDisplacer>
        </div>
      ))}
    </Stack>
  );
}
