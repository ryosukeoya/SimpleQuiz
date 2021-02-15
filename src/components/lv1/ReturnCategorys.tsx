import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

interface Props {
  setQuizOpen: Function;
}

const ReturnCategorys = ({ setQuizOpen }: Props) => {
  const questionOpenState = useSelector((state) => state.questionOpenState);
  if (questionOpenState) {
    return null;
  }
  const element = '< カテゴリ一覧へ';

  return (
    <div>
      <Style
        onClick={() => {
          setQuizOpen(false);
        }}
      >
        {element}
      </Style>
    </div>
  );
};

export default ReturnCategorys;

const Style = styled.div`
  color: #2c8fd1;
  text-decoration: underline;
  margin-top: 8px;
  cursor: pointer;
`;
