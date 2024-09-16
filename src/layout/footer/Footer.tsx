import React from 'react'
import { Icon } from 'components/icon/Icon'
import { FlexWrapper } from 'components/FlexWrapper'
import { S } from './Footer_ Styles'

const socialItemData = [
  {
    iconId: 'mail',
    url: 'mailto:vustinchdev@gmail.com'
  },
  {
    iconId: 'linkedin',
    url: 'https://www.linkedin.com/in/%D0%B2%D0%B0%D0%B4%D0%B8%D0%BC-%D1%83%D1%81%D1%82%D0%B8%D0%BD%D1%87%D0%B8%D0%BA-31bb65286/'
  },
  {
    iconId: 'github',
    url: 'https://github.com/vustinchdev'
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
                <S.SocialLink href={s.url} target='_blank'>
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
