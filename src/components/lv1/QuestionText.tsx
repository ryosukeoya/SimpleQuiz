import React from 'react';
import datas from '../../dataset';
import styled from 'styled-components';
import customMedia from '../../style/customMedia';

type Props = {
  getQuestion: () => string | null;
  questionNumber: number;
  selectedCategoryTitle: string;
  selectedQuizTitle: string;
};

const QuestionText: React.VFC<Props> = ({
  getQuestion,
  questionNumber,
  selectedCategoryTitle,
  selectedQuizTitle,
}: Props) => {
  return (
    <Style>
      <Q>Q{questionNumber + 1}, </Q>
      {datas[selectedCategoryTitle][selectedQuizTitle][questionNumber].question}
    </Style>
  );
};
export default QuestionText;

const Style = styled.header`
  font-size: 1.14rem;
  padding: 10px;
  margin-bottom: 9px;
  background-color: #fff;
  border: 0.7px solid rgba(82, 83, 85, 0.3);
  //スマホ
  ${customMedia.lessThan('mobile')`
 /* screen width is less than 599px (tablet) */

`} //タブレット
    ${customMedia.between('mobile', 'tablet')`
 /* screen width is between 599px (tablet) and 1024px (desktop) */
`} //PC
    ${customMedia.greaterThan('tablet')`
 /* screen width is greater than 1024px (tablet) */
  padding:30px;
  margin-bottom:23px;
`}
`;

const Q = styled.span`
  font-size: 1.6rem;
  color: blue;
`;
