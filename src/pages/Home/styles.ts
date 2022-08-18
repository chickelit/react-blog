import { styled } from "Src/stitches.config";

export const Wrapper = styled("section", {
  padding: "6rem 2rem",
  display: "grid",
  gridTemplateColumns: "17.5rem 1fr",
  gridTemplateRows: "max-content max-content",
  gridTemplateAreas: `"sidebar posts" "pagination pagination"`,
  gap: "4rem",
  "#sidebar": {
    gridArea: "sidebar",
  },
  "#posts": {
    gridArea: "posts",
  },
  "#pagination": {
    gridArea: "pagination",
  },
});
