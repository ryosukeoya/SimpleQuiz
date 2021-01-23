//quiz-react-typescript.web.app
import React, { useState } from 'react';
import Header from './components/Header';
import Question1 from './components/Question1';
import Question2 from './components/Question2';
import Question3 from './components/Question3';
import Question4 from './components/Question4';
import Question from './components/Question';
import computer from './images/computer.jpg';
import finance from './images/finance.jpg';
import game2 from './images/game2.jpg';
import history from './images/history.jpg';

const App: React.FC = () => {
  const [title, setTitle] = useState('title');

  const rename: React.FC = (name: string) => {
    setTitle(name);
    console.log(title);
  };

  return (
    <>
      <Header />
      <Question
        rename={rename}
        titleName={'Computer Science'}
        image={computer}
      />
      <Question rename={rename} titleName={'Finance'} image={finance} />
      <Question rename={rename} titleName={'Game'} image={game2} />
      <Question rename={rename} titleName={'History'} image={history} />
    </>
  );
};

export default App;
