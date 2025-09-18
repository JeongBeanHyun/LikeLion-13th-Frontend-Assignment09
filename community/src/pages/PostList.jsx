import { useState } from "react";
import * as S from "../styles/PostList";

const STORAGE_KEY = "myPosts";

export default function PostList() {
  const [posts] = useState(() => {
    const storedPosts = localStorage.getItem(STORAGE_KEY);
    return storedPosts ? JSON.parse(storedPosts) : [];
  });

  return (
    <>
      <S.Title>게시글 목록</S.Title>
      <S.List>
        {posts.map((post) => (
          <S.Card key={post.id}>
            <S.CardLink to={`/posts/${post.id}`}>
              <S.CardTitle>{post.title}</S.CardTitle>
              <S.CardExcerpt>{post.content}</S.CardExcerpt>
            </S.CardLink>
          </S.Card>
        ))}
      </S.List>
    </>
  );
}
