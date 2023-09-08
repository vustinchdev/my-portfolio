import React from "react"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { SectionTitle } from "../../../components/SectionTitle"
import { Skill } from "./skill/Skill"
import { Container } from "../../../components/Container"
import { S } from "./Skills_Styles"


const skillData = [
    {
        iconId: "js",
        skillText: "JAVACRIPT"
    },
    {
        iconId: "ts",
        skillText: "TYPESCRIPT"
    },
    {
        iconId: "mongoDB",
        skillText: "MONGO DB"
    },
    {
        iconId: "postgresql",
        skillText: "POSTGRESQL"
    },
    {
        iconId: "jest",
        skillText: "JEST"
    },
    {
        iconId: "express",
        skillText: "EXPRESS"
    },
    {
        iconId: "docker",
        skillText: "DOCKER"
    },
    {
        id: 7,
        iconId: "reactJs",
        skillText: "REACT JS"
    },
    {
        iconId: "reactNactive",
        skillText: "REACT NACTIVE"
    },
    {
        iconId: "styledComponents",
        skillText: "STYLED COMPONENTS"
    },
    {
        iconId: "redux",
        skillText: "REDUX"
    },
]

export const Skills: React.FC = () => {
    return (
        <S.Skills>
            <Container>
                <SectionTitle>Skills</SectionTitle>
                <FlexWrapper wrap="wrap" justify="center" columnGap="120px" rowGap="75px">

                    {skillData.map((s, index) => {
                        return <Skill key={index}
                            iconId={s.iconId}
                            skillText={s.skillText} />
                    })}

                </FlexWrapper>
            </Container>
        </S.Skills>
    )
}


