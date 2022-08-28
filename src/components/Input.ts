import { styled, theme } from "Src/stitches.config";

export const Input = styled("input", {
  padding: "0.75rem 0.875rem",
  background: "$white",
  border: theme.borderStyles.gray300.value,
  boxShadow: theme.shadows.xs.value,
  color: "$gray500",
  caretColor: "$gray500",
  borderRadius: "0.5rem",
  typography: "text-md-normal",
});
