import React from "react";
import { NavLinkProps } from "react-router-dom";
import { StyledCategory, StyledCategoryTheme } from "./styles";

interface IProps extends NavLinkProps {
  theme?: StyledCategoryTheme;
  children: React.ReactNode;
}

export function Category({ children, ...rest }: IProps) {
  return (
    <StyledCategory {...rest} to="">
      {children}
    </StyledCategory>
  );
}
