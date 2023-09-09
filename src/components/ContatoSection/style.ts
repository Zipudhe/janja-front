import styled from "styled-components";

export const ContatoWrapper = styled.section`
  width: 100%;
  display: flex;

  justify-content: space-evenly;
  scroll-snap-align: center;

  @media screen and (max-width: 890px) {
    flex-direction: column;
  }
`