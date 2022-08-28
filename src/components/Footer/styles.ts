import { styled } from "Src/stitches.config";

export const Wrapper = styled("div", {
  padding: "0 2rem",
  display: "grid",
  gridTemplateColumns: "max-content max-content",
  justifyContent: "space-between",
  alignItems: "center",
  p: {
    height: "max-content",
    typography: "text-md-normal",
    color: "$gray400",
  },
});

export const StyledFooter = styled("footer", {
  background: "$gray800",
  color: "white",
  height: "4rem",
  display: "grid",
  gridTemplateRows: "1fr",
  alignItems: "center",
  "@max1024": {
    [`& ${Wrapper}`]: {
      padding: "0 1rem",
    },
  },
  "@max480": {
    height: "7rem",
    [`& ${Wrapper}`]: {
      gridTemplateColumns: "1fr",
      gridTemplateRows: "max-content max-content",
      gap: "1rem",
      alignItems: "center",
    },
  },
});
