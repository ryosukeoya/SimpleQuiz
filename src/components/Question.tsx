import React from 'react';

interface Props {
  questionOpen: boolean;
  question: string;
  backTop: VoidFunction;
}

const Question: React.FC<Props> = ({ backTop, questionOpen, question }) => {
  if (!questionOpen) {
    return null;
  }

  return (
    <>
      <div>{question}</div>
      <button onClick={backTop}>トップに戻る</button>
    </>
  );
};
export default Question;
