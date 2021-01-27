import styled from 'styled-components';
import customMedia from './customMedia';

const ImageStyle = styled.img`
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

export default ImageStyle;
