import React from 'react';
import styled from 'styled-components';
import { Login, Logo } from '../lv1/_index';

type Props = {
  setQuizOpen: (param: boolean) => void;
  setSelectedQuizTitle: (param: string | null) => void;
  setCategoryOpen: (param: boolean) => void;
  setScoreOpen: (param: boolean) => void;
};

//Portalで管理
const Header: React.VFC = ({
  setQuizOpen,
  setSelectedQuizTitle,
  setCategoryOpen,
  setScoreOpen,
}: Props) => {
  return (
    <Style>
      <Logo
        setQuizOpen={setQuizOpen}
        setSelectedQuizTitle={setSelectedQuizTitle}
        setCategoryOpen={setCategoryOpen}
        setScoreOpen={setScoreOpen}
      />
      <Login>login</Login>
    </Style>
  );
};

export default Header;

const Style = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  height: 50px;
  width: 100%;
  line-height: 50px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  /* color: #007224; */
  color: #004a6d;
  margin-bottom: 5px;
  box-shadow: 0 1px 1px rgba(160, 166, 179, 0.3);
`;
