import { styled, theme } from "Src/stitches.config";

export const Button = styled("button", {
  padding: "0.625rem 1.125rem",
  borderRadius: "0.5rem",
  fontWeight: 400,
  fontSize: "1rem",
  lineHeight: "1.5rem",
  display: "grid",
  placeContent: "center",
  variants: {
    theme: {
      light: {
        color: theme.colors.$gray500.value,
        background: "none",
      },
      colorful: {
        color: theme.colors.$white.value,
        background: theme.colors.$primary600.value,
      },
    },
  },
  defaultVariants: {
    theme: "colorful",
  },
});
