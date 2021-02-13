import React from 'react';

interface Props {
  getQuizData: () => any;
  selectAnsIndex: number;
}

const ModalText: React.FC = ({ getQuizData, selectAnsIndex }: Props) => {
  //indexから判定ver []
  const getExplain = () => {
    const explain = getQuizData().explain[selectAnsIndex];
    console.log(getQuizData().explain);
    console.log(selectAnsIndex);
    return explain;
  };

  // 名前から判定ver {}
  //   const getExplain = () => {
  //     const explain = getQuizData().explain;
  //     return explain[selectAnswer];
  //   };

  return <div style={{ color: 'black' }}>{getExplain()}</div>;
};

export default ModalText;
