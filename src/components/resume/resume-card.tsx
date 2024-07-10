import styled from '@emotion/styled';
import Chip from '../shared/chip';
import Spacer from '../shared/spacer';
import { ResumeItem } from './resume-items';

const Card = styled.article({
  width: '100%',
  fontSize: 14,
});

const Columns = styled.div({
  display: 'flex',
  width: '100%',
  gap: 8,
});

const logoSize = 64;

const Logo = styled.img({
  width: logoSize,
  height: logoSize,
  borderRadius: '100%',
  boxShadow: '0px 1px 2px 0px #9d9d9d',
});

const TitleLine = styled.div({
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
});

const Timeframe = styled.span({
  fontSize: 16,
  fontWeight: 'var(--font-weight-semibold)',
  color: 'var(--secondary-color)',
  textTransform: 'uppercase',
});

const Skills = styled.div({
  display: 'flex',
  flexWrap: 'wrap',
  gap: 6,
});

export default function ResumeCard({ item }: { item: ResumeItem }) {
  const { company, logo, role, timeframe, dotPoints, skills } = item;

  return (
    <Card>
      <Columns>
        <Logo
          src={logo}
          alt={`logo for ${company}`}
        />
        <div style={{ width: '100%' }}>
          <TitleLine>
            <h3>{company}</h3>
            <Timeframe>{timeframe}</Timeframe>
          </TitleLine>
          <p style={{ fontWeight: 'var(--font-weight-semibold)' }}>{role}</p>
          <Spacer height={8} />
          <ul style={{ listStylePosition: 'inside' }}>
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
        </div>
      </Columns>
    </Card>
  );
}
