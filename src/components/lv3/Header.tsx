import React from 'react';
import Login from '../lv1/Login';
import Logo from '../lv1/Logo';
import styled from 'styled-components';

type Props = {
  setQuizOpen: (param: boolean) => void;
  setSelectedQuizTitle: (param: string) => void;
};

//Portalで管理
const Header: React.VFC = ({ setQuizOpen, setSelectedQuizTitle }: Props) => {
  return (
    <Style>
      <Logo setQuizOpen={setQuizOpen} setSelectedQuizTitle={setSelectedQuizTitle} />
      <Login />
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
  color: #2c8fd1;
  margin-bottom: 5px;
  box-shadow: 0 1px 1px rgba(160, 166, 179, 0.3);
`;
