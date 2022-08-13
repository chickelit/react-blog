import { Navigation } from "Src/components/Navigation";
import { Header } from "Src/components/Header";
import { StyledContainer } from "./styles";
import { Sidebar } from "Src/components/Sidebar";
import { Posts } from "Src/components/Posts";
import { Pagination } from "Src/components/Pagination";

export function Home() {
  return (
    <div>
      <Navigation />
      <Header />
      <StyledContainer>
        <Sidebar id="sidebar" />
        <Posts id="posts" />
        <Pagination id="pagination" />
      </StyledContainer>
    </div>
  );
}
