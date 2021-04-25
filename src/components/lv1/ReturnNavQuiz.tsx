import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { questionClose, correctClear } from '../../actions';

type Props = {
  setQuestionNumber: (param: number) => void;
  setSelectedQuizTitle: (param: string) => void;
};

const ReturnNavQuiz: React.VFC<Props> = ({ setQuestionNumber, setSelectedQuizTitle }: Props) => {
  const dispatch = useDispatch();

  const element = '< クイズ一覧へ';
  return (
    <div>
      <Style
        onClick={() => {
          dispatch(questionClose());
          setQuestionNumber(0);
          dispatch(correctClear());
          setSelectedQuizTitle('');
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
