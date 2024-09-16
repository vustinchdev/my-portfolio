import React from 'react'
import { Menu } from '../../headerMenu/menu/Menu'
import { S } from '../HeaderMenu_Styles'

export const DesktopMenu: React.FC = () => {
  return (
    <S.DesktopMenu>
      <Menu />
    </S.DesktopMenu>
  )
}
