import React from 'react';
import ReactDom from 'react-dom';
import datas from './dataset';

//Portal index.html→portal

const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#FFF',
  padding: '50px',
  zIndex: 1000,
};

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zIndex: 1000,
};

export default function Modal({
  open,
  children,
  onClose,
  selectAnswer,
  title,
  getQuestion,
}) {
  if (!open) return null;
  const getData = (): string => {
    if (title === 'Computer Science') {
      return datas.Computer[0];
    } else if (title === 'Finance') {
      return datas.Finance[0];
    } else if (title === 'Game') {
      return datas.Game[0];
    } else {
      return datas.History[0];
    }
  };
  console.log(getData());
  console.log(getData().correct);
  console.log(selectAnswer);
  if (selectAnswer === getData().correct) {
    console.log('true');
    return ReactDom.createPortal(
      <>
        <div style={OVERLAY_STYLES} />
        <div style={MODAL_STYLES}>
          <button onClick={onClose}>次の問題へ</button>
          {children}
          <div>正解!</div>
        </div>
      </>,
      document.getElementById('portal')
    );
  } else {
    console.log('false');
    return ReactDom.createPortal(
      <>
        <div style={OVERLAY_STYLES} />
        <div style={MODAL_STYLES}>
          <button onClick={onClose}>次の問題へ</button>
          {children}
          <div>不正解!</div>
        </div>
      </>,
      document.getElementById('portal')
    );
  }

  // if (title === 'Computer Science') {
  //   console.log(datas.Computer[0].correct);
  //   if (selectAnswer === datas.Computer[0].correct) {
  //     console.log('true');
  //     return ReactDom.createPortal(
  //       <>
  //         <div style={OVERLAY_STYLES} />
  //         <div style={MODAL_STYLES}>
  //           <button onClick={onClose}>次の問題へ</button>
  //           {children}
  //           <div>正解!</div>
  //         </div>
  //       </>,
  //       document.getElementById('portal')
  //     );
  //   } else {
  //     console.log('false');
  //     return ReactDom.createPortal(
  //       <>
  //         <div style={OVERLAY_STYLES} />
  //         <div style={MODAL_STYLES}>
  //           <button onClick={onClose}>次の問題へ</button>
  //           {children}
  //           <div>不正解!</div>
  //         </div>
  //       </>,
  //       document.getElementById('portal')
  //     );
  //   }
  // } else {
  //   return null;
  // }
}
