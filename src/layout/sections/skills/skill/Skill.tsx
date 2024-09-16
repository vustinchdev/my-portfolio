import React from 'react'
import { Icon } from '../../../../components/icon/Icon'
import { FlexWrapper } from '../../../../components/FlexWrapper'
import { S } from '../Skills_Styles'

type SkillPropsType = {
  iconId: string
  skillText: string
}

export const Skill: React.FC<SkillPropsType> = (props: SkillPropsType) => {
  return (
    <S.Skill>
      <FlexWrapper direction="column" align="center">
        <Icon iconId={props.iconId} />
        <S.SkillText>{props.skillText}</S.SkillText>
      </FlexWrapper>
    </S.Skill>
  )
}
