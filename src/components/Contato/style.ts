import styled from "styled-components";

export const ContatoWrapper = styled.article`
  display: flex;
  width: 400px;
  padding: 14px 18px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 23px; 

  @media screen and (max-width: 890px) {
    gap: 0;
    padding: 12px;
    width: auto;
  }
`

export const Info =  styled.div`
  display: flex;
  width: 85%;
  padding: 14px 18px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 23px; 

  @media screen and (max-width: 890px) {
    gap: 0;
    padding: 0 12px;
  }
`

export const ContactInfo = styled.div`
  display: inline-flex;
  gap: 32px;
  width: 100%;

  text-align: center;

  h3 {
    display: grid;
    place-items: center;
  }

  @media screen and (max-width: 890px) {
    gap: 0;
    justify-content: center;
    
    img {
      scale: 0.5;
    }
  }
`