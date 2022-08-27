import { styled, theme } from "Src/stitches.config";
import { StyledSearchInput } from "../SearchInput/styles";

export const StyledBlogCategories = styled("nav", {
  display: "grid",
  gridTemplateColumns: "1fr",
  gridTemplateRows: "max-content max-content",
  gap: "2rem",
  "@max1024": {
    [`& ${StyledSearchInput}`]: {
      display: "none",
    },
  },
});

export const Grid = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr",
  gridAutoRows: "max-content",
  gap: "1.25rem",
  h3: {
    fontSize: "0.875rem",
    fontWeight: 600,
    color: theme.colors.$primary700.value,
  },
});

export const Categories = styled("ul", {
  display: "grid",
  gridAutoRows: "max-content",
  gap: "0.5rem",
});
