//quiz-react-typescript.web.app
import React from 'react';
import Header from './components/Header';
import Question1 from './components/Question1';
import Question2 from './components/Question2';
import Question3 from './components/Question3';
import Question4 from './components/Question4';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Question1 />
      <Question2 />
      <Question3 />
      <Question4 />
    </>
  );
};

export default App;
