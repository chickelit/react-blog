import { Navigation } from "Src/components/Navigation";
import { Header } from "Src/components/Header";
import { StyledHome, MainSection } from "./styles";
import { Categories } from "Src/components/CategorySidebar";
import { Posts } from "Src/components/Posts";
import { Container } from "Src/components/Container";

export function Home() {
  return (
    <StyledHome>
      <Navigation />
      <Header />
      <Container>
        <MainSection>
          <Categories />
          <Posts />
        </MainSection>
      </Container>
    </StyledHome>
  );
}
