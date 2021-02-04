import React from 'react';

interface Props {
  getData: any;
  title: any;
  selectAnswer: any;
}

const Text: React.FC<Props> = ({ getData, title, selectAnswer }) => {
  // selectAnswerが必要
  const getText = () => {
    console.log(selectAnswer);
    const explain = getData().explain;
    if (title === 'Computer Science') {
      if (selectAnswer === 'HTTP') {
        return explain.HTTP;
      } else if (selectAnswer === 'UDP') {
        return explain.UDP;
      } else if (selectAnswer === 'TCP') {
        return explain.TCP;
      } else {
        return explain.IP;
      }
    } else if (title === 'Finance') {
      if (selectAnswer === '名目金利＋物価上昇率') {
        return explain.plus;
      } else if (selectAnswer === '名目金利ー物価上昇率') {
        return explain.minus;
      } else if (selectAnswer === '平均賃金✖︎物価上昇率') {
        return explain.times;
      } else {
        return explain.divide;
      }
    }
  };
  return <div style={{ color: 'black' }}>{getText()}</div>;
};

export default Text;
