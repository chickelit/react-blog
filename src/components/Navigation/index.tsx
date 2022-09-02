import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { Logo } from "Src/components/Logo";
import { Button } from "../Button";
import { Container } from "../Container";
import { NavItem } from "./Item";
import {
  StyledNavigation,
  Buttons,
  NavItems,
  Grid,
  HamburgerButton,
} from "./styles";

export const Navigation: React.FC = () => {
  return (
    <StyledNavigation>
      <Container>
        <Grid>
          <NavLink to="/">
            <Logo />
          </NavLink>
          <NavItems>
            <NavItem to="/">Home</NavItem>
            <NavItem to="/">Products</NavItem>
            <NavItem to="/">Resources</NavItem>
            <NavItem to="/">Pricing</NavItem>
          </NavItems>
          <Buttons>
            <Button light>Login</Button>
            <Button>Sign up</Button>
          </Buttons>
          <HamburgerButton>
            <FontAwesomeIcon icon={faBars} />
          </HamburgerButton>
        </Grid>
      </Container>
    </StyledNavigation>
  );
};
