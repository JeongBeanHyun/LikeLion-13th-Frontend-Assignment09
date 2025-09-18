// PostWrite.js

import styled from "styled-components";

export const Title = styled.h2`
  margin: 0 0 12px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Label = styled.label`
  display: block;
`;

export const LabelText = styled.div`
  margin-bottom: 6px;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  box-sizing: border-box;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #ccc;
  background: #fff;
  outline: none;
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 200px;
  box-sizing: border-box;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #ccc;
  background: #fff;
  outline: none;
  resize: vertical; /* 상하만 크기 조절 가능 */
`;

export const Button = styled.button`
  color: #b57f7f;
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #ccc;
  background: #fff;
  cursor: pointer;
  &:hover {
    background: #eee;
  }
`;
