import { StyledLogo } from "./styles";

interface IProps {
  light?: boolean;
}

export function Logo({ light }: IProps) {
  return (
    <StyledLogo light={light}>
      <img src="/vite.svg" alt="Logo" />
      <h1>Logo</h1>
    </StyledLogo>
  );
}
