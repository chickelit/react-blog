import { NavigationItem } from "./Item";
import { StyledNavigationItems } from "./styles";

export function NavigationItems() {
  return (
    <StyledNavigationItems>
      <NavigationItem to="/">Home</NavigationItem>
    </StyledNavigationItems>
  );
}
