import React from 'react'
import { SectionTitle } from 'components/SectionTitle'
import { FlexWrapper } from 'components/FlexWrapper'
import flashCardsSpa from 'assets/images/flash-cards-spa.webp'
import { Work } from './work/Work'
import { Container } from 'components/Container'
import { S } from './Works_Styles'
import { Fade } from 'react-awesome-reveal'

const worksData = [
  {
    title: 'Flash-Cards-SPA',
    text: 'This app is designed for learning with question and answer cards. Users can create their own decks of cards or use ready-made decks of cards. The app allows you to add pictures to help you remember the information better.',
    src: flashCardsSpa,
    demoLink: 'https://flash-cards-spa.vercel.app',
    codeLink: 'https://github.com/ana-koles/Flash-Cards-SPA',
  },
]

export const Works: React.FC = () => {
  return (
    <S.Works id="works">
      <Container>
        <SectionTitle>Projects</SectionTitle>
        <FlexWrapper justify="space-around" wrap="wrap" rowGap="40px" columnGap="25px">
          <Fade direction="left" delay={0.2}>
            {worksData.map((w, index) => {
              return <Work key={index} {...w} />
            })}
          </Fade>
        </FlexWrapper>
      </Container>
    </S.Works>
  )
}
