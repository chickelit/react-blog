import React from "react";
import { NavLink, NavLinkProps } from "react-router-dom";
import { StyledCategory } from "./styles";

interface IProps extends NavLinkProps {
  highlighted?: boolean
  children: React.ReactNode;
}

export function Category({ children, highlighted, ...rest }: IProps) {
  return (
      <StyledCategory {...rest} to="" highlighted={highlighted}>{children}</StyledCategory>
  );
}
