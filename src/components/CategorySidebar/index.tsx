import { SearchInput } from "../SearchInput";
import { CategoryList } from "./CategoryList";
import { StyledCategorySidebar } from "./styles";

export function Categories() {
  return (
    <StyledCategorySidebar>
      <SearchInput placeholder="Search" />
      <div className="container">
        <h3>Blog categories</h3>
        <CategoryList />
      </div>
    </StyledCategorySidebar>
  );
}
