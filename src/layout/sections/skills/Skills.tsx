import styled from "styled-components"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { SectionTitle } from "../../../components/SectionTitle"
import { Skill } from "./skill/Skill"
import { Container } from "../../../components/Container"
import { theme } from "../../../styles/Theme"



export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <SectionTitle>Skills</SectionTitle>
                <FlexWrapper wrap="wrap" justify="center" columnGap="120px" rowGap="75px">
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
            </Container>
        </StyledSkills>
    )
}

const StyledSkills = styled.section`
    @media ${theme.media.tablet} {
        ${FlexWrapper} {
            column-gap: 45px;
        }
    }
`   
