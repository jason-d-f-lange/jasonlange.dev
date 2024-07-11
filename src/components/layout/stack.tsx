import styled from '@emotion/styled';

type Props = Pick<React.CSSProperties, 'gap' | 'alignItems' | 'justifyContent'>;

export const Stack = styled.div<Props>(
  ({ gap = 8, alignItems, justifyContent }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap,
    alignItems,
    justifyContent,
  }),
);

export const HorizontalStack = styled(Stack)({ flexDirection: 'row' });
