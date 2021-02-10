import React, { useState } from 'react';
import datas from '../dataset';
import Question from './Question';
import Quiz from './Quiz';
import TitleQuiz from './TitleQuiz';
import styled from 'styled-components';
import { Computer, Finance, Game, History } from '../images/CategoryImage';
import FF from '../images/FF.jpg';

const Quizs = ({ categoryClose, selectCategoryTitle }) => {
  const [QuizTitle, setQuizTitle] = useState('title');
  const [quizsOpen, setQuizsOpen] = useState(false);
  const [questionOpen, setQuestionOpen] = useState(false);
  const [quizOpen, setQuizOpen] = useState(true);
  const [categoryTitle, setCategoryTitle] = useState('categoryTitle');
  const [text, setText] = useState(null);

  if (!categoryClose) {
    return null;
  }
  const backTop = (): void => {
    setQuizOpen(true);
    setQuestionOpen(false);
  };

  const quizStart = (): void => {
    setQuizOpen(false);
    setQuestionOpen(true);
  };
  const getImage = () => {
    if (selectCategoryTitle === 'Computer') {
      const image = [Computer];
      return image;
    } else if (selectCategoryTitle === 'Finance') {
      const image = [Finance];
      return image;
    } else if (selectCategoryTitle === 'Game') {
      const image = [FF, Game];
      return image[i];
    } else if (selectCategoryTitle === 'History') {
      const image = [History];
      return image;
    }
  };

  let i = -1;

  return (
    <>
      <TitleQuiz />
      <Style>
        {Object.keys(datas[selectCategoryTitle]).map((data) => {
          i++;
          return (
            <Quiz
              key={data.toString()}
              titleName={data}
              image={getImage()}
              quizOpen={quizOpen}
              quizStart={quizStart}
            />
          );
        })}
      </Style>
      <Question
        categoryTitle={categoryTitle}
        questionOpen={questionOpen}
        QuizTitle={QuizTitle}
        text={text}
      />
    </>
  );
};

export default Quizs;

const Style = styled.div``;
