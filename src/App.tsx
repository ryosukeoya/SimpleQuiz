//quiz-react-typescript.web.app
import React, { useState } from 'react';
import Header from './components/Header';
import Question from './components/Question';
import Style from './style/Style';
import Quiz from './components/Quiz';
import computer from './images/computer.jpg';
import finance from './images/finance.jpg';
import game2 from './images/game2.jpg';
import history from './images/history.jpg';

const App: React.FC = () => {
  const [title, setTitle] = useState('title');
  const [quizOpen, setQuizOpen] = useState(true);
  const [questionOpen, setQuestionOpen] = useState(false);

  const rename: React.FC = (name: string) => {
    setTitle(name);
    console.log(title);
  };

  const quizStart = () => {
    setQuizOpen(false);
    setQuestionOpen(true);
  };

  const top = () => {
    setQuizOpen(true);
    setQuestionOpen(false);
  };

  return (
    <>
      <Header />
      <Style>
        <Quiz
          rename={rename}
          titleName={'Computer Science'}
          image={computer}
          quizStart={quizStart}
          quizOpen={quizOpen}
          top={top}
        />
        <Quiz
          rename={rename}
          titleName={'Finance'}
          image={finance}
          quizStart={quizStart}
          quizOpen={quizOpen}
          top={top}
        />
        <Quiz
          rename={rename}
          titleName={'Game'}
          image={game2}
          quizStart={quizStart}
          quizOpen={quizOpen}
          top={top}
        />
        <Quiz
          rename={rename}
          titleName={'History'}
          image={history}
          quizStart={quizStart}
          quizOpen={quizOpen}
          top={top}
        />
        <Question top={top} questionOpen={questionOpen}/>
      </Style>
    </>
  );
};

export default App;
