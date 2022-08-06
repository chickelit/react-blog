import { styled, theme } from "Src/stitches.config";

export const StyledCategory = styled("li", {
  padding: "0.625rem 0.875rem",
  a: {
    color: theme.colors.$textColor.value,
  },
  variants: {
    highlighted: {
      true: {
        background: theme.colors.$primaryLightest.value,
        borderRadius: "0.375rem",
        a: {
          color: theme.colors.$primaryDarker.value,
        },
      },
    },
  },
});
