import styled from "styled-components"
import { Menu } from "../../components/menu/Menu"

const items = ["Home", "Projects", "Contact"]

export const Header = () => {
    return (
        <StyledHeader>
            <Menu menuItmems={items} />
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    background-color: #60e1e5;
    display: flex;
    justify-content: space-between;
`