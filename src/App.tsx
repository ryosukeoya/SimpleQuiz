//quiz-react-typescript.web.app
import React, { useState } from 'react';
import Header from './components/lv3/Header';
import Categorys from './components/lv3/Categorys';

const App: React.VFC = () => {
  const [quizOpen, setQuizOpen] = useState(false);

  return (
    <>
      <Header setQuizOpen={setQuizOpen} />
      <Categorys quizOpen={quizOpen} setQuizOpen={setQuizOpen} />
    </>
  );
};

export default App;
