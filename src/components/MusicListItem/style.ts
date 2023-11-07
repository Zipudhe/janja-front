import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: var(--background-color);
  border-radius: 8px;
  border: 1px solid var(--primary-color);

  min-height: 81px;
  max-height: 82px;
  max-width: 650px;
  height: max-content;
  
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-areas: "listTitle listActions";
`

export const ListTitle = styled.h2`
  grid-area: listTitle;
  padding: 24px;
  color: var(--primary-color);
`

export const ListActionsDiv = styled.div`
  display: flex;
  flex-direction: row;
  grid-area: listActions;
  justify-content: space-evenly;
  align-items: center;

  height: 100%;
`

export const Divider = styled.hr`
  height: 90%;
  color: white;
`