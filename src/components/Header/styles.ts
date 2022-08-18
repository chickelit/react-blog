import { styled, theme } from "Src/stitches.config";

export const StyledHeader = styled("header", {
  background: theme.colors.$gray50.value,
});

export const Wrapper = styled("div", {
  padding: "8.25rem 2rem",
  display: "grid",
  gap: "2.5rem",
});

export const SupportingText = styled("div", {
  display: "grid",
  gap: "1.5rem",
  h2: {
    fontSize: "3rem",
    fontWeight: 600,
    color: theme.colors.$gray900.value,
  },
  p: {
    fontSize: "1.25rem",
    fontWeight: 400,
    color: theme.colors.$gray500.value,
  },
});

export const EmailCapture = styled("form", {
  maxWidth: "31.5rem",
  display: "grid",
  gridTemplateColumns: "1fr 8rem",
  gap: "1rem",
});
