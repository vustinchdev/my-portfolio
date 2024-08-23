import React from "react"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { SectionTitle } from "../../../components/SectionTitle"
import { Skill } from "./skill/Skill"
import { Container } from "../../../components/Container"
import { S } from "./Skills_Styles"
import { Fade } from "react-awesome-reveal";


const skillData = [
    {
        iconId: "js",
        skillText: "JavaScript"
    },
    {
        iconId: "ts",
        skillText: "TypeScript"
    },
    {
        iconId: "reactJs",
        skillText: "React"
    },
    {
        iconId: "redux",
        skillText: "Redux"
    },
    {
        iconId: "redux",
        skillText: "ReduxToolkit"
    },
    {
        iconId: "redux",
        skillText: "RTKQuery"
    },
    {
        iconId: "axios",
        skillText: "Axios"
    },
    {
        iconId: "reactRouter",
        skillText: "ReactRouter"
    },
    {
        iconId: "reactHookForm",
        skillText: "ReactHookForm"
    },
    {
        iconId: "storybook",
        skillText: "Storybook"
    },
    {
        iconId: "git",
        skillText: "Git"
    },
    {
        iconId: "html",
        skillText: "HTML"
    },
    {
        iconId: "css",
        skillText: "CSS"
    },
    {
        iconId: "radixUI",
        skillText: "RadixUI"
    },
    {
        iconId: "materialUI",
        skillText: "MaterialUI"
    },
    {
        iconId: "antd",
        skillText: "AntDesign"
    },
    {
        iconId: "jest",
        skillText: "JEST"
    },
    {
        iconId: "sass",
        skillText: "SASS"
    },
    {
        iconId: "styledComponents",
        skillText: "STYLED COMPONENTS"
    },
]

export const Skills: React.FC = () => {
    return (
        <S.Skills id='skills'>
            <Container>
                <SectionTitle>Skills</SectionTitle>
                <FlexWrapper wrap="wrap" justify="center" columnGap="120px" rowGap="75px">
                    <Fade
                        cascade
                        damping={0.1}
                        delay={0.2}>
                        {skillData.map((s, index) => {
                            return <Skill key={index}
                                iconId={s.iconId}
                                skillText={s.skillText} />
                        })}
                    </Fade>
                </FlexWrapper>
            </Container>
        </S.Skills>
    )
}


