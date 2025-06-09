import styled from '@emotion/styled';
import AdditionalInfo from '../additional-info';
import Spacer from '../layout/spacer';
import { Stack } from '../layout/stack';
import { ExperienceItem } from './experience-items';
import Logo from './logo';
import Roles from './roles';

const Container = styled.article({
  width: '100%',
  position: 'relative',
});

const Timeframe = styled.span({
  fontWeight: 'var(--font-weight-semibold)',
  color: 'var(--secondary-color)',
});

const Skills = styled.div({
  display: 'flex',
  flexWrap: 'wrap',
  gap: 8,
});

const Chip = styled.span({
  borderRadius: 'var(--border-radius)',
  background:
    'linear-gradient(180deg, rgba(57, 194, 112, 0.9) 0%, rgba(52, 180, 103, 0.9) 100%)',
  padding: '4px 12px',
  whiteSpace: 'nowrap',
  fontSize: '0.75rem',
  fontWeight: 'var(--font-weight-semibold)',
  '@media (hover: hover)': {
    '&:hover': {
      color: 'var(--secondary-color)',
      background: 'var(--primary-color)',
    },
  },
});

export default function Card({ item }: { item: ExperienceItem }) {
  const { company, logo, roles, dotPoints, skills } = item;

  const dateFormatter = new Intl.DateTimeFormat('en-AU', {
    month: 'short',
    year: 'numeric',
  });

  const formatDate = (date: Date) => dateFormatter.format(date);

  const timeframeStart = formatDate(roles.at(-1)!.startDate);
  const timeframeEnd = roles.at(0)?.endDate
    ? formatDate(roles.at(0)!.endDate!)
    : 'Present';

  return (
    <Container>
      <Stack gap={2}>
        <Timeframe>
          {timeframeStart} - {timeframeEnd}
        </Timeframe>

        <h3>
          {company.name}
          {company.additionalInfo && (
            <AdditionalInfo>{company.additionalInfo}</AdditionalInfo>
          )}
        </h3>

        <Roles
          roles={roles}
          formatDate={formatDate}
        />
      </Stack>

      <Logo
        logo={logo}
        company={company.name}
      />

      <Spacer height={8} />

      <ul
        style={{
          listStylePosition: 'outside',
          marginLeft: 17,
          fontSize: '0.9rem',
        }}
      >
        {dotPoints.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>

      <Spacer />

      <Skills>
        {skills.map((skill) => (
          <Chip key={skill}>{skill}</Chip>
        ))}
      </Skills>
    </Container>
  );
}
