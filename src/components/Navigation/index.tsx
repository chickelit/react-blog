import { Logo } from "Src/components/Logo";
import { Button } from "../Button";
import { Container } from "../Container";
import { NavigationItem } from "./Item";
import { StyledNavigation, NavigationButtons, NavigationItems, Wrapper } from "./styles";

export function Navigation() {
  return (
    <StyledNavigation>
      <Container>
        <Wrapper>
          <Logo />
          <NavigationItems>
            <NavigationItem to="/">Home</NavigationItem>
            <NavigationItem to="/">Resources</NavigationItem>
            <NavigationItem to="/">Resources</NavigationItem>
            <NavigationItem to="/">Pricing</NavigationItem>
          </NavigationItems>
          <NavigationButtons>
            <Button light>Login</Button>
            <Button>Sign up</Button>
          </NavigationButtons>
        </Wrapper>
      </Container>
    </StyledNavigation>
  );
}
