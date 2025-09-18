import { Routes, Route, Outlet } from "react-router-dom";
import PostList from "../pages/PostList";
import PostDetail from "../pages/PostDetail";
import PostWrite from "../pages/PostWrite";
import * as S from "../styles/Layout";

function Layout() {
  return (
    <S.Container>
      <S.NavWrap>
        <S.Gap />
        <S.LinkBtn to="/">목록</S.LinkBtn>
        <S.LinkBtn to="/write">글쓰기</S.LinkBtn>
      </S.NavWrap>
      <Outlet />
    </S.Container>
  );
}

export default function Router() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<PostList />} />
        <Route path="/posts/:id" element={<PostDetail />} />
        <Route path="/write" element={<PostWrite />} />
        <Route path="/edit/:id" element={<PostWrite />} />
      </Route>
    </Routes>
  );
}
