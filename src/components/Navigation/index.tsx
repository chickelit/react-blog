import { Logo } from "Src/components/Logo";
import { Button } from "../Button";
import { NavigationItem } from "./Item";
import {
  StyledNavigation,
  NavigationButtons,
  StyledContainer,
  NavigationItems,
} from "./styles";

export function Navigation() {
  return (
    <StyledContainer>
      <StyledNavigation>
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
      </StyledNavigation>
    </StyledContainer>
  );
}
