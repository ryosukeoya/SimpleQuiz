//quiz-react-typescript.web.app
import React, { useState } from 'react';
import Header from './components/Header';
import Style from './style/Style';
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
      <Style>
        <Question
          rename={rename}
          titleName={'Computer Science'}
          image={computer}
        />
        <Question rename={rename} titleName={'Finance'} image={finance} />
        <Question rename={rename} titleName={'Game'} image={game2} />
        <Question rename={rename} titleName={'History'} image={history} />
      </Style>
    </>
  );
};

export default App;
