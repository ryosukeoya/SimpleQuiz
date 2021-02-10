import React from 'react';
import styled from 'styled-components';

interface Props {
  questionOpen: boolean;
  setQuestionOpen: Function;
  setQuizOpen: Function;
}

const ReturnCategory = ({ questionOpen, setQuestionOpen, setQuizOpen }) => {
  if (questionOpen) {
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
`;
