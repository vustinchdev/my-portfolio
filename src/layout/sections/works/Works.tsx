import styled from "styled-components"
import { SectionTitle } from "../../../components/SectionTitle"
import { FlexWrapper } from "../../../components/FlexWrapper"
import image from "./../../../assets/images/image.webp"
import { Work } from "./work/Work"


export const Works = () => {
    return (
        <StyledWorks>
            <SectionTitle>Projects</SectionTitle>
            <FlexWrapper justify="space-around" wrap="wrap">
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
        </StyledWorks>
    )
}

const StyledWorks = styled.section`
    min-height: 100vh;
    background-color: #3b74e4;
`