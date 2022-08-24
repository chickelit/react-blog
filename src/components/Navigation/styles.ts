import { styled, theme } from "Src/stitches.config";

export const StyledNavigation = styled("nav", {
  height: "5rem",
  borderBottom: theme.borderStyles.gray100.value,
  background: theme.colors.$gray50.value,
  display: "grid",
  alignItems: "center",
});

export const Grid = styled("div", {
  padding: "0 2rem",
  display: "grid",
  gridTemplateColumns: "max-content 1fr max-content",
  alignItems: "center",
  gap: "2.625rem",
});

export const Buttons = styled("div", {
  display: "grid",
  gridAutoColumns: "max-content",
  gridAutoFlow: "column",
  gap: "0.75rem",
});

export const NavItems = styled("ul", {
  display: "grid",
  gridAutoColumns: "max-content",
  gridAutoFlow: "column",
  gap: "2rem",
});
