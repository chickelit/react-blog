import { styled, theme } from "Src/stitches.config";

export const StyledNavigationItem = styled("li", {
  a: {
    fontSize: "1rem",
    fontWeight: 500,
    color: theme.colors.$textColor.value,
  },
});
