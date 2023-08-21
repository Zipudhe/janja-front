import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    --font-family: "Space Mono";
    --text-md: 16px; // ptag for desktop
    --text-sm: 13px;
    --text-letter-spacing: 0.32px;
    --text-line-height: 160%;

    --header-xsm: 21px;
    --header-sm: 25px;
    --header-md: 34px;
    --header-lg: 40px;
    --header-xlg: 65px;
    --bold: 700;

    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`