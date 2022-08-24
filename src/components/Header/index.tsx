import { Button } from "../Button";
import { Container } from "../Container";
import { Input } from "../Input";
import { StyledHeader, SupportingText, EmailCapture, Grid } from "./styles";

export const Header: React.FC = () => {
  return (
    <StyledHeader>
      <Container>
        <Grid>
          <SupportingText>
            <h2>Vite blog</h2>
            <p>
              Tool and strategies modern teams need to help their companies
              grow.
            </p>
          </SupportingText>
          <EmailCapture>
            <Input placeholder="Enter your email" />
            <Button>Get started</Button>
          </EmailCapture>
        </Grid>
      </Container>
    </StyledHeader>
  );
}
