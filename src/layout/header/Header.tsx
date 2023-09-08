import React from "react"
import { Container } from "../../components/Container"
import { MobileMenu } from "./headerMenu/mobileMenu/MobileMenu"
import { S } from "./Header_Styles"
import { DesktopMenu } from "./headerMenu/desktopMenu/DesktopMenu"


const items = ["Home", "Skills", "Projects", "Contact"]

export const Header: React.FC = () => {
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 768;

    React.useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth));
    }, []);

    return (
        <S.Header>
            <Container>
                {width < breakpoint ? <MobileMenu menuItmems={items} />
                    : <DesktopMenu menuItmems={items} />}

            </Container>
        </S.Header>
    )
}

