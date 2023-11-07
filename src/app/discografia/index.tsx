import React from "react"
import Header from "../../components/Header"
import { HeaderText } from "../../components/Typography/headerText"
import { Divider } from '../../components/CalendarChip/style'

export const DiscographyPage = () => {
  return (
    <>
      <Header showCover={false} />
      <main>
        <HeaderText style={{ textAlign: 'center' }} > Discografia </HeaderText>
        <Divider />
      </main>
    </>
  )
}