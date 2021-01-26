import React from 'react';

const Question = (props) => {
  if (!props.questionOpen) {
    return null;
  }

  return (
    <>
      <div>{props.question}</div>
      <button onClick={props.top}>トップに戻る</button>
    </>
  );
};
export default Question;
