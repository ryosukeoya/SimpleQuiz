import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { questionClose, correctClear } from '../../actions';
import customMedia from '../../style/customMedia';

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
  //スマホ
  ${customMedia.lessThan('mobile')`
    /* screen width is less than 599px (tablet) */
  `}

  //タブレット
  ${customMedia.between('mobile', 'tablet')`
    /* screen width is between 599px (tablet) and 1024px (desktop) */
    width:90%;
    margin:0 auto;
  `}
  //PC
  ${customMedia.greaterThan('tablet')`
    /* screen width is greater than 1024px (tablet) */
    // margin: 1.6vh 4vw;
    width:90%;
    margin:0 auto;
  `}
`;
