import { Navigation } from "Src/components/Navigation";
import { Header } from "Src/components/Header";
import { MainSectionContainer, StyledHome, MainSection } from "./styles";
import { Categories } from "Src/components/CategorySidebar";
import { Posts } from "Src/components/Posts";

export function Home() {
  return (
    <StyledHome>
      <Navigation />
      <Header />
      <MainSectionContainer>
        <MainSection>
          <Categories />
          <Posts />
        </MainSection>
      </MainSectionContainer>
    </StyledHome>
  );
}
