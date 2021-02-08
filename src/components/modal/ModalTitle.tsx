import React from 'react';
import styled from 'styled-components';
import customMedia from '../../style/customMedia';

interface Props {
  modalTitle: string;
}

const ModalTitle = ({ modalTitle }: Props) => {
  return <Style>{modalTitle}</Style>;
};

export default ModalTitle;

const Style = styled.div`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;
