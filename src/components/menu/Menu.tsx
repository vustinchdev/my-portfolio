import styled from "styled-components"

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
    }
`