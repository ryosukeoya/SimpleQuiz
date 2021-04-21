//quiz-react-typescript.web.app
import React, { useState } from 'react';
import Header from './components/lv3/Header';
import Categorys from './components/lv3/Categorys';
import Score from './components/lv1/Score';

const App: React.VFC = () => {
  const [quizOpen, setQuizOpen] = useState(false);
  const [categorysOpen, setCategoryOpen] = useState(true);
  const [scoreOpen, setScoreOpen] = useState(false);

  return (
    <>
      <Header
        setQuizOpen={setQuizOpen}
        setCategoryOpen={setCategoryOpen}
        setScoreOpen={setScoreOpen}
      />
      <Categorys
        quizOpen={quizOpen}
        setQuizOpen={setQuizOpen}
        categoryOpen={categorysOpen}
        setCategoryOpen={setCategoryOpen}
        setScoreOpen={setScoreOpen}
      />
      <Score scoreOpen={scoreOpen} />
    </>
  );
};

export default App;
