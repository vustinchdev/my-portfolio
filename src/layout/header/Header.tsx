import styled from "styled-components"
import { Menu } from "../../components/menu/Menu"
import { Container } from "../../components/Container"
import { MobileMenu } from "./mobileMenu/MobileMenu"


const items = ["Home", "Skills", "Projects", "Contact"]

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <Menu menuItmems={items} />
                <MobileMenu menuItmems={items} />
            </Container>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    padding: 20px 0;
`