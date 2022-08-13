import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BaseHTMLAttributes } from "react";
import { StyledNavLink, StyledPagination } from "./styles";

export function Pagination(props: BaseHTMLAttributes<HTMLElement>) {
  return (
    <StyledPagination {...props}>
      <StyledNavLink to="">
        <FontAwesomeIcon icon={faArrowLeft} />
        <p>Previous</p>
      </StyledNavLink>
      <div>foo</div>
      <StyledNavLink to="">
        <p>Next</p>
        <FontAwesomeIcon icon={faArrowRight} />
      </StyledNavLink>
    </StyledPagination>
  );
}
