import { styled } from "Src/stitches.config";

export const Button = styled("button", {
  padding: "0.625rem 1.125rem",
  borderRadius: "0.5rem",
  typography: "text-md-semibold",
  cursor: "pointer",
  display: "grid",
  placeContent: "center",
  variants: {
    theme: {
      light: {
        color: "$gray500",
        background: "none",
      },
      colorful: {
        color: "$white",
        background: "$primary600",
      },
    },
  },
  defaultVariants: {
    theme: "colorful",
  },
});
