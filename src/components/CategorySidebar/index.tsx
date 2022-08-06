import { SearchInput } from "../SearchInput";
import { Category } from "./Category";
import { StyledCategoryList, StyledCategorySidebar } from "./styles";

export function Categories() {
  return (
    <StyledCategorySidebar>
      <SearchInput placeholder="Search" />
      <div className="container">
        <h3>Blog categories</h3>
        <StyledCategoryList>
          <Category to="" highlighted>View all</Category>
          <Category to="">Design</Category>
          <Category to="">Product</Category>
          <Category to="">Software Development</Category>
          <Category to="">Customer Success</Category>
          <Category to="">Leadership</Category>
          <Category to="">Management</Category>
        </StyledCategoryList>
      </div>
    </StyledCategorySidebar>
  );
}
