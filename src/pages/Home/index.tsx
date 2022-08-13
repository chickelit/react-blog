import { Navigation } from "Src/components/Navigation";
import { Header } from "Src/components/Header";
import { StyledContainer } from "./styles";
import { Sidebar } from "Src/components/Sidebar";
import { Posts } from "Src/components/Posts";

export function Home() {
  return (
    <div>
      <Navigation />
      <Header />
      <StyledContainer>
        <Sidebar />
        <Posts />
      </StyledContainer>
    </div>
  );
}
