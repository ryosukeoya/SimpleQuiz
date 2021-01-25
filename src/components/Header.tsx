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
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  color: #2c8fd1;
  padding: 10px 0;
  margin-bottom: 5px;
  box-shadow: 0 1px 1px rgba(160, 166, 179, 0.3);
`;
