import { Logo } from "Src/components/Logo";
import { Button } from "../Button";
import { NavigationItems } from "./Items";
import { StyledNavigation, NavigationButtons, StyledContainer } from "./styles";

export function Navigation() {
  return (
    <StyledContainer>
      <StyledNavigation>
        <Logo />
        <NavigationItems />
        <NavigationButtons>
          <Button light>Login</Button>
          <Button>Sign up</Button>
        </NavigationButtons>
      </StyledNavigation>
    </StyledContainer>
  );
}
