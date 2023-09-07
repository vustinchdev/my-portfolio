import styled from "styled-components"
import { Icon } from "../../../../components/icon/Icon"
import { FlexWrapper } from "../../../../components/FlexWrapper"
import { font } from "../../../../styles/Common"
import { theme } from "../../../../styles/Theme"


type SkillPropsType = {
    iconId: string,
    skillText: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <FlexWrapper direction="column" align="center">
                < Icon iconId={props.iconId} />
                <StyledSkillText>{props.skillText}</StyledSkillText>
            </FlexWrapper>
        </StyledSkill>
    )
}

const StyledSkill = styled.div`
    width: 120px;
    
    @media ${theme.media.tablet} {
        width: 80px;
    }
`
const StyledSkillText = styled.span`
    display:inline-block;
    margin-top: 20px;
    text-align: center;

    ${font({ Fmax: 16, Fmin: 12 })}

    @media ${theme.media.tablet} {
        margin-top: 15px;
    }
`

