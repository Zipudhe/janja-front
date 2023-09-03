import styled from 'styled-components'

export const Wrapper = styled.div`
  max-height: 350px;
  max-width: 250px;

  height: 350px;

  display: grid;
  grid-template-columns: minmax(200px, 250px);
  grid-template-rows: 73% auto;
  grid-row-gap: 12px;

  padding: 0 8px;
  overflow: hidden;

  cursor: pointer;

  p {
    justify-self: center;
    text-align: center;
    width: 72%;
  }
`

export const AlbumCover = styled.figure`
  max-height: 350px;
  border-radius: 30px;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;

    border-radius: 30px;
  }
`