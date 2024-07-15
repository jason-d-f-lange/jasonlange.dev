import styled from '@emotion/styled';
import { HorizontalStack } from '../layout/stack';
import { ExperienceItem } from './experience-items';

const Role = styled.div({
  fontWeight: 'var(--font-weight-semibold)',
  fontSize: '0.9em',
});

const TurnUpArrow = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 384 512"
    style={{
      display: 'inline',
      width: 10,
      marginRight: 4,
      transform: 'scaleX(-1)',
    }}
  >
    {/* Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
    <path
      fill="#ffffff"
      d="M32 448c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c53 0 96-43 96-96l0-306.7 73.4 73.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 109.3 160 416c0 17.7-14.3 32-32 32l-96 0z"
    />
  </svg>
);

interface Props {
  roles: ExperienceItem['roles'];
  formatDate: (date: Date) => string;
}

export default function Roles({ roles, formatDate }: Props) {
  return roles.map((role, index) => {
    const startDate = formatDate(role.startDate);
    const endDate = formatDate(role.endDate);

    if (index === 0) return <Role key={role.title}>{role.title}</Role>;

    return (
      <Role key={role.title}>
        <HorizontalStack gap={4}>
          <TurnUpArrow />
          <HorizontalStack
            as="p"
            gap={0}
            flexWrap="wrap"
            style={{ whiteSpace: 'pre' }}
          >
            {role.title}{' '}
            <span>
              ({startDate} - {endDate})
            </span>
          </HorizontalStack>
        </HorizontalStack>
      </Role>
    );
  });
}
