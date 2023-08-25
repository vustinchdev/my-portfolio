import styled from "styled-components"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { SectionTitle } from "../../../components/SectionTitle"
import { Skill } from "./skill/Skill"


export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>Skills</SectionTitle>
            <FlexWrapper wrap="wrap" justify="center">
                <Skill iconId="js" skillText="JAVACRIPT" />
                <Skill iconId="ts" skillText="TYPESCRIPT" />
                <Skill iconId="mongoDB" skillText="MONGO DB" />
                <Skill iconId="postgresql" skillText="POSTGRESQL" />
                <Skill iconId="jest" skillText="JEST" />
                <Skill iconId="express" skillText="EXPRESS" />
                <Skill iconId="docker" skillText="DOCKER" />
                <Skill iconId="reactJs" skillText="REACT JS" />
                <Skill iconId="reactNactive" skillText="REACT NACTIVE" />
                <Skill iconId="styledComponents" skillText="STYLED COMPONENTS" />
                <Skill iconId="redux" skillText="REDUX" />
            </FlexWrapper>
        </StyledSkills>
    )
}

const StyledSkills = styled.section`
    background-color: #f0b2e9;
    min-height: 100vh;
`
