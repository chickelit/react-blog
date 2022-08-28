import { styled } from "Src/stitches.config";

export const StyledLogo = styled("div", {
  width: "max-content",
  display: "grid",
  gridAutoFlow: "column",
  alignItems: "center",
  gap: "0.625rem",
  h1: {
    color: "$gray900",
    fontSize: "1.25rem",
  },
  variants: {
    light: {
      true: {
        h1: {
          color: "$white",
        },
      },
    },
  },
});
