import React, { FC } from 'react'
import Image from 'next/image'

import { Header } from '../components/Header'
import { About } from '../components/AboutSection'
import { AlbumSection, Album  } from '../components/AlbumSection'
import { CalendarSection } from '../components/CalendarSection'
import { CalendarInterface } from '../components/CalendarChip'
import { ContatoSection } from '../components/ContatoSection'
import { IContato } from '../components/Contato'

export interface HomeInterface {
  headerImg: string,
  aboutText: string,
  albuns: Album[],
  calendars: CalendarInterface[],
  contacts: IContato[]
}
// TODO refactor components types and add layer to fetch data
export const Home: FC<HomeInterface> = ({ headerImg, aboutText, albuns, calendars, contacts }) => {
  return (
    <main>
      <Header imageSrc={headerImg} />
      <About text={aboutText} />
      <AlbumSection albuns={albuns} />
      <CalendarSection events={calendars} />
      <ContatoSection contatos={contacts} />
    </main>
  )
}

export default Home


// Use getServerSideProps fuction to fetch data