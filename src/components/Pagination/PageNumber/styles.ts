import { styled, theme } from "Src/stitches.config";
import { PaginationItem } from "../PaginationItem";

export const StyledPageNumber = styled(PaginationItem, {
  variants: {
    "hasBackground": {
      true: {
        background: theme.colors.$gray50.value,
      },
    },
  },
  a: {
    fontWeight: 500,
    fontSize: "0.875rem",
    color: theme.colors.$gray800.value,
    textAlign: "center",
  },
});
