import styled from '@emotion/styled';

type Props = Pick<
  React.CSSProperties,
  'gap' | 'alignItems' | 'justifyContent' | 'flexWrap'
>;

export const Stack = styled.div<Props>(
  ({ gap = 8, alignItems, justifyContent, flexWrap = 'nowrap' }) => ({
    display: 'flex',
    flexDirection: 'column',
    flexWrap,
    gap,
    alignItems,
    justifyContent,
  }),
);

export const HorizontalStack = styled(Stack)({ flexDirection: 'row' });
