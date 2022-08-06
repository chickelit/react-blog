import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { InputHTMLAttributes } from "react";
import { StyledSearchInput, SearchButton } from "./styles";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {}

export function SearchInput(props: IProps) {
  return (
    <StyledSearchInput>
      <SearchButton>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </SearchButton>
      <input {...props} />
    </StyledSearchInput>
  );
}
