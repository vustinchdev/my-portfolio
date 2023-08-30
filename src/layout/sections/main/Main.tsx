import styled from "styled-components"
import photo from '../../../assets/images/support-1.webp'
import { FlexWrapper } from "../../../components/FlexWrapper"
import { Button } from "../../../components/Button"
import { Container } from "../../../components/Container"
import { theme } from "../../../styles/Theme"

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={"center"} justify={"space-between"}>
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
`
const MainTitle = styled.h1`
    font-family: Tinos;
    font-size: 30px;
    font-weight: 400;
    color: ${theme.colors.titleFont};
`
const Name = styled.h2`
    font-size: 68px;
    font-weight: 600;
    color: ${theme.colors.accent};
    margin: 10px 0;
`