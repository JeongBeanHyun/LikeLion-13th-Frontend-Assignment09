// PostList.js

import { Link } from "react-router-dom";
import styled from "styled-components";

export const Title = styled.h2`
  margin: 0 0 12px;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  gap: 12px;
`;

export const Card = styled.li`
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 12px;
`;

export const CardLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  display: block;
`;

export const CardTitle = styled.strong`
  font-size: 18px;
`;

export const CardExcerpt = styled.p`
  margin: 6px 0 0;
  color: #666;
`;
