import styled from 'styled-components'

export interface IText {
  bold: boolean,
}

export const Header1 = styled.h1<IText>`
  font-size: var(--header-xlg);
  font-weight: ${({ bold }) => bold ? '700' : 'normal'};
  
  @media screen and (max-width: 890px) {
    font-size: var(--header-md);
  }
`

export const Header2 = styled.h2<IText>`
  font-size: var(--header-lg);
  font-weight: ${({ bold }) => bold ? '700' : 'normal'};

  @media screen and (max-width: 890px) {
    font-size: var(--header-md);
  }

  @media screen and (max-width: 600px) {
    font-size: var(--header-sm);
  }
`

export const Header3 = styled.h3<IText>`
  font-size: var(--header-sm);
  font-weight: ${({ bold }) => bold ? '700' : 'normal'};

  @media screen and (max-width: 890px) {
    font-size: var(--header-xsm);
  }

  @media screen and (max-width: 600px) {
    font-size: var(--header-sm);
  }
`

export const Paragraph = styled.p<IText>`
  font-size: var(--text-md);
  font-weight: ${({ bold }) => bold ? '700' : 'normal'};
  line-height: 160%;
  letter-spacing: 0.26px;

  @media screen and (max-width: 890px) {
    font-size: var(--text-sm);
  }
`

export const Span = styled.span<IText>`
  font-size: var(--text-md);
  font-weight: ${({ bold }) => bold ? '700' : 'normal'};
  line-height: 160%;
  letter-spacing: 0.26px;

  @media screen and (max-width: 890px) {
    font-size: var(--text-sm);
  }
`