import styled from 'styled-components';

//TitleQuizとQuestionTitleとTitle
//↓消さないで！
// prettier-ignore
const TitleStyle = styled.div<{ color: string, fontSize: string, marginTop:string }>`
  margin-top:${(props) => props.marginTop};
  font-size: ${(props) => props.fontSize};
  text-align: center;
  color: ${(props) => props.color};
  margin-bottom: 10px;
`;

export default TitleStyle;
