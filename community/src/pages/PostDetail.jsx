import { useParams } from "react-router-dom";
import * as S from "../styles/PostDetail";

const STORAGE_KEY = "myPosts";

export default function PostDetail() {
  const { id } = useParams();

  const storedPost = localStorage.getItem(STORAGE_KEY);
  const posts = storedPost ? JSON.parse(storedPost) : [];
  const post = posts.find((p) => String(p.id) === String(id));

  return (
    <>
      <S.Title>{post.title}</S.Title>
      <S.Divider />
      <S.Article>{post.content}</S.Article>
    </>
  );
}
