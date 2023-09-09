import { Meta, StoryObj } from '@storybook/react'
import Home, { HomeInterface } from './page'
import { mockedAlbuns } from "../components/AlbumSection/AlbumSection.stories"
import { mockedArgs as mockedContatos } from "../components/Contato/Contato.stories"
import { mockedCalendar } from "../components/CalendarChip/CalendarChip.stories"
import { Desktop } from "../components/Header/Header.stories"

type typeofHome = typeof Home

const storyComponent: Meta<typeofHome> = {
  title: "Pages/Home",
  component: Home,
  parameters: {
    layouy: "fullscreen"
  }
}


export default storyComponent

type Story = StoryObj<typeofHome>

const mockText = `
Angela Velloso é uma intérprete,  arranjadora e compositora baiana. Estuda composição e execução em canto no Bacharelado em Música Popular da Universidade Federal da Bahia, tendo sido aprovada em 1º lugar. Dentro e fora da universidade realizou trabalhos e projetos que desenvolveram sua maturidade musical e ecletismo. Como é o caso do intercâmbio de um ano que realizou em Jazz e Música Popular,
na Hochschule für Musik und Darstellende Kunst Mannheim, na Alemanha. Em 2019 lançou seu primeiro álbum, Reisen, que encontra-se disponível em todas as plataformas  digitais. Desde então, participou de diversos festivais de Jazz e de Música Popular, no Brasil e na Alemanha, com diferentes formações: Duo (voz e violão), com banda e com seu Quarteto de Jazz. 
Em 2022, a artista lançou oficialmente seu mais novo show, Manakin, no Teatro SESC Pelourinho, tendo como convidados o renomado músico Roberto Mendes, Paul Andrew e Isa Meirelles. Ainda em 2022, Angela Velloso é premiada como melhor intérprete, na categoria Música com Letra, do XX Festival da Educadora FM, ano em que a cantora Gal Costa foi homenageada.
Atualmente, Angela dá continuidade à sua carreira, marcada por um repertório que conta com canções críticas e buscando em sua sonoridade celebrar e preservar a memória da Música Popular Brasileira, mas não só. Em 2023, Angela promete lançar singles e parcerias, sendo elas canções e músicas instrumentais; o primeiro EP da banda Solana Star, em parceria com o cantor, compositor e violonista Felipe Fatiota; e seu segundo álbum solo, que se encontra em fase de finalização.
`

const mockedArgs = {
  aboutText: mockText,
  albuns: mockedAlbuns,
  calendars: [mockedCalendar, mockedCalendar, mockedCalendar],
  contacts: [mockedContatos, mockedContatos],
  headerImg: "https://images.unsplash.com/photo-1692060234392-aa41b4703065?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
} as HomeInterface

export const defaultStory: Story = {
  render: (args) => <Home {...args} />,
  args: mockedArgs
}