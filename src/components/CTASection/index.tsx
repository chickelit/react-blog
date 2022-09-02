import { Button } from "../Button";
import { Container } from "../Container";
import { StyledCTASection, Wrapper, Heading } from "./styles";

export function CTASection() {
  return (
    <Container>
      <StyledCTASection>
        <Wrapper>
          <Heading>
            <h3>Start your 30-day free trial.</h3>
            <p>Join over 4,000+ startups already growing with Vite.</p>
          </Heading>
          <div className="buttons">
            <Button paddingSize="big">Get started</Button>
            <Button paddingSize="big" light bordered>
              Learn more
            </Button>
          </div>
        </Wrapper>
      </StyledCTASection>
    </Container>
  );
}
