import React from "react"
import { Menu } from "../../headerMenu/menu/Menu"
import { S } from "../HeaderMenu_Styles"


export const DesktopMenu: React.FC<{ menuItmems: Array<string> }> = (props: { menuItmems: Array<string> }) => {
    return (
        <S.DesktopMenu>
            <Menu menuItmems={props.menuItmems} />
        </S.DesktopMenu>
    )
}


