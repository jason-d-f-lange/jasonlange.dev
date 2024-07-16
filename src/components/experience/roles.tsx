import styled from '@emotion/styled';
import { HorizontalStack } from '../layout/stack';
import { ExperienceItem } from './experience-items';

const Role = styled.div({
  fontWeight: 'var(--font-weight-semibold)',
  fontSize: '0.9em',
});

interface Props {
  roles: ExperienceItem['roles'];
  formatDate: (date: Date) => string;
}

export default function Roles({ roles, formatDate }: Props) {
  return roles.map((role) => {
    const startDate = formatDate(role.startDate);
    const endDate = formatDate(role.endDate);

    return (
      <Role key={role.title}>
        <HorizontalStack
          as="p"
          gap={0}
          flexWrap="wrap"
          style={{ whiteSpace: 'pre' }}
        >
          {`> ${role.title} `}
          <span>
            ({startDate} - {endDate})
          </span>
        </HorizontalStack>
      </Role>
    );
  });
}
