import React from "react"
import { Menu } from "../menu/Menu"
import { S } from "../HeaderMenu_Styles"



export const MobileMenu: React.FC<{ menuItmems: Array<string> }> = (props: { menuItmems: Array<string> }) => {
    return (
        <S.MobileMenu>
            <S.BurgerButton isOpen={false}>
                <span></span>
            </S.BurgerButton>

            <S.MobileMenuPopup isOpen={false}>
                <Menu menuItmems={props.menuItmems} />
            </S.MobileMenuPopup>
        </S.MobileMenu>
    )
}


