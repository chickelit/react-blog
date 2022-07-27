import { styled, theme } from "Src/stitches.config";
import { Container } from "../Container";

export const StyledHeader = styled("header", {
  display: "grid",
  gap: "2.5rem",
});

export const StyledContainer = styled(Container, {
  background: theme.colors.$backgroundDarker.value,
  padding: "8.25rem 7rem",
});
