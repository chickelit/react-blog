import { NavLink } from "react-router-dom";
import { StyledPageNumber } from "./styles";

interface IProps {
  hasBackground?: boolean
  number: number;
}

export function PageNumber(props: IProps) {
  return (
    <StyledPageNumber hasBackground={props.hasBackground}>
      <NavLink to="">{props.number}</NavLink>
    </StyledPageNumber>
  );
}
