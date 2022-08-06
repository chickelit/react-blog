import { Container } from "Src/components/Container";
import { styled } from "Src/stitches.config";

export const StyledHome = styled("div", {});

export const MainSectionContainer = styled(Container, {});

export const MainSection = styled("section", {
  padding: "6rem 2rem",
  display: "grid",
  gridTemplateColumns: "17.5rem 1fr",
  gridTemplateRows: "1fr",
  gap: "4rem",
});
