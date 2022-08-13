import { NavLink } from "react-router-dom";
import { styled, theme } from "Src/stitches.config";

export const StyledCategory = styled(NavLink, {
  padding: "0.625rem 0.875rem",
  color: theme.colors.$textColor.value,
  variants: {
    highlighted: {
      true: {
        background: theme.colors.$primaryLightest.value,
        borderRadius: "0.375rem",
        color: theme.colors.$primaryDarker.value,
      },
    },
  },
});
