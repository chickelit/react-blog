import { styled } from "Src/stitches.config";
import { Button } from "../Button";

export const Wrapper = styled("div", {
  padding: "4rem",
  background: "$gray50",
  borderRadius: "1rem",
  display: "grid",
  gridTemplateColumns: "1fr max-content",
  gap: "2rem",
  "div.buttons": {
    width: "max-content",
    display: "grid",
    gridTemplateColumns: "max-content max-content",
    gap: "0.75rem",
    alignItems: "start",
  },
  h3: {
    typography: "display-sm-semibold",
    color: "$gray900",
  },
  p: {
    typography: "text-xl-normal",
    color: "$gray600",
  },
});

export const Heading = styled("div", {
  display: "grid",
  gap: "1rem",
});

export const StyledCTASection = styled("section", {
  padding: "0 2rem",
  "@max1024": {
    padding: "0 1rem",
    [`& ${Wrapper}`]: {
      padding: "2.5rem 1.5rem",
      gridTemplateColumns: "1fr",
      gridTemplateRows: "max-content max-content",
      "div.buttons": {
        width: "100%",
        gridTemplateColumns: "1fr",
        gridTemplateRows: "max-content max-content",
        [`& ${Button}`]: {
          width: "100%",
        },
      },
    },
  },
});
