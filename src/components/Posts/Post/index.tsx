import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IPost } from "Src/Models/Post";
import {
  Cover,
  CoverContainer,
  StyledPost,
  LabelContainer,
  Label,
  Content,
  ReadPost,
} from "./styles";

interface IProps {
  post: IPost;
}

export function Post({ post }: IProps) {
  return (
    <StyledPost>
      <CoverContainer>
        <Cover src={post.cover.url} />
        <LabelContainer>
          <Label>
            <p className="author">{post.author}</p>
            <p className="created-at">{post.createdAt.toLocaleDateString()}</p>
            <p className="category">{post.category}</p>
          </Label>
        </LabelContainer>
      </CoverContainer>
      <Content>
        <h3 className="title">{post.title}</h3>
        <p className="description">{post.description}</p>
      </Content>
      <ReadPost to="">
        <p>Read post</p>
        <FontAwesomeIcon className="icon" icon={faArrowRight} />
      </ReadPost>
    </StyledPost>
  );
}
