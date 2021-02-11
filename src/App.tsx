//quiz-react-typescript.web.app
import React, { useState } from 'react';
import Header from './components/Header';
import Categorys from './components/Categorys';

const App: React.FC = () => {
  const [quizOpen, setQuizOpen] = useState(false);

  return (
    <>
      <Header setQuizOpen={setQuizOpen} />
      <Categorys quizOpen={quizOpen} setQuizOpen={setQuizOpen} />
    </>
  );
};

export default App;
