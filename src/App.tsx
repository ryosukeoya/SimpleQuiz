//quiz-react-typescript.web.app
import React, { useState } from 'react';
import Header from './components/Header';
import Question from './components/Question';
import Quiz from './components/Quiz';
import Style from './style/Style';
import computer from './images/computer.jpg';
import finance from './images/finance.jpg';
import game2 from './images/game2.jpg';
import history from './images/history.jpg';
import Ggg from './components/modal/Modal';

const App: React.FC = () => {
  const [title, setTitle] = useState('title');
  const [quizOpen, setQuizOpen] = useState(true);
  const [questionOpen, setQuestionOpen] = useState(false);
  const [state, setState] = useState('Computer');
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

  return (
    <>
      <Header backTop={backTop} />
      <Style>
        <Quiz
          titleName={'Computer Science'}
          image={computer}
          quizOpen={quizOpen}
          backTop={backTop}
          quizStart={quizStart}
          rename={rename}
        />
        <Quiz
          titleName={'Finance'}
          image={finance}
          quizOpen={quizOpen}
          backTop={backTop}
          quizStart={quizStart}
          rename={rename}
        />
        <Quiz
          titleName={'Game'}
          image={game2}
          quizOpen={quizOpen}
          backTop={backTop}
          quizStart={quizStart}
          rename={rename}
        />
        <Quiz
          titleName={'History'}
          image={history}
          quizOpen={quizOpen}
          backTop={backTop}
          quizStart={quizStart}
          rename={rename}
        />
        <Question
          questionOpen={questionOpen}
          title={title}
          text={text}
          backTop={backTop}
        />
      </Style>
    </>
  );
};

export default App;
