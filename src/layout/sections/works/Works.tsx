import styled from "styled-components"
import { SectionTitle } from "../../../components/SectionTitle"
import { FlexWrapper } from "../../../components/FlexWrapper"
import image from "./../../../assets/images/image.webp"
import { Work } from "./work/Work"
import { Container } from "../../../components/Container"


export const Works = () => {
    return (
        <StyledWorks>
            <Container>
                <SectionTitle>Projects</SectionTitle>
                <FlexWrapper justify="space-around" wrap="wrap" rowGap="40px" columnGap="25px">
                    <Work title={"TITLE PROJECT"}
                        text={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."}
                        src={image} />
                    <Work title={"I N S I G H T G R A M"}
                        text={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."}
                        src={image} />
                    <Work title={"TITLE PROJECT"}
                        text={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."}
                        src={image} />
                    <Work title={"I N S I G H T G R A M"}
                        text={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."}
                        src={image} />
                </FlexWrapper>
            </Container>
        </StyledWorks>
    )
}

const StyledWorks = styled.section`
    
`