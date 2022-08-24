import { styled, theme } from "Src/stitches.config";

export const StyledNavItem = styled("li", {
  a: {
    fontSize: "1rem",
    fontWeight: 500,
    color: theme.colors.$gray500.value,
  },
});
