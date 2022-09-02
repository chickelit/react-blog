import { NavLink } from "react-router-dom";
import { Button } from "../Button";
import { Container } from "../Container";
import { Input } from "../Input";
import {
  StyledHeader,
  SupportingText,
  EmailCapture,
  Grid,
  Heading,
  InputContainer,
} from "./styles";

export const Header: React.FC = () => {
  return (
    <StyledHeader>
      <Container>
        <Grid>
          <SupportingText>
            <Heading>
              <p className="sub-heading">Resources</p>
              <h2 className="title">Vite blog</h2>
            </Heading>
            <p className="subtitle">
              Tool and strategies modern teams need to help their companies
              grow.
            </p>
          </SupportingText>
          <EmailCapture>
            <InputContainer>
              <Input placeholder="Enter your email" />
              <p>
                <span>We care about your data in our </span>
                <NavLink to="/">privacy policy</NavLink>.
              </p>
            </InputContainer>
            <Button paddingSize="big">Get started</Button>
          </EmailCapture>
        </Grid>
      </Container>
    </StyledHeader>
  );
};
