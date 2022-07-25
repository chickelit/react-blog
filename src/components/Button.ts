import { styled, theme } from "Src/stitches.config";

export const Button = styled("button", {
  padding: "0.625rem 1.125rem",
  color: theme.colors.$textColorLighter.value,
  background: theme.colors.$primary.value,
  borderRadius: "0.5rem",
  fontWeight: 500,
  fontSize: "1rem",
  display: "grid",
  placeContent: "center",
  variants: {
    light: {
      true: {
        color: theme.colors.$textColor.value,
        background: "none",
      },
    },
  },
});
