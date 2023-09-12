import React from 'react'
import { S } from '../HeaderMenu_Styles'

const items = [
    {
        title: 'Home',
        href: 'home'
    },
    {
        title: 'Skills',
        href: 'skills'
    },
    {
        title: 'Works',
        href: 'works'
    },
    {
        title: 'Contact',
        href: 'contact'
    }
]

export const Menu: React.FC = () => {
    return (
        <ul>
            {items.map((item, index) => {
                return <li key={index}>
                    <S.NavLink
                        activeClass="active"
                        to={item.href}
                        smooth={true}
                        spy={true}
                        offset={-40}
                    >
                        {item.title}
                    </S.NavLink>
                </li>
            })}
        </ul>
    )
}





