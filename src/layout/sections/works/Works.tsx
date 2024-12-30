import React from 'react'
import { SectionTitle } from 'components/SectionTitle'
import { FlexWrapper } from 'components/FlexWrapper'
import flashCardsSpa from 'assets/images/flashCardsSpa.webp'
import communicationApp from 'assets/images/communicationApp.webp'
import myTasks from 'assets/images/myTasks.webp'
import { Work } from './work/Work'
import { Container } from 'components/Container'
import { S } from './Works_Styles'
import { Fade } from 'react-awesome-reveal'

const worksData = [
  {
    title: 'Communication app',
    text: 'This application for communicating, publishing posts and viewing interesting content.',
    src: communicationApp,
    demoLink: 'https://samuraichiki.org/',
    codeLink: 'https://github.com/samuraichikit/inctagram',
  },
  {
    title: 'Flash-Cards-SPA',
    text: 'This app is designed for learning with question and answer cards. Users can create their own decks of cards or use ready-made decks of cards. The app allows you to add pictures to help you remember the information better.',
    src: flashCardsSpa,
    demoLink: 'https://flash-cards-spa.vercel.app',
    codeLink: 'https://github.com/ana-koles/Flash-Cards-SPA',
  },
  {
    title: 'My-tasks',
    text: 'The application provides an interface for creating, editing and deleting tasks.',
    src: myTasks,
    demoLink: 'https://vustinchdev.github.io/My-tasks',
    codeLink: 'https://github.com/vustinchdev/My-tasks'
  }
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
