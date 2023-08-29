import styled from 'styled-components'

export interface IText {
  bold: boolean,
  mobile: boolean
}

export const Header1 = styled.h1<IText>`
  font-size: var(--header-xlg);
  font-weight: ${({ bold }) => bold ? '700' : 'normal'};
  
  @media screen and (max-width: 890px) {
    font-size: var(--header-md);
  }
`

export const Header2 = styled.h2<IText>`
  font-size: ${({ mobile }) => mobile ? '24px' : '40px'};
  font-weight: ${({ bold }) => bold ? '700' : 'normal'};
`

export const Header3 = styled.h3<IText>`
  font-size: ${({ mobile }) => mobile ? '21px' : '25px'};
  font-weight: ${({ bold }) => bold ? '700' : 'normal'};
`

export const Paragraph = styled.p<IText>`
  font-size: ${({ mobile }) => mobile ? '13px' : '16px'};
  font-weight: ${({ bold }) => bold ? '700' : 'normal'};
  line-height: 160%;
  letter-spacing: 0.26px;
`

export const Span = styled.span<IText>`
  font-size: ${({ mobile }) => mobile ? '13px' : '16px'};
  font-weight: ${({ bold }) => bold ? '700' : 'normal'};
  line-height: 160%;
  letter-spacing: 0.26px;
`