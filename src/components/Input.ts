import { styled, theme } from "Src/stitches.config";

export const Input = styled("input", {
  padding: "0.75rem 0.875rem",
  background: theme.colors.$background.value,
  border: theme.borderStyles.lighter.value,
  boxShadow: theme.shadows.light.value,
  color: theme.colors.$textColor.value,
  caretColor: theme.colors.$textColor.value,
  borderRadius: "0.5rem",
});
