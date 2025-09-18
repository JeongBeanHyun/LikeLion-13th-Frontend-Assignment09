// PostDetail.js
import styled from "styled-components";

export const Title = styled.h2`
  margin: 20 0 12px;
`;

export const Divider = styled.hr`
  width: 100%;
`;

export const Article = styled.p`
  white-space: pre-wrap;
  line-height: 1.6;
`;

export const Button = styled.button`
  background-color: #f59090ff;
  border-radius: 10px;
  color: #fff;
  text-decoration: none;
  border: 1px solid #ccc;
  padding: 6px 10px;
  border-radius: 10px;
  width: 15%;
  margin-left: 15px;
  &:hover {
    background: #c77676ff;
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
`;
