import styled from "styled-components"
import { Icon } from "../../../../components/icon/Icon"
import { FlexWrapper } from "../../../../components/FlexWrapper"

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
`
const StyledSkillText = styled.span`
    display:inline-block;
    margin-top: 20px;
`
