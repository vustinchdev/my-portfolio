import React from 'react'
import photo from '../../../assets/images/support-1.webp'
import { FlexWrapper } from "../../../components/FlexWrapper"
import { Button } from "../../../components/Button"
import { Container } from "../../../components/Container"
import { S } from './Main_Styles'


export const Main: React.FC = () => {
    return (
        <S.Main>
            <Container>
                <FlexWrapper align="center" justify="space-around" wrap="wrap-reverse">
                    <div>
                        <S.MainTitle>Frontend developer</S.MainTitle>
                        <S.Name>Vadim Ustinchik</S.Name>
                        <Button>Contact Me</Button>
                    </div>
                    <S.Photo src={photo} alt="photo" />
                </FlexWrapper>
            </Container>
        </S.Main>
    )
}

