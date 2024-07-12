import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { ReactNode, useState } from 'react';

interface Props {
  children: ReactNode;
  content: ReactNode;
}

const Container = styled.div({
  position: 'relative',
});

const backgroundColor = 'var(--primary-color)';

const Popup = styled(motion.div)({
  position: 'absolute',
  bottom: '-6px',
  left: '50%',
  transform: 'translateX(-50%) translateY(100%)',
  zIndex: 1000,

  color: 'var(--inverted-color)',
  fontSize: '14px',
  fontWeight: 'var(--font-weight-semibold)',
  textAlign: 'center',
  textWrap: ['balance', 'pretty'],

  backgroundColor,
  padding: '8px 4px',
  minWidth: '200px',
  maxWidth: '300px',
  borderRadius: 'var(--border-radius)',

  '::before': {
    content: '""',
    position: 'absolute',
    bottom: 'calc(100% - 2px)',
    left: '50%',
    transform: 'translateX(-50%)',
    borderWidth: '6px',
    borderStyle: 'solid',
    borderColor: 'transparent',
    borderBottomColor: backgroundColor,
  },
});

export default function Tooltip({ children, content }: Props) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <Container
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {children}

      <Popup
        initial={{ display: 'none', opacity: 0 }}
        animate={{
          display: isHovering ? 'block' : 'none',
          opacity: isHovering ? 1 : 0,
        }}
      >
        {content}
      </Popup>
    </Container>
  );
}
