import { styled, theme } from "Src/stitches.config";

export const StyledSearchInput = styled("div", {
  height: "max-content",
  padding: "0.75rem 0.875rem",
  background: "$white",
  border: theme.borderStyles.gray200.value,
  boxShadow: theme.shadows.xs.value,
  borderRadius: "0.5rem",
  display: "grid",
  gridTemplateColumns: "1.5rem auto",
  gridTemplateRows: "1.5rem",
  gap: "0.65rem",
  alignItems: "center",
  input: {
    typography: "text-md-normal",
    color: "$gray500",
    caretColor: "$gray500",
  },
});

export const SearchButton = styled("button", {
  width: "1.5rem",
  height: "1.5rem",
  padding: "0.25rem",
  cursor: "pointer",
  svg: {
    width: "100%",
    height: "100%",
    color: "$gray500",
  },
});
