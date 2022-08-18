import { Navigation } from "Src/components/Navigation";
import { Header } from "Src/components/Header";
import { Sidebar } from "Src/components/Sidebar";
import { Posts } from "Src/components/Posts";
import { Pagination } from "Src/components/Pagination";
import { Footer } from "Src/components/Footer";
import { Container } from "Src/components/Container";
import { Wrapper } from "./styles";

export function Home() {
  return (
    <div>
      <Navigation />
      <Header />
      <Container>
        <Wrapper>
          <Sidebar id="sidebar" />
          <Posts id="posts" />
          <Pagination id="pagination" />
        </Wrapper>
      </Container>
      <Footer />
    </div>
  );
}
