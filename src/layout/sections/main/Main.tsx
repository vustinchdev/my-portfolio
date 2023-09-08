import styled from "styled-components"
import photo from '../../../assets/images/support-1.webp'
import { FlexWrapper } from "../../../components/FlexWrapper"
import { Button } from "../../../components/Button"
import { Container } from "../../../components/Container"
import { theme } from "../../../styles/Theme"
import { font } from "../../../styles/Common"

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align="center" justify="space-around" wrap="wrap-reverse">
                    <div>
                        <MainTitle>Frontend developer</MainTitle>
                        <Name>Vadim Ustinchik</Name>
                        <Button>Contact Me</Button>
                    </div>
                    <Photo src={photo} alt="photo" />
                </FlexWrapper>
            </Container>
        </StyledMain>
    )
}

const StyledMain = styled.div`
    min-height: 100vh; 
    display: flex;
`

const Photo = styled.img`
    width:530px;
    height: 400px;

    @media ${theme.media.mobile} {
        width: 320px;
        height: 240px;
    }
`
const MainTitle = styled.h1`
    ${font({ family: 'Tinos', Fmax: 30, Fmin: 26 })}
    color: ${theme.colors.titleFont};
`
const Name = styled.h2`
    ${font({ weight: 600, Fmax: 60, Fmin: 36 })}
    color: ${theme.colors.accent};
    margin: 10px 0;
    white-space: nowrap;
`