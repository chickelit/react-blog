import { styled } from "Src/stitches.config";
import { PaginationItem } from "../PaginationItem";

export const StyledPageNumber = styled(PaginationItem, {
  variants: {
    "hasBackground": {
      true: {
        background: "$gray50",
      },
    },
  },
  a: {
    fontWeight: 500,
    fontSize: "0.875rem",
    color: "$gray800",
    textAlign: "center",
  },
});
