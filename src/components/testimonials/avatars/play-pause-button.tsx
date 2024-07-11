import styled from '@emotion/styled';
import { motion } from 'framer-motion';

interface Props {
  play: boolean;
  onClick: () => void;
}

const size = 24;

type SwitchProps = Pick<Props, 'play'>;

const Switch = styled.div<SwitchProps>(({ play }) => ({
  marginLeft: 'auto',
  width: size * 1.5,
  height: size,
  background: '#181818',
  borderRadius: '16px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: play ? 'start' : 'end',
  padding: 2,
  cursor: 'pointer',
}));

const Icon = styled(motion.div)({
  height: size - 2,
  width: size - 2,
  background: 'none',
  border: 'none',
  zIndex: 1,
  '& svg': {
    fill: 'white',
  },
});

const playIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
  >
    {/* !Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
    <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9V344c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z" />
  </svg>
);

const pauseIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
  >
    {/* !Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM224 192V320c0 17.7-14.3 32-32 32s-32-14.3-32-32V192c0-17.7 14.3-32 32-32s32 14.3 32 32zm128 0V320c0 17.7-14.3 32-32 32s-32-14.3-32-32V192c0-17.7 14.3-32 32-32s32 14.3 32 32z" />
  </svg>
);

export default function PlaySwitch({ play, onClick }: Props) {
  return (
    <Switch
      play={play}
      onClick={onClick}
    >
      <Icon
        layout
        transition={{ duration: 0.5 }}
      >
        {play ? playIcon : pauseIcon}
      </Icon>
    </Switch>
  );
}
