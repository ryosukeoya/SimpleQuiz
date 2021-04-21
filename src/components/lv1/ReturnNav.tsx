import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { questionClose } from '../../actions';

type Props = {
  setQuizOpen: (param: boolean) => void;
};

const ReturnNav: React.VFC = ({ setQuizOpen }: Props) => {
  const questionOpenState = useSelector((state) => state.questionOpenState);
  if (questionOpenState) {
    return null;
  }

  const element = '< カテゴリ一覧へ';

  return (
    <div>
      <Style
        onClick={() => {
          setQuizOpen(false);
        }}
      >
        {element}
      </Style>
    </div>
  );
};

export default ReturnNav;

const Style = styled.div`
  color: #2c8fd1;
  text-decoration: underline;
  margin-top: 8px;
  cursor: pointer;
`;
