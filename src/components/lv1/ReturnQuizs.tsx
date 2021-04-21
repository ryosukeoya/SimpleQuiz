import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { questionClose } from '../../actions';

type Props = {
  setQuestionNumber: (param: number) => void;
  setSelectedQuizTitle: (param: string | null) => void;
};

const ReturnQuizs: React.VFC = ({ setQuestionNumber, setSelectedQuizTitle }: Props) => {
  const dispatch = useDispatch();

  const element = '< クイズ一覧へ';

  return (
    <div>
      <Style
        onClick={() => {
          setSelectedQuizTitle(null);
          setQuestionNumber(0);
          dispatch(questionClose());
        }}
      >
        {element}
      </Style>
    </div>
  );
};

export default ReturnQuizs;

const Style = styled.div`
  color: #2c8fd1;
  text-decoration: underline;
  margin-top: 8px;
  cursor: pointer;
`;
