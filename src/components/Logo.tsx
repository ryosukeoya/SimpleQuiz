import React from 'react';
import styled from 'styled-components';

const Logo: React.FC = () => {
  return (
    <Style>
      <div>QuizApp</div>
    </Style>
  );
};

export default Logo;

const Style = styled.header`
  padding-left: 50px;
  justify-content: center;
  font-size: 20px;
`;
