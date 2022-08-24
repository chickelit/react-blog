import { NavLink, NavLinkProps } from "react-router-dom";
import { StyledNavItem } from "./styles";

interface IProps extends NavLinkProps {
  children: React.ReactNode;
}

export const NavItem: React.FC<IProps> = ({ children, ...rest }) => {
  return (
    <StyledNavItem>
      <NavLink {...rest}>{children}</NavLink>
    </StyledNavItem>
  );
}
