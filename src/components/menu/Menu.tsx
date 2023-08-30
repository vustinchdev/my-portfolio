import styled from "styled-components"
import { theme } from "../../styles/Theme"


export const Menu = (props: { menuItmems: Array<string> }) => {
    return (
        <StyledMenu>
            <ul>
                {props.menuItmems.map((item, index) => {
                    return <li key={index}>
                        <a href="">{item}</a>
                    </li>
                })}
            </ul>
        </StyledMenu>
    )
}


const StyledMenu = styled.nav`
    ul {
        display: flex;
        gap: 30px;
        justify-content: space-around;
    }

    a {
        font-family: Montserrat;
        font-size: 16px;
        font-weight: 500;
        color: ${theme.colors.primaryFont}
    }

    a:hover {
        width: 105px;
        height: 45px;
        padding: 12px 20px;
        border-radius: 6px;
        gap: 10px;
        background-color: ${theme.colors.accent};
        color: ${theme.colors.secondaryFont};
    }
`