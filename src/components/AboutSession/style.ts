import styled from 'styled-components'

export const AboutSection = styled.section`
  display: flex;
  flex-direction: column;
  
  min-height: 400px;
  width: 100%;

  padding: 12px;
  overflow: hidden;

  h1 {
    text-align: center;
    margin-bottom: 12px;
  }

  button {
    margin-top: 12px;
    width: 75%;
    align-self: center;
  }
`

export const TextWrapper = styled.div`
  padding: 12px;

  transition: height 1s ease-in-out;
  height: 80%;

  overflow: hidden;
  text-overflow: ellipsis;
  text-align: justify;

  .close {
    height: 50vh;
  }
`