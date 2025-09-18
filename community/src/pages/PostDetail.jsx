import { useNavigate, useParams } from "react-router-dom";
import * as S from "../styles/PostDetail";

const STORAGE_KEY = "myPosts";

export default function PostDetail() {
  const { id } = useParams();

  const storedPost = localStorage.getItem(STORAGE_KEY);
  const posts = storedPost ? JSON.parse(storedPost) : [];
  const post = posts.find((p) => String(p.id) === String(id));

  const navigate = useNavigate();

  const deletePost = (id) => {
    if (!window.confirm("정말 삭제하시겠어요?")) {
      return;
    }
    const nextPosts = posts.filter((p) => String(p.id) !== String(id));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(nextPosts));
    navigate(`/`);
  };

  return (
    <>
      <S.Title>{post.title}</S.Title>
      <S.Divider />
      <S.Article>{post.content}</S.Article>
      <button onClick={() => deletePost(id)} type="button">
        삭제
      </button>
    </>
  );
}
