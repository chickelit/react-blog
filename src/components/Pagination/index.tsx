import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BaseHTMLAttributes } from "react";
import { PageNumber } from "./PageNumber";
import { PaginationItem } from "./PaginationItem";
import { CurrentPageLabel, Pages, PaginationButton, StyledPagination } from "./styles";

export function Pagination(props: BaseHTMLAttributes<HTMLElement>) {
  return (
    <StyledPagination {...props}>
      <PaginationButton to="">
        <FontAwesomeIcon icon={faArrowLeft} />
        <p>Previous</p>
      </PaginationButton>
      <CurrentPageLabel>Page 1 of 10</CurrentPageLabel>
      <Pages>
        <PageNumber number={1} hasBackground />
        <PageNumber number={2} />
        <PageNumber number={3} />
        <PaginationItem>...</PaginationItem>
        <PageNumber number={8} />
        <PageNumber number={9} />
        <PageNumber number={10} />
      </Pages>
      <PaginationButton to="">
        <p>Next</p>
        <FontAwesomeIcon icon={faArrowRight} />
      </PaginationButton>
    </StyledPagination>
  );
}
