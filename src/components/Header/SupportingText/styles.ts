import { styled, theme } from "Src/stitches.config";

export const StyledSupportingText = styled("div", {
  display: "grid",
  gap: "1.5rem",
  h2: {
    fontSize: "3rem",
    fontWeight: 600,
    color: theme.colors.$titleColor.value,
  },
  p: {
    fontSize: "1.25rem",
    fontWeight: 400,
    color: theme.colors.$textColor.value,
  },
});
