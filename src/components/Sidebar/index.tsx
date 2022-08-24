import { BaseHTMLAttributes } from "react";
import { SearchInput } from "../SearchInput";
import { Category } from "./Category";
import { Categories, StyledSidebar, Grid } from "./styles";

export const Sidebar: React.FC<BaseHTMLAttributes<HTMLElement>> = (props) => {
  return (
    <StyledSidebar {...props}>
      <SearchInput placeholder="Search" />
      <Grid>
        <h3>Blog categories</h3>
        <Categories>
          <Category to="" theme="colorful">
            View all
          </Category>
          <Category to="">Design</Category>
          <Category to="">Product</Category>
          <Category to="">Software Development</Category>
          <Category to="">Customer Success</Category>
          <Category to="">Leadership</Category>
          <Category to="">Management</Category>
        </Categories>
      </Grid>
    </StyledSidebar>
  );
}
