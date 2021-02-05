import React from 'react';

interface Props {
  getData: any;
  title: any;
  selectAnswer: any;
  selectIndex: any;
}

const Text: React.FC<Props> = ({
  getData,
  title,
  selectAnswer,
  selectIndex,
}) => {
  // selectAnswerが必要
  //   const getText = () => {
  //     console.log(selectAnswer);
  //     const explain = getData().explain;
  //     if (title === 'Computer') {
  //       if (selectAnswer === 'HTTP') {
  //         return explain.HTTP;
  //       } else if (selectAnswer === 'UDP') {
  //         return explain.UDP;
  //       } else if (selectAnswer === 'TCP') {
  //         return explain.TCP;
  //       } else {
  //         return explain.IP;
  //       }
  //     } else if (title === 'Finance') {
  //       if (selectAnswer === '名目金利＋物価上昇率') {
  //         return explain.plus;
  //       } else if (selectAnswer === '名目金利ー物価上昇率') {
  //         return explain.minus;
  //       } else if (selectAnswer === '平均賃金✖︎物価上昇率') {
  //         return explain.times;
  //       } else {
  //         return explain.divide;
  //       }
  //     } else if (title === 'Game') {
  //       if (selectAnswer === 'アーロン') {
  //         return explain.Auron;
  //       } else if (selectAnswer === 'クラウド') {
  //         return explain.Cloud;
  //       } else if (selectAnswer === 'ユウナ') {
  //         return explain.Yuna;
  //       } else {
  //         return explain.Tidus;
  //       }
  //     }
  //   };
  // 名前から判定ver {}
  //   const getSelect = () => {
  //     const explain = getData().explain;
  //     return explain[selectAnswer];
  //   };

  //indexから判定ver []
  const getSelect2 = () => {
    console.log(selectIndex);
    const explain = getData().explain[selectIndex];
    return explain;
  };

  //   return <div style={{ color: 'black' }}>{getText()}</div>;
  return <div style={{ color: 'black' }}>{getSelect2()}</div>;
};

export default Text;
