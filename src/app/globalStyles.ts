'use client';
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

    --background-color: #1B0000;
    --primary-color: #CFC6A3;
    --secondary-color: #0593DD;

    margin: 0;
    padding: 0;
    box-sizing: border-box;

    scroll-behavior: smooth;
  }

  main {
    width: 100vw;
    padding: 0 32px;
    max-width: 2000px;

    scroll-snap-type: y mandatory;
    background-color: var(--background-color);
  }

  section {
    padding: 16px;
  }
`