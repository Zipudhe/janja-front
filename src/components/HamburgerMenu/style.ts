import styled from "styled-components";
import { Link } from '../NavigationMenu/style'

export const Wrapper = styled.div`
  width: 50px;
  height: 50px;

  .open {
    width: 150px;
    height: 300px;
    max-height: 300px;
    padding: 12px;
  }
`

export const DropDownMenu = styled.menu`
  display: grid;
  height: 0;
  width: 0;
  overflow: hidden;
  transition: height 200ms ease-in-out;

  flex-direction: column;
  gap: 15px;
  
  max-width: 200px;
  min-height: 0;
  max-height: 400px;


  position: relative;
  top: 4vh;
  left: -12px;

  background-color: black;
  border-radius: 8px;
  opacity: 0.85;
`

export const DropDownLink = styled(Link)``