import { styled, theme } from "Src/stitches.config";

export const StyledNavigation = styled("nav", {
  width: "100%",
  height: "5rem",
  padding: "1.125rem 0",
  borderBottom: theme.borderStyles.base.value,
  display: "grid",
  gridTemplateColumns: "max-content 1fr max-content",
  alignItems: "center",
  gap: "2.625rem",
});
