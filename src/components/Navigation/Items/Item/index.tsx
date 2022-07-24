import { NavLink, NavLinkProps } from "react-router-dom";
import { StyledNavigationItem } from "./styles";

interface IProps extends NavLinkProps {
  children: React.ReactNode;
}

export function NavigationItem({ children, ...rest }: IProps) {
  return (
    <StyledNavigationItem>
      <NavLink {...rest}>{children}</NavLink>
    </StyledNavigationItem>
  );
}
