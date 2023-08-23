import styled from "styled-components";
import { HeaderText } from '../Typography/headerText'

export const HeaderWrapper = styled.section`
  display: inline-flex;
  align-items: center;
  padding: 12px;
  
  height: 10vh;
  max-height: 120px;
  min-height: 50px;
  width: 100%;


  @media screen and (max-width: 820px) {
    flex-direction: row-reverse;
    height: 15vh;
    justify-content: space-between;
  }
`

export const LinkWrapper = styled.div`
  display: inline-flex;
  justify-content: space-evenly;
  width: 100%;
`

export const Link = styled.a`
  font-size: 25px;
  line-height: 155%;
  letter-spacing: 1.5px;


  @media screen and (min-width: 821px) and (max-width: 980px) {
    font-size: var(--header-xsm);
  }

  @media screen and (max-width: 820px) {
    font-size: var(--text-md);
    text-decoration: underline;
  }

  :hover {
    text-decoration: underline;
  }
`

export const IconDiv = styled.div`
  max-height: 120px;
  max-width: 300px;
  width: 300px;
  height: 100%;

  background-color: purple;

  @media screen and (max-width: 820px) {
    width: 200px;
  }
`