import styled from 'styled-components'

export const AboutSection = styled.section`
  display: flex;
  flex-direction: column;
  
  min-height: 400px;
  width: 100%;

  overflow: hidden;

  h1 {
    text-align: center;
    margin-bottom: 12px;
    scroll-snap-align: start;
  }

  button {
    margin-top: 12px;
    width: 75%;
    align-self: center;
  }

  .media {
    align-self: center;
  }

  @media screen and (min-width: 890px) {
    div:last-child {
      display: none;
    }
  }
`

export const ButtonDiv = styled.div`
  width: 100%;
  min-height: 50px;
  max-height: 50px;
  height: fit-content;

  display: grid;
  place-items: center;

  transition: transform 2000ms;

  img {
    height: 100%;
    width: 35px;
    opacity: 0.5;
  }

  .up {
    transform: rotateX(180deg);
  }
`

export const TextWrapper = styled.div`
  padding: 12px;

  transition: max-height 1s ease-in-out;
  max-height: 1000px;
  min-height: 300px;

  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;

  p {
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .up {
    max-height: 1000px;
  }

  .close {
    max-height: 400px;
  }


  @media screen and (max-width: 890px) {
    text-align: justify;
  }
`