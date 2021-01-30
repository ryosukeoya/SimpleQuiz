import React, { useState } from 'react';
import styled, { css } from 'styled-components';

interface Props {
  getText: () => string;
  data: any;
  answerClicked: boolean;
}

type Color = {
  blue?: boolean;
};

const Style = styled.div<Color>`
  padding: 10px;
  margin-bottom: 5px;
  background-color: white;
  color: #1976d2;
  border: 0.7px solid rgba(82, 83, 85, 0.3);

  //stateのblue(引数のblue)がtrueだったら
  ${({ blue }) =>
    blue
      ? css`
          background-color: #1976d2;
          color: white;
        `
      : ''}
`;

// const Style = styled.div<Color>`
//   padding: 10px;
//   margin-bottom: 5px;
//   background-color: white;
//   color: #1976d2;
//   border: 0.7px solid rgba(82, 83, 85, 0.3);

//   //stateのblue(引数のblue)がtrueだったら
//   ${({ blue }) =>
//     blue
//       ? css`
//           background-color: #1976d2;
//           color: white;
//         `
//       : ''}
// `;

const QuestionAnswer: React.FC<Props> = ({
  getText,
  data,
  ansClicked,
  setAnsClicked,
}) => {
  const [blue, setBlue] = useState(false);

  const setAnswerClicked = (): void => {
    if (ansClicked === false) {
      setAnsClicked(!ansClicked);
    } else if (blue === true) {
      setBlue(!blue);
      setAnsClicked(!ansClicked);
    }
  };
  //   console.log(ansClicked);
  console.log(blue);
  if (ansClicked === true) {
    return (
      <Style onClick={() => setAnswerClicked()} blue={blue}>
        {data}
      </Style>
    );
  } else {
    return (
      <div>
        <Style
          onClick={() => {
            setAnswerClicked();
            setBlue(!blue);
          }}
          blue={blue}
        >
          {data}
        </Style>
      </div>
    );
  }
};

export default QuestionAnswer;
