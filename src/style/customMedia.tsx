import styled from 'styled-components'; // You need this as well
import { generateMedia } from 'styled-media-query';

//breakpointの設定
const customMedia = generateMedia({
  desktop: '1025px',
  tablet: '1024px',
  mobile: '599px',
});

export default customMedia;
