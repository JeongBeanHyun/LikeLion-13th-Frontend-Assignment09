import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "../styles/PostWrite";

const STORAGE_KEY = "myPosts";

export default function PostWrite() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      alert("제목을 입력해주세요!");
      return;
    }
    if (!content.trim()) {
      alert("내용을 입력해주세요!");
      return;
    }

    const storedPosts = localStorage.getItem(STORAGE_KEY);
    const posts = storedPosts ? JSON.parse(storedPosts) : [];

    const newPost = {
      id: Date.now(),
      title: title.trim(),
      content: content.trim(),
    };

    const nextPosts = [newPost, ...posts];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(nextPosts));

    navigate(`/posts/${newPost.id}`);
  };

  return (
    <>
      <S.Title>글쓰기</S.Title>
      <S.Form onSubmit={handleSubmit}>
        <S.Label>
          <S.LabelText>제목</S.LabelText>
          <S.Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="제목을 입력하세요"
          />
        </S.Label>
        <S.Label>
          <S.LabelText>내용</S.LabelText>
          <S.Textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="내용을 입력하세요"
            rows={8}
          />
        </S.Label>
        <S.Button type="submit">작성하기</S.Button>
      </S.Form>
    </>
  );
}
