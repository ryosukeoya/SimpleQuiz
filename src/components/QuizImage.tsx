import React from 'react';
import styled from 'styled-components';
import customMedia from '../style/customMedia';

const QuizImage = (props) => {
  return <Style src={props.image} alt={props.titleName} />;
};

export default QuizImage;

const Style = styled.img`
  display: inline-block;
  height: 100px;
  width: 130px;
  //スマホ
  ${customMedia.lessThan('mobile')`
    /* screen width is less than 599px (tablet) */
  `}

  //タブレット
  ${customMedia.between('mobile', 'tablet')`
    /* screen width is between 599px (tablet) and 1024px (desktop) */
  `}
  //PC
  ${customMedia.greaterThan('tablet')`
    /* screen width is greater than 1024px (tablet) */
  `}
`;
