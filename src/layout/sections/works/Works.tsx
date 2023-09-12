import React from "react"
import { SectionTitle } from "../../../components/SectionTitle"
import { FlexWrapper } from "../../../components/FlexWrapper"
import image from "./../../../assets/images/image.webp"
import { Work } from "./work/Work"
import { Container } from "../../../components/Container"
import { S } from "./Works_Styles"
import { Fade } from "react-awesome-reveal";


const worksData = [
    {
        title: "TITLE PROJECT",
        text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        src: image
    },
    {
        title: "I N S I G H T G R A M",
        text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        src: image
    },
    {
        title: "TITLE PROJECT",
        text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        src: image
    },
    {
        title: "I N S I G H T G R A M",
        text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        src: image
    }
]

export const Works: React.FC = () => {
    return (
        <S.Works id='works'>
            <Container>
                <SectionTitle>Projects</SectionTitle>
                <FlexWrapper justify="space-around" wrap="wrap" rowGap="40px" columnGap="25px">
                    <Fade
                        direction='left'
                        delay={0.2}>
                        {worksData.map((w) => {
                            return <Work title={w.title}
                                text={w.text}
                                src={w.src} />
                        })}
                    </Fade>
                </FlexWrapper>
            </Container>
        </S.Works>
    )
}

