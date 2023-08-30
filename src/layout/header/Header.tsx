import styled from "styled-components"
import { Menu } from "../../components/menu/Menu"
import { Container } from "../../components/Container"


const items = ["Home", "Projects", "Contact"]

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <Menu menuItmems={items} />
            </Container>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    padding: 20px 0;
`