import React from 'react'
import { S } from '../HeaderMenu_Styles'

export const Menu: React.FC<{ menuItmems: Array<string> }> = (props: { menuItmems: Array<string> }) => {
    return (
        <ul>
            {props.menuItmems.map((item, index) => {
                return <li key={index}>
                    <S.Link href="">{item}</S.Link>
                </li>
            })}
        </ul>
    )
}





