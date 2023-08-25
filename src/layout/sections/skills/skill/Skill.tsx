import styled from "styled-components"
import { Icon } from "../../../../components/icon/Icon"

type SkillPropsType = {
    iconId: string,
    skillText: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            < Icon iconId={props.iconId} />
            <StyledSkillText>{props.skillText}</StyledSkillText>
        </StyledSkill>
    )
}

const StyledSkill = styled.div`
    width:20%;
`
const StyledSkillText = styled.span`
    
`
