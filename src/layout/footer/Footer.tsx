import React from 'react'
import { Icon } from '../../components/icon/Icon'
import { FlexWrapper } from '../../components/FlexWrapper'
import { S } from './Footer_ Styles'

const socialItemData = [
  {
    iconId: 'mail',
  },
  {
    iconId: 'linkedin',
  },
  {
    iconId: 'github',
  },
]

export const Footer: React.FC = () => {
  return (
    <S.Footer>
      <FlexWrapper direction="column" align="center">
        <S.SocialList>
          {socialItemData.map((s, index) => {
            return (
              <S.SocialItem key={index}>
                <S.SocialLink>
                  <Icon iconId={s.iconId} width="39" height="38" viewBox="0 0 39 38" />
                </S.SocialLink>
              </S.SocialItem>
            )
          })}
        </S.SocialList>
        <S.Copyright>© 2023 Vadim Ustinchik, All Rights Reserved.</S.Copyright>
      </FlexWrapper>
    </S.Footer>
  )
}
