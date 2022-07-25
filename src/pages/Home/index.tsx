import { Navigation } from "Src/components/Navigation";
import { Header } from "Src/components/Header";
import { StyledHome } from "./styles";

export function Home() {
  return (
    <StyledHome>
      <Navigation />
      <Header />
    </StyledHome>
  );
}
