import React from 'react';
import styled from 'styled-components';

const Header: React.FC = () => {
  return (
    <Style>
      <div>Header</div>
    </Style>
  );
};

export default Header;

const Style = styled.header`
  text-align: center;
  font-size: 20px;
  color: white;
  padding: 10px 0;
  background-color: blue;
  margin-bottom: 5px;
`;
