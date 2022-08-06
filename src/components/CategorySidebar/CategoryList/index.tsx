import { Category } from "./Category";
import { StyledCategoryList } from "./styles";

export function CategoryList() {
  return (
    <StyledCategoryList>
      <Category highlighted>View all</Category>
      <Category>Design</Category>
      <Category>Product</Category>
      <Category>Software Development</Category>
      <Category>Customer Success</Category>
      <Category>Leadership</Category>
      <Category>Management</Category>
    </StyledCategoryList>
  );
}
