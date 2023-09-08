import styled from "styled-components"
import { theme } from "../../../styles/Theme"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { font } from "../../../styles/Common"

const Skills = styled.section`
    @media ${theme.media.tablet} {
        ${FlexWrapper} {
            column-gap: 45px;
        }
    }
`
const Skill = styled.div`
    width: 120px;
    
    @media ${theme.media.tablet} {
        width: 80px;
    }
`
const SkillText = styled.span`
    display:inline-block;
    margin-top: 20px;
    text-align: center;

    ${font({ Fmax: 16, Fmin: 12 })}

    @media ${theme.media.tablet} {
        margin-top: 15px;
    }
`

export const S = {
    Skills,
    Skill,
    SkillText,
}

