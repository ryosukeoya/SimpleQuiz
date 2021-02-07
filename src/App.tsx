//quiz-react-typescript.web.app
import React, { useState } from 'react';
import Header from './components/Header';
import Question from './components/Question';
import Quiz from './components/Quiz';
import Style from './style/Style';
import Computer from './images/computer.jpg';
import Finance from './images/finance.jpg';
import Game from './images/game2.jpg';
import History from './images/history.jpg';
import datas from './dataset';

const App: React.FC = () => {
  const [title, setTitle] = useState('title');
  const [quizOpen, setQuizOpen] = useState(true);
  const [questionOpen, setQuestionOpen] = useState(false);
  const [text, setText] = useState(null);

  const backTop = (): void => {
    setQuizOpen(true);
    setQuestionOpen(false);
  };

  const quizStart = (): void => {
    setQuizOpen(false);
    setQuestionOpen(true);
  };

  //titleNameでstateのtitleを変更
  const rename = (name: string): void => {
    setTitle(name);
  };

  const changeText = (texta: string): void => {
    setText(texta);
  };

  const image = [Computer, Finance, Game, History];
  let i = -1;

  return (
    <>
      <Header backTop={backTop} />
      <Style>
        {Object.keys(datas).map((data) => {
          i++;
          return (
            <Quiz
              key={data.toString()}
              titleName={data}
              image={image[i]}
              quizOpen={quizOpen}
              quizStart={quizStart}
              rename={rename}
            />
          );
        })}
        <Question questionOpen={questionOpen} title={title} text={text} backTop={backTop} />
      </Style>
    </>
  );
};

export default App;
