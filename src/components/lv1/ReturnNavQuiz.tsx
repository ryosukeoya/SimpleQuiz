import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { questionClose, correctClear } from '../../actions';

type Props = {
  setQuestionNumber: (param: number) => void;
};

const ReturnNavQuiz: React.VFC<Props> = ({ setQuestionNumber }: Props) => {
  const dispatch = useDispatch();

  const element = '< クイズ一覧へ';
  return (
    <div>
      <Style
        onClick={() => {
          dispatch(questionClose());
          setQuestionNumber(0);
          dispatch(correctClear());
        }}
      >
        {element}
      </Style>
    </div>
  );
};

export default ReturnNavQuiz;

const Style = styled.div`
  color: #2c8fd1;
  text-decoration: underline;
  margin-top: 12px;
  cursor: pointer;
`;
