import { Button } from "../Button";
import { Input } from "../Input";
import { StyledHeader, StyledContainer, SupportingText, EmailCapture } from "./styles";

export function Header() {
  return (
    <StyledContainer>
      <StyledHeader>
        <SupportingText>
          <h2>Vite blog</h2>
          <p>
            Tool and strategies modern teams need to help their companies grow.
          </p>
        </SupportingText>
        <EmailCapture>
          <Input placeholder="Enter your email" />
          <Button>Get started</Button>
        </EmailCapture>
      </StyledHeader>
    </StyledContainer>
  );
}
