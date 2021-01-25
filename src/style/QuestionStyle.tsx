import styled from 'styled-components';
import customMedia from './customMedia';

const QuestionStyle = styled.div`
  display: flex;
  margin: 5px 50px;
  padding: 8px;
  border-radius: 4px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  background-color: white;
  cursor: pointer;

  //スマホ
  ${customMedia.lessThan('mobile')`
    /* screen width is less than 768px (tablet) */
    margin: 5px 0px;
  `}

  //タブレット
  ${customMedia.between('mobile', 'tablet')`
    /* screen width is between 768px (tablet) and 1170px (desktop) */
    margin: 5px 20px;
  `}
  //PC
  ${customMedia.greaterThan('desktop')`
    /* screen width is greater than 1170px (desktop) */
    margin: 5px 50px;
  `}
`;

export default QuestionStyle;
