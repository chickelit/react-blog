import { styled, theme } from "Src/stitches.config";

export const StyledCategorySidebar = styled("nav", {
  display: "grid",
  gridTemplateColumns: "1fr",
  gridTemplateRows: "max-content max-content",
  gap: "2rem",
  "div.container": {
    display: "grid",
    gridTemplateColumns: "1fr",
    gridAutoRows: "max-content",
    gap: "1.25rem",
    h3: {
      fontSize: "0.875rem",
      fontWeight: 600,
      color: theme.colors.$primary.value,
    },
  },
});
