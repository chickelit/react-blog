import { Container } from "../Container";
import { Logo } from "../Logo";
import { StyledFooter, Wrapper } from "./styles";

export function Footer() {
  function getYear() {
    const now = new Date();

    return now.getFullYear();
  }

  return (
    <StyledFooter>
      <Container>
        <Wrapper>
          <Logo light={true} />
          <p>@{getYear()} Vite Blog. All rights reserved.</p>
        </Wrapper>
      </Container>
    </StyledFooter>
  );
}
