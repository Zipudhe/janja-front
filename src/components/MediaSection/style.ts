import styled from 'styled-components'

export const IconWrapper = styled.article`
  width: fit-content;
  max-width: 100%;
  height: 50px;

  display: inline-flex;
  justify-content: space-evenly;

  column-gap: 38px;

  margin-top: 12px;

  img {
    cursor: pointer;
  }

  @media screen and (max-width: 890px) {
    img {
      width: 30px;
    }
  }
`
