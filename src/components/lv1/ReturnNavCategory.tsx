import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

type Props = {
  setQuizOpen: (param: boolean) => void;
};

const ReturnNavCategory: React.VFC<Props> = ({ setQuizOpen }: Props) => {
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

export default ReturnNavCategory;

const Style = styled.div`
  color: #2c8fd1;
  text-decoration: underline;
  margin-top: 12px;
  cursor: pointer;
`;
