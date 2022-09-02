import { styled, theme } from "Src/stitches.config";

export const Button = styled("button", {
  borderRadius: "0.5rem",
  typography: "text-md-semibold",
  cursor: "pointer",
  color: "$white",
  background: "$primary600",
  whiteSpace: "nowrap",
  display: "grid",
  placeContent: "center",
  variants: {
    light: {
      true: {
        color: "$gray500",
        background: "none",
      },
    },
    bordered: {
      true: {
        border: theme.borderStyles.gray300.value,
        boxShadow: theme.shadows.xs.value,
        borderRadius: "0.5rem",
      },
    },
    paddingSize: {
      small: {
        padding: "0.625rem 1.125rem",
      },
      big: {
        padding: "0.75rem 1.25rem",
      },
    },
  },
  defaultVariants: {
    light: false,
    bordered: false,
    paddingSize: "small",
  },
});
