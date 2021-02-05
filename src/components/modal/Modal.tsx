import React from 'react';
import Text from './Text';
import datas from '../../dataset';
import styled from 'styled-components';
import customMedia from '../../style/customMedia';
import './Modal.css';

interface Props {
  open: any;
  onClose: any;
  selectAnswer: any;
  title: any;
  getIndex: any;
  selectIndex: any;
}

const Modal: React.FC<Props> = ({
  open,
  onClose,
  selectAnswer,
  title,
  selectIndex,
}) => {
  if (!open) return null;

  const getData = () => {
    if (title === 'Computer') {
      return datas.Computer[0];
    } else if (title === 'Finance') {
      return datas.Finance[0];
    } else if (title === 'Game') {
      return datas.Game[0];
    } else {
      return datas.History[0];
    }
  };

  if (selectAnswer === getData().correct) {
    return (
      <OVERLAY_STYLES className="overlay_styles">
        <MODAL_STYLES className="modal_styles">
          <div>正解!</div>
          <Text
            getData={getData}
            title={title}
            selectAnswer={selectAnswer}
            selectIndex={selectIndex}
          />
          <button onClick={onClose}>次の問題へ</button>
        </MODAL_STYLES>
      </OVERLAY_STYLES>
    );
  } else {
    return (
      <OVERLAY_STYLES className="overlay_styles">
        <MODAL_STYLES className="modal_styles">
          <div>不正解!</div>
          <Text
            getData={getData}
            title={title}
            selectAnswer={selectAnswer}
            selectIndex={selectIndex}
          />
          <button onClick={onClose}>次の問題へ</button>
        </MODAL_STYLES>
      </OVERLAY_STYLES>
    );
  }
};

export default Modal;

const MODAL_STYLES = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 50px;
  z-index: 1000;
  color: red;
  /* transition-delay: 0.5s; */

  //スマホ
  ${customMedia.lessThan('mobile')`
    /* screen width is less than 599px (tablet) */
    height:50vh;
    width:90vw;
    padding: 0;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
  `}

  //タブレット
  ${customMedia.between('mobile', 'tablet')`
    /* screen width is between 599px (tablet) and 1024px (desktop) */
  `}
  //PC
  ${customMedia.greaterThan('tablet')`
    /* screen width is greater than 1024px (tablet) */
  `}
`;

const OVERLAY_STYLES = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
`;
