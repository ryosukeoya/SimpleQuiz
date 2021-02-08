import React from 'react';

interface Props {
  getData: (title: string) => any;
  selectIndex: number;
  title: string;
}

const Text: React.FC = ({ getData, selectIndex, title }: Props) => {
  //indexから判定ver []
  const getExplain = () => {
    const explain = getData(title).explain[selectIndex];
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
