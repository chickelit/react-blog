import { Container } from "Src/components/Container";
import { styled } from "Src/stitches.config";

export const StyledContainer = styled(Container, {
  padding: "6rem 7rem",
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
