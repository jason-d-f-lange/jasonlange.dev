import styled from '@emotion/styled';
import NextImage from 'next/image';
import { ExperienceItem } from './experience-items';

const circleSize = 64;
const logoSize = 48;

const Circle = styled.div({
  width: circleSize,
  height: circleSize,
  borderRadius: '100%',
  overflow: 'hidden',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  position: 'absolute',
  right: 0,
  top: 0,

  '@media (max-width: 520px)': {
    display: 'none',
  },
});

const Image = styled(NextImage)({
  width: logoSize,
  height: logoSize,
});

interface Props {
  logo: ExperienceItem['logo'];
  company: string;
}

export default function Logo({ logo, company }: Props) {
  return (
    <Circle style={{ background: logo.background }}>
      <Image
        src={`/logos/${logo.path}`}
        alt={`logo for ${company}`}
        width={logoSize}
        height={logoSize}
      />
    </Circle>
  );
}
