import React from 'react';
import styled from 'styled-components';

const Title = ({ categoryClose }) => {
  if (categoryClose) {
    return null;
  }
  return <Style>category</Style>;
};

export default Title;

const Style = styled.div`
  font-size: 1.3rem;
  text-align: center;
  color: #2c8fd1;
  margin-top: 60px;
  margin-bottom: 10px;
`;
