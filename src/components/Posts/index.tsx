import { BaseHTMLAttributes } from "react";
import { Post } from "./Post";
import { posts } from "./posts";
import { StyledPosts } from "./styles";

export function Posts(props: BaseHTMLAttributes<HTMLElement>) {
  return (
    <StyledPosts {...props}>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </StyledPosts>
  );
}
