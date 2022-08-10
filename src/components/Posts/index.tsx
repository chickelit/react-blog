import { Post } from "./Post";
import { posts } from "./posts";
import { StyledPosts } from "./styles";

export function Posts() {
  return (
    <StyledPosts>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </StyledPosts>
  );
}
