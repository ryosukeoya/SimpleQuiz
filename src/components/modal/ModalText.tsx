import React from 'react';

interface Props {
  getData: (title: string) => any;
  selectAnsIndex: number;
  title: string;
}

const Text: React.FC = ({ getData, selectAnsIndex, title }: Props) => {
  //indexから判定ver []
  const getExplain = () => {
    const explain = getData(title).explain[selectAnsIndex];
    console.log(getData(title).explain);
    console.log(selectAnsIndex);
    return explain;
  };

  // 名前から判定ver {}
  //   const getExplain = () => {
  //     const explain = getData().explain;
  //     return explain[selectAnswer];
  //   };

  return <div style={{ color: 'black' }}>{getExplain()}</div>;
};

export default Text;
