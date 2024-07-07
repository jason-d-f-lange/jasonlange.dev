'use client';

import styled from '@emotion/styled';

interface Props {
  height?: number;
}

export default styled.div(({ height = 12 }: Props) => ({
  height,
}));
