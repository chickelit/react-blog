import { styled } from "Src/stitches.config";

export const StyledPosts = styled("section", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "2rem 4rem",
  "@max1200": {
    gridTemplateColumns: "1fr",
    gap: "3rem",
  },
});
