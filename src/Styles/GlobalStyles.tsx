import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  ${reset};
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;600;700;800;900&display=swap');
  body {
    font-family: 'Noto Sans KR';
    background-color: #F0F1F3;
    letter-spacing: 0.5px;
  }
  .MobileBar, .Modal {
    display: none;
  }
  @media screen and (max-width: 1024px) {
  .DesktopBar {
    display: none;
  }
  .MobileBar, .Modal {
    display: block;
  }
  }
`;

export default GlobalStyles;
