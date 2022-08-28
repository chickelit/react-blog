import { NavLink } from "react-router-dom";
import { styled } from "Src/stitches.config";

export const StyledPost = styled("div", {
  width: "100%",
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: "2rem",
});

export const CoverContainer = styled("div", {
  position: "relative",
  width: "100%",
  aspectRatio: "3 / 2",
  display: "grid",
  gridTemplateColumns: "1fr",
  gridTemplateRows: "1fr",
});

export const Cover = styled("img", {
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

export const LabelContainer = styled("div", {
  position: "absolute",
  bottom: 0,
  height: "5.5rem",
  width: "100%",
  background:
    "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 100%)",
  borderTop: "1px solid rgba(255, 255, 255, 0.5)",
  backdropFilter: "blur(24px)",
  padding: "0 1.5rem",
  display: "grid",
  alignItems: "center",
});

export const Label = styled("div", {
  "p.author": {
    color: "$white",
    typography: "text-sm-semibold",
    gridArea: "author",
  },
  "p.created-at": {
    color: "$white",
    typography: "text-sm-normal",
    gridArea: "created-at",
  },
  "p.category": {
    color: "$white",
    typography: "text-sm-semibold",
    gridArea: "category",
  },
  display: "grid",
  gridTemplateColumns: "1fr max-content",
  gridTemplateRows: "max-content max-content",
  gridTemplateAreas: `"author category" "created-at ."`,
  alignItems: "center",
  justifyItems: "space-between",
});

export const Content = styled("div", {
  display: "grid",
  width: "100%",
  gap: "0.75rem",
  "h3.title": {
    typography: "display-xs-semibold",
  },
  "p.description": {
    color: "$gray500",
    typography: "text-md-normal",
  },
});

export const ReadPost = styled(NavLink, {
  typography: "text-md-semibold",
  color: "$primary700",
  display: "grid",
  gridTemplateColumns: "max-content max-content",
  gap: "0.875rem",
  alignItems: "center",
  ".icon": {
    transform: "rotate(-45deg)",
  },
});
