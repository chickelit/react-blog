import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BaseHTMLAttributes } from "react";
import { PageNumber } from "./PageNumber";
import { PaginationItem } from "./PaginationItem";
import { Pages, StyledNavLink, StyledPagination } from "./styles";

export function Pagination(props: BaseHTMLAttributes<HTMLElement>) {
  return (
    <StyledPagination {...props}>
      <StyledNavLink to="">
        <FontAwesomeIcon icon={faArrowLeft} />
        <p>Previous</p>
      </StyledNavLink>
      <Pages>
        <PageNumber number={1} hasBackground />
        <PageNumber number={2} />
        <PageNumber number={3} />
        <PaginationItem>...</PaginationItem>
        <PageNumber number={8} />
        <PageNumber number={9} />
        <PageNumber number={10} />
      </Pages>
      <StyledNavLink to="">
        <p>Next</p>
        <FontAwesomeIcon icon={faArrowRight} />
      </StyledNavLink>
    </StyledPagination>
  );
}
