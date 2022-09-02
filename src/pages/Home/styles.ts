import { StyledCTASection } from "Src/components/CTASection/styles";
import { styled } from "Src/stitches.config";

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

export const StyledHome = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr",
  gridAutoRows: "max-content",
  "@max768": {
    [`& ${Grid}`]: {
      gridTemplateColumns: "1fr",
      gridTemplateAreas: `"sidebar" "posts" "pagination"`,
    },
  },
  "@max1024": {
    [`& ${Grid}`]: {
      padding: "4rem 1rem",
    },
  },
  [`& ${StyledCTASection}`]: {
    paddingBottom: "6rem",
  },
});
