import { styled } from "Src/stitches.config";

export const PaginationItem = styled("li", {
  borderRadius: "0.5rem",
  cursor: "pointer",
  display: "grid",
  gridTemplateColumns: "1fr",
  gridTemplateRows: "1fr",
  placeItems: "center",
  color: "$gray700",
});
