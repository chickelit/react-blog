import { NavLink } from "react-router-dom";
import { styled, theme } from "Src/stitches.config";

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
  gridTemplateColumns: "1fr max-content",
  alignItems: "center",
  justifyItems: "space-between",
});

export const Label = styled("div", {
  "p.author": {
    color: theme.colors.$white.value,
    fontWeight: 600,
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
  },
  "p.created-at": {
    color: theme.colors.$white.value,
    fontWeight: 400,
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
  },
});

export const Category = styled("p", {
  color: theme.colors.$white.value,
  fontWeight: 600,
  fontSize: "0.875rem",
  lineHeight: "1.25rem",
});

export const Content = styled("div", {
  display: "grid",
  width: "100%",
  gap: "0.75rem",
  "h3.title": {
    fontWeight: 600,
    fontSize: "1.5rem",
    lineHeight: "2rem",
  },
  "p.description": {
    color: theme.colors.$gray500.value,
    fontWeight: 400,
    fontSize: "1rem",
    lineHeight: "1.5rem",
  },
});

export const ReadPost = styled(NavLink, {
  fontWeight: 500,
  fontSize: "1rem",
  lineHeight: "1.5rem",
  color: theme.colors.$primary700.value,
  display: "grid",
  gridTemplateColumns: "max-content max-content",
  gap: "0.875rem",
  alignItems: "center",
  ".icon": {
    transform: "rotate(-45deg)",
  },
});
