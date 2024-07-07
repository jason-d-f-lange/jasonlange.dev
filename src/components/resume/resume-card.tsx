import styled from '@emotion/styled';
import Chip from '../shared/chip';
import Spacer from '../shared/spacer';
import { ResumeItem } from './types';

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
});

const TitleLine = styled.div({
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
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
            <span style={{ fontSize: 16, color: 'var(--off-color)' }}>
              {timeframe}
            </span>
          </TitleLine>
          <p>{role}</p>
          <Spacer height={8} />
          <ul>
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
