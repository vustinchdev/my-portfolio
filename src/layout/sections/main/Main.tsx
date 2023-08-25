import styled from "styled-components"
import photo from '../../../assets/images/support-1.webp'
import { FlexWrapper } from "../../../components/FlexWrapper"
import { Button } from "../../../components/Button"

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={"centre"} justify={"space-around"}>
                <div>
                    <h1>Frontend developer</h1>
                    <h2>Vadim Ustinchik</h2>
                    <Button>Contact Me</Button>
                </div>

                <Photo src={photo} alt="photo" />
            </FlexWrapper>
        </StyledMain>
    )
}

const StyledMain = styled.div`
    min-height: 100vh; 
    background-color: #e7d5d5;
`

const Photo = styled.img`
    width:530px;
    height: 400px;
`