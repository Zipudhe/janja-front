import styled from 'styled-components'

export const Dialog = styled.dialog`
  display: flex;
  flex-direction: column;
  min-height: 625px;
  width: 500px;
  padding: 16px;

  background-color: #150002;

  h3 {
    text-align: center;
  }
`

export const ListWrapper = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  flex-direction: column;
  gap: 32px;
`

export const ListItem = styled.div`
  display: flex;
  justify-content: space-evenly;
  max-height: 80px;
  height: max-content;
  width: 100%;

  p {
    align-self: center;
  }

  p:last-child {
    width: 40%;
  }

  div {
    display: flex;
    flex-direction: column;
    min-width: 100px;
    justify-content: center;
    padding: 8px;
    width: auto;
  }
`

export const Divider = styled.hr`
  border-color: var(--secondary-color);
`