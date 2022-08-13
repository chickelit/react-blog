import { styled, theme } from "Src/stitches.config";

export const StyledLogo = styled("div", {
  width: "max-content",
  display: "grid",
  gridAutoFlow: "column",
  alignItems: "center",
  gap: "0.625rem",
  h1: {
    color: theme.colors.$gray900.value,
    fontSize: "1.25rem",
  },
});
