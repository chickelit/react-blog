import { styled, theme } from "Src/stitches.config";

export const Grid = styled("div", {
  padding: "0 2rem",
  display: "grid",
  gridTemplateColumns: "max-content 1fr max-content",
  alignItems: "center",
  gap: "2.625rem",
});

export const Buttons = styled("div", {
  display: "grid",
  gridAutoColumns: "max-content",
  gridAutoFlow: "column",
  gap: "0.75rem",
});

export const NavItems = styled("ul", {
  display: "grid",
  gridAutoColumns: "max-content",
  gridAutoFlow: "column",
  gap: "2rem",
});

export const HamburgerButton = styled("button", {
  width: "1.125rem",
  aspectRatio: "1 / 1",
  color: "$gray700",
  cursor: "pointer",
  display: "none",
  svg: {
    width: "100%",
    height: "100%",
  },
});

export const StyledNavigation = styled("nav", {
  height: "5rem",
  borderBottom: theme.borderStyles.gray100.value,
  background: "$gray50",
  display: "grid",
  alignItems: "center",
  "@max1024": {
    height: "4.5rem",
    [`& ${Grid}`]: {
      padding: "0 1rem",
      display: "grid",
      gridTemplateColumns: "max-content max-content",
      alignItems: "center",
      justifyItems: "space-between",
      justifyContent: "space-between",
      [`& ${NavItems}`]: { display: "none" },
      [`& ${Buttons}`]: { display: "none" },
      [`& ${HamburgerButton}`]: { display: "grid" },
    },
  },
});
