import { NavLink } from "react-router-dom";
import { styled, theme } from "Src/stitches.config";

export const StyledCategory = styled(NavLink, {
  padding: "0.625rem 0.875rem",
  variants: {
    theme: {
      colorful: {
        background: theme.colors.$primary50.value,
        borderRadius: "0.375rem",
        color: theme.colors.$primary700.value,
      },
      light: {
        color: theme.colors.$gray500.value,
      },
    },
  },
  defaultVariants: {
    theme: "light",
  },
});

export type StyledCategoryTheme = "colorful" | "light";
