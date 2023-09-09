import styled from 'styled-components'

export const SectionWrapper = styled.section`
  width: 100%;
  display: grid;
  min-height: 500px;

  grid-template-columns: repeat(auto-fit, minmax(200px, 250px));
  grid-column-gap: 80px;
  grid-row-gap: 12px;

  place-content: center;
  scroll-snap-align: center;
`