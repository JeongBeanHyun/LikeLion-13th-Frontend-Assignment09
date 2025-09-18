// Layout.js

import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  max-width: 720px;
  margin: 24px auto;
  padding: 0 12px;
`;

export const NavWrap = styled.nav`
  margin-top: 20px;
  display: flex;
  gap: 12px;
`;

export const Gap = styled.div`
  margin-left: auto;
`;

export const LinkBtn = styled(Link)`
  text-decoration: none;
  color: #b57f7f;
  border: 1px solid #ccc;
  padding: 6px 10px;
  border-radius: 10px;
  background: #fff;
  &:hover {
    background: #eee;
  }
`;
