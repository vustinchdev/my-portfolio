import React from 'react'
import photo from 'assets/images/photo.webp'
import { FlexWrapper } from 'components/FlexWrapper'
import { Container } from 'components/Container'
import { S } from './Main_Styles'
import Typewriter from 'typewriter-effect'
import Tilt from 'react-parallax-tilt'
import { Button } from 'components/Button'
import { Icon } from 'components/icon/Icon'

export const Main: React.FC = () => {
  return (
    <S.Main id="home">
      <Container>
        <FlexWrapper align="center" justify="space-around" wrap="wrap-reverse">
          <div>
            <S.MainTitle>
              <p>Frontend developer</p>
              <Typewriter
                options={{
                  strings: ['Frontend developer'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </S.MainTitle>
            <S.Name>Vadim Ustinchik</S.Name>
            <Button as={'a'} href='#' target='_blank' rel="noopener noreferrer" download>
              <Icon iconId='fileDownload' width="24" height="24" viewBox="0 0 24 24"/>
              Download CV
            </Button>
          </div>
          <Tilt>
            <S.Photo src={photo} alt="photo" />
          </Tilt>
        </FlexWrapper>
      </Container>
    </S.Main>
  )
}
