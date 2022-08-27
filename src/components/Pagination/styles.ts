import { NavLink } from "react-router-dom";
import { styled, theme } from "Src/stitches.config";

export const PaginationButton = styled(NavLink, {
  border: theme.borderStyles.gray300.value,
  padding: "0.5rem 0.875rem",
  boxShadow: theme.shadows.xs.value,
  borderRadius: "0.5rem",
  fontWeight: 500,
  fontSize: "0.875rem",
  lineHeight: "1.25rem",
  color: theme.colors.$gray700.value,
  display: "grid",
  gridTemplateColumns: "max-content max-content",
  gap: "0.5rem",
  alignItems: "center",
});

export const Pages = styled("ul", {
  display: "grid",
  gridAutoColumns: "2.5rem",
  gridTemplateRows: "2.5rem",
  gridAutoFlow: "column",
  gap: "0.125rem",
});

export const CurrentPageLabel = styled("p", {
  color: theme.colors.$gray700.value,
  fontWeight: 400,
  fontSize: "0.875rem",
  lineHeight: "1.25rem",
});

export const StyledPagination = styled("nav", {
  width: "100%",
  borderTop: theme.borderStyles.gray200.value,
  padding: "1.25rem 0 0",
  display: "grid",
  gridTemplateColumns: "max-content 1fr max-content",
  justifyItems: "center",
  [`& ${CurrentPageLabel}`]: {
    display: "none",
  },
  "@max1024": {
    [`& ${PaginationButton}`]: {
      gridTemplateColumns: "1fr",
      p: {
        display: "none",
      },
    },
    [`& ${Pages}`]: {
      display: "none",
    },
    [`& ${CurrentPageLabel}`]: {
      display: "grid",
    },
  },
});
