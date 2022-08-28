import { styled } from "Src/stitches.config";

export const Grid = styled("div", {
  padding: "8.25rem 2rem",
  display: "grid",
  gap: "2.5rem",
});

export const SupportingText = styled("div", {
  display: "grid",
  gap: "1.5rem",
  h2: {
    typography: "display-lg-semibold",
    color: "$gray900",
  },
  p: {
    wordBreak: "keep-all",
    typography: "text-x1-normal",
    color: "$gray500",
  },
});

export const EmailCapture = styled("form", {
  maxWidth: "31.5rem",
  display: "grid",
  gridTemplateColumns: "1fr 8rem",
  gap: "1rem",
});

export const StyledHeader = styled("header", {
  background: "$gray50",
  "@max768": {
    [`& ${Grid}`]: {
      padding: "4rem 1rem",
      [`${EmailCapture}`]: {
        gridTemplateColumns: "1fr",
        gridAutoRows: "max-content",
      },
    },
  },
});
