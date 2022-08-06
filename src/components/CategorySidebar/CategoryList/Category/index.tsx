import React from "react";
import { NavLink, NavLinkProps } from "react-router-dom";
import { StyledCategory } from "./styles";

interface IProps {
  highlighted?: boolean
  children: React.ReactNode;
}

export function Category({ children, highlighted, ...rest }: IProps) {
  return (
    <StyledCategory highlighted={highlighted}>
      <NavLink {...rest} to="">{children}</NavLink>
    </StyledCategory>
  );
}
