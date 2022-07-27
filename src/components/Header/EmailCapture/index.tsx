import { Button } from "Src/components/Button";
import { Input } from "Src/components/Input";
import { StyledEmailCapture } from "./styles";

export function EmailCapture() {
  return (
    <StyledEmailCapture>
      <Input placeholder="Enter your email" />
      <Button>Get started</Button>
    </StyledEmailCapture>
  );
}
