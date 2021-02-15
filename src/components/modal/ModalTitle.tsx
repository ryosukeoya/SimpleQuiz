import React from 'react';
import styled from 'styled-components';

interface Props {
  modalTitle: string;
}

const ModalTitle = ({ modalTitle }: Props) => {
  if (modalTitle === '正解！') {
    return <Style style={{ color: 'red' }}>{modalTitle}</Style>;
  } else {
    return <Style style={{ color: 'blue' }}>{modalTitle}</Style>;
  }
};

export default ModalTitle;

const Style = styled.div`
  font-size: 2rem;
  margin-bottom: 10px;
`;
