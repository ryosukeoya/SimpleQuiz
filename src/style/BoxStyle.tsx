import styled from 'styled-components';
import customMedia from './customMedia';

const BoxStyle = styled.div`
  display: flex;
  padding: 15px 8px;
  border-radius: 4px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14),
    0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  background-color: white;
  cursor: pointer;
  &:hover {
    background-color: #fafafa;
  }

  //スマホ
  ${customMedia.lessThan('mobile')`
    /* screen width is less than 599px (tablet) */
    margin: 7px 0;
  `}

  //タブレット
  ${customMedia.between('mobile', 'tablet')`
    /* screen width is between 599px (tablet) and 1024px (desktop) */
    width:70%;
    margin:0 auto;
    margin: 1.6vh 3vw;
    padding: 20px 11px;
  `}
  //PC
  ${customMedia.greaterThan('tablet')`
    /* screen width is greater than 1024px (tablet) */
    // margin: 1.6vh 4vw;
    width:70%;
    margin:0 auto;
    margin-bottom:1.6vh;
    max-width:1550px;
    padding: 23px 16px;
  `}
`;

export default BoxStyle;
