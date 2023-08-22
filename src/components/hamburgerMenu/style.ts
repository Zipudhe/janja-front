import styled from "styled-components";

// interface IDropDown {
//   open: boolean
// }

export const Wrapper = styled.div`
  width: 50px;
  height: 50px;

  .open {
    display: flex;
    width: 25vh;
    height: fit-content;
    max-height: 300px;
  }

  .close {
    display: none;
    height: 0;
    width: 0;
  }
`

export const DropDownMenu = styled.div`
  transition: all 900ms ease;

  flex-direction: column;
  gap: 15px;
  
  max-width: 200px;
  max-height: 400px;

  padding: 12px;

  position: relative;
  top: 12px;
  right: 0;

  border-top: 1px solid black;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
  border-radius: 10px;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;

  transform: scaleX(-1);

  a {
    transform: scaleX(-1);
  }
`