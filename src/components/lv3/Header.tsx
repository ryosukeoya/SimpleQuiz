import React from 'react';
import styled from 'styled-components';
import { Logo } from '../lv1/_index';
import customMedia from '../../style/customMedia';

type Props = {
  setQuizOpen: (param: boolean) => void;
  setSelectedQuizTitle: (param: string) => void;
  setCategoryOpen: (param: boolean) => void;
};

const Header: React.VFC<Props> = ({ setQuizOpen, setSelectedQuizTitle, setCategoryOpen }: Props) => {
  return (
    <Style>
      <Logo setQuizOpen={setQuizOpen} setSelectedQuizTitle={setSelectedQuizTitle} setCategoryOpen={setCategoryOpen} />
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
  color: #004a6d;
  margin-bottom: 5px;
  box-shadow: 0 1px 1px rgba(160, 166, 179, 0.3);
  ${customMedia.lessThan('mobile')`
    /* screen width is less than 599px (tablet) */
  `}
  ${customMedia.between('mobile', 'tablet')`
    /* screen width is between 599px (tablet) and 1024px (desktop) */
  `}
  ${customMedia.greaterThan('tablet')`
    /* screen width is greater than 1024px (tablet) */
    height:58px;
    line-height:58px;
  `}
`;
