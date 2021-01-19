import React from 'react';
import Login from './Login';
import Logo from './Logo';
import styled from 'styled-components';

const Header: React.FC = () => {
  return (
    <Style>
      <Logo />
      <Login />
    </Style>
  );
};

export default Header;

const Style = styled.header`
  display: flex;
  justify-content: space-between;
  padding-left: 50%;
  font-size: 20px;
  color: white;
  padding: 10px 0;
  background-color: blue;
  margin-bottom: 5px;
`;
