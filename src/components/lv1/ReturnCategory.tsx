import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

interface Props {
  setQuizOpen: Function;
}

const ReturnCategory = ({ setQuizOpen }: Props) => {
  const questionOpenState = useSelector((state) => state.questionOpenState);
  if (questionOpenState) {
    return null;
  }

  return (
    <div>
      <Style
        onClick={() => {
          setQuizOpen(false);
        }}
      >
        カテゴリ一覧へ
      </Style>
    </div>
  );
};

export default ReturnCategory;

const Style = styled.div`
  color: #2c8fd1;
  text-decoration: underline;
  margin-top: 8px;
  cursor: pointer;
`;
