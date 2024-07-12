import styled from '@emotion/styled';
import Tooltip from './tooltip';

interface Props {
  children: React.ReactNode;
}

const Svg = styled.svg({
  width: 16,
  cursor: 'pointer',
});

const Icon = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      {/* Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
      <path
        fill="#ffffff"
        d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
      />
    </Svg>
  );
};

export default function AdditionalInfo({ children }: Props) {
  return (
    <Tooltip content={children}>
      <Icon />
    </Tooltip>
  );
}
