import { StoryObj, Meta } from '@storybook/react'

import About from '.'

const mockText = `
Angela Velloso é uma intérprete,  arranjadora e compositora baiana. Estuda composição e execução em canto no Bacharelado em Música Popular da Universidade Federal da Bahia, tendo sido aprovada em 1º lugar. Dentro e fora da universidade realizou trabalhos e projetos que desenvolveram sua maturidade musical e ecletismo. Como é o caso do intercâmbio de um ano que realizou em Jazz e Música Popular,
na Hochschule für Musik und Darstellende Kunst Mannheim, na Alemanha. Em 2019 lançou seu primeiro álbum, Reisen, que encontra-se disponível em todas as plataformas  digitais. Desde então, participou de diversos festivais de Jazz e de Música Popular, no Brasil e na Alemanha, com diferentes formações: Duo (voz e violão), com banda e com seu Quarteto de Jazz. 
Em 2022, a artista lançou oficialmente seu mais novo show, Manakin, no Teatro SESC Pelourinho, tendo como convidados o renomado músico Roberto Mendes, Paul Andrew e Isa Meirelles. Ainda em 2022, Angela Velloso é premiada como melhor intérprete, na categoria Música com Letra, do XX Festival da Educadora FM, ano em que a cantora Gal Costa foi homenageada.
Atualmente, Angela dá continuidade à sua carreira, marcada por um repertório que conta com canções críticas e buscando em sua sonoridade celebrar e preservar a memória da Música Popular Brasileira, mas não só. Em 2023, Angela promete lançar singles e parcerias, sendo elas canções e músicas instrumentais; o primeiro EP da banda Solana Star, em parceria com o cantor, compositor e violonista Felipe Fatiota; e seu segundo álbum solo, que se encontra em fase de finalização.
`

const AboutSectionStory: Meta<typeof About> = {
  title: "Section/AboutSection",
  component: About,
  parameters: {
    layout: 'fullscreen'
  }
}

type Story = StoryObj<typeof About>

export const Desktop: Story = {
  render: (args) => <About {...args} />,
  args: {
    text: mockText
  }
}

export default AboutSectionStory