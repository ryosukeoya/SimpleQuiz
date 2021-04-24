import React from 'react';

type Props = {
  getQuizData: () => any;
  selectAnsIndex: number;
};

const ModalText: React.VFC<Props> = ({ getQuizData, selectAnsIndex }: Props) => {
  //indexから判定ver []
  const getExplain = () => {
    const explain = getQuizData().explain[selectAnsIndex];
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
