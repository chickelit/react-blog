import { styled, theme } from "Src/stitches.config";

export const Input = styled("input", {
  padding: "0.75rem 0.875rem",
  background: theme.colors.$white.value,
  border: theme.borderStyles.gray300.value,
  boxShadow: theme.shadows.xs.value,
  color: theme.colors.$gray500.value,
  caretColor: theme.colors.$gray500.value,
  borderRadius: "0.5rem",
});
