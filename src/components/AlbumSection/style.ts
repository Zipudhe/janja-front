import { styled } from "styled-components";

export const AlbunsWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, max-content));
  grid-column-gap: 65px;
  place-content: center;

  width: 100%;

  @media screen and (max-width: 890px) {
    grid-row-gap: 32px;
  }
`