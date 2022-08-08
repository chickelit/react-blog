import { styled } from "Src/stitches.config";
import { Container } from "../Container";

export const StyledContainer = styled(Container, {
  
})

export const StyledPosts = styled("section", {
  display: "grid",
  gridTemplateColumns: "27.5rem 27.5rem",
  gap: "2rem 4rem",
});
