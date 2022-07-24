import { Container } from "Src/components/Container";
import { Logo } from "Src/components/Logo";
import { NavigationItems } from "./Items";
import { StyledNavigation } from "./styles";

export function Navigation() {
  return (
    <Container>
      <StyledNavigation>
        <Logo />
        <NavigationItems />
      </StyledNavigation>
    </Container>
  );
}
