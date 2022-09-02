import { styled } from "Src/stitches.config";

export const Grid = styled("div", {
  padding: "8.25rem 2rem",
  display: "grid",
  gap: "2.5rem",
});

export const SupportingText = styled("div", {
  display: "grid",
  gap: "1.5rem",
  "h2.title": {
    typography: "display-lg-semibold",
    color: "$gray900",
  },
  "p.subtitle": {
    wordBreak: "keep-all",
    typography: "text-xl-normal",
    color: "$gray500",
  },
});

export const EmailCapture = styled("form", {
  maxWidth: "32rem",
  display: "grid",
  gridTemplateColumns: "1fr max-content",
  gridTemplateRows: "max-content",
  alignItems:"start",
  gap: "1rem",
});

export const Heading = styled("div", {
  display: "grid",
  gap: "0.75rem",
});

export const InputContainer = styled("div", {
  typography: "text-sm-normal",
  color: "$gray600",
  display: "grid",
  gap: "0.375rem",
  a: {
    typography: "text-sm-normal",
    color: "$gray600",
    textDecoration: "underline",
  },
});

export const StyledHeader = styled("header", {
  background: "$gray50",
  "p.sub-heading": {
    typography: "text-md-semibold",
    color: "$primary600",
  },
  "@max1024": {
    [`& ${Grid}`]: {
      padding: "4rem 1rem",
      [`${EmailCapture}`]: {
        gridTemplateColumns: "1fr",
        gridAutoRows: "max-content",
      },
    },
  },
});
