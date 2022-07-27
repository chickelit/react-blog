import { EmailCapture } from "./EmailCapture";
import { StyledHeader, StyledContainer } from "./styles";
import { SupportingText } from "./SupportingText";

export function Header() {
  return (
    <StyledContainer>
      <StyledHeader>
        <SupportingText />
        <EmailCapture />
      </StyledHeader>
    </StyledContainer>
  );
}
