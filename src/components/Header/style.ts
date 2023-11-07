import styled from 'styled-components'
import { IHeader } from './index'


export const HeaderWrapper = styled.header<IHeader>`
  width: 100%;
  height: ${({ showCover }) => showCover ? '70vh' : 'min-content'};
  max-height: 700px;
`

export const CoverImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`