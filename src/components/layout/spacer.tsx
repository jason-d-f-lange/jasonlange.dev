import styled from '@emotion/styled';

type Props = Pick<React.CSSProperties, 'height'>;

export default styled.div(({ height = 12 }: Props) => ({
  height,
}));
