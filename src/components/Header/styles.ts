import { styled, theme } from "Src/stitches.config";
import { Container } from "../Container";

export const StyledHeader = styled("header", {});

export const StyledContainer = styled(Container, {
  background: theme.colors.$backgroundDarker.value,
  padding: "8.25rem 7rem",
  h1: {
    fontSize: "3rem",
    fontWeight: 600,
    color: theme.colors.$titleColor.value,
  },
});
