import { styled } from "Src/stitches.config";

export const StyledHome = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr",
  gridAutoRows: "max-content",
});

export const Grid = styled("div", {
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
