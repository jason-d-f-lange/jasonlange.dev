import styled from '@emotion/styled';
import Image from 'next/image';
import Spacer from '../layout/spacer';
import { HorizontalStack, Stack } from '../layout/stack';
import AdditionalInfo from './additional-info';
import { ExperienceItem } from './experience-items';

const Card = styled.article({
  width: '100%',
  fontSize: 14,
});

const logoSize = 64;

const Logo = styled(Image)({
  width: logoSize,
  height: logoSize,
  borderRadius: '100%',
});

const Timeframe = styled.span({
  fontSize: 16,
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
  fontSize: 12,
  fontWeight: 'var(--font-weight-semibold)',
  '&:hover': {
    color: 'var(--secondary-color)',
    background: 'var(--primary-color)',
  },
});

export default function ExperienceCard({ item }: { item: ExperienceItem }) {
  const { company, companyInfo, logo, role, timeframe, dotPoints, skills } =
    item;

  return (
    <Card>
      <HorizontalStack justifyContent="space-between">
        <Stack gap={2}>
          <Timeframe>{timeframe}</Timeframe>
          <HorizontalStack alignItems="center">
            <h3>{company}</h3>
            {companyInfo && <AdditionalInfo>{companyInfo}</AdditionalInfo>}
          </HorizontalStack>
          <p
            style={{
              fontWeight: 'var(--font-weight-semibold)',
              whiteSpace: 'pre',
            }}
          >
            {role}
          </p>
        </Stack>

        <Logo
          src={`/logos/${logo}`}
          alt={`logo for ${company}`}
          width={64}
          height={64}
        />
      </HorizontalStack>

      <Spacer height={8} />

      <ul style={{ listStylePosition: 'outside', marginLeft: 17 }}>
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
    </Card>
  );
}
