import { Logo } from "Src/components/Logo";
import { Button } from "../Button";
import { Container } from "../Container";
import { NavItem } from "./Item";
import { StyledNavigation, Buttons, NavItems, Grid } from "./styles";

export const Navigation: React.FC = () => {
  return (
    <StyledNavigation>
      <Container>
        <Grid>
          <Logo />
          <NavItems>
            <NavItem to="/">Home</NavItem>
            <NavItem to="/">Resources</NavItem>
            <NavItem to="/">Resources</NavItem>
            <NavItem to="/">Pricing</NavItem>
          </NavItems>
          <Buttons>
            <Button theme={"light"}>Login</Button>
            <Button>Sign up</Button>
          </Buttons>
        </Grid>
      </Container>
    </StyledNavigation>
  );
}
