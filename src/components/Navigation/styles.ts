import { styled, theme } from "Src/stitches.config";
import { Container } from "../Container";

export const StyledNavigation = styled("nav", {
  height: "5rem",
  padding: "0 2rem",
  display: "grid",
  gridTemplateColumns: "max-content 1fr max-content",
  alignItems: "center",
  gap: "2.625rem",
});

export const NavigationButtons = styled("div", {
  display: "grid",
  gridAutoColumns: "max-content",
  gridAutoFlow: "column",
  gap: "0.75rem",
});

export const StyledContainer = styled(Container, {
  borderBottom: theme.borderStyles.base.value,
  background: theme.colors.$backgroundDarker.value,
});


export const NavigationItems = styled("ul", {
  display: "grid",
  gridAutoColumns: "max-content",
  gridAutoFlow: "column",
  gap: "2rem",
});
