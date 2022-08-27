import { styled } from "Src/stitches.config";

export const Container = styled("div", {
  padding: "0 5rem",
  display: "grid",
  gridTemplateColumns: "1fr",
  justifyContent: "center",
  "@max1024": {
    padding: "0",
  },
});
