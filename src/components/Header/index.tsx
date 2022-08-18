import { Button } from "../Button";
import { Container } from "../Container";
import { Input } from "../Input";
import { StyledHeader, SupportingText, EmailCapture, Wrapper } from "./styles";

export function Header() {
  return (
    <StyledHeader>
      <Container>
        <Wrapper>
          <SupportingText>
            <h2>Vite blog</h2>
            <p>
              Tool and strategies modern teams need to help their companies
              grow.
            </p>
          </SupportingText>
          <EmailCapture>
            <Input placeholder="Enter your email" />
            <Button>Get started</Button>
          </EmailCapture>
        </Wrapper>
      </Container>
    </StyledHeader>
  );
}
