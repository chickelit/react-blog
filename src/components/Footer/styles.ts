import { styled, theme } from "Src/stitches.config";

export const StyledFooter = styled("footer", {
  background: theme.colors.$gray800.value,
  color: "white",
  height: "4rem",
  display: "grid",
  gridTemplateRows: "1fr",
});

export const Wrapper = styled("div", {
  padding: "0 2rem",
  display: "grid",
  gridTemplateColumns: "max-content max-content",
  justifyContent: "space-between",
  alignItems: "center",
  p: {
    height: "max-content",
    fontWeight: 400,
    fontSize: "1rem",
    lineHeight: "1.5rem",
    color: theme.colors.$gray400.value,
  },
});
