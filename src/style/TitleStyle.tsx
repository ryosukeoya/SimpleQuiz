import styled from 'styled-components';
import customMedia from '../style/customMedia';

//TitleQuizとQuestionTitleとTitle
//↓消さないで！
// prettier-ignore
const TitleStyle = styled.div<{ color: string, fontSize: string, marginTop:string }>`
  margin-top:${(props) => props.marginTop};
  font-size: ${(props) => props.fontSize};
  text-align: center;
  color: ${(props) => props.color};
  margin-bottom: 10px;
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

export default TitleStyle;
