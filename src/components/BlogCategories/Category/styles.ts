import { NavLink } from "react-router-dom";
import { styled } from "Src/stitches.config";

export const StyledCategory = styled(NavLink, {
  padding: "0.625rem 0.875rem",
  typography: "text-md-semibold",
  variants: {
    theme: {
      colorful: {
        background: "$primary50",
        borderRadius: "0.375rem",
        color: "$primary700",
      },
      light: {
        color: "$gray500",
      },
    },
  },
  defaultVariants: {
    theme: "light",
  },
});

export type StyledCategoryTheme = "colorful" | "light";
