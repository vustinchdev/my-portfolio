import styled from "styled-components"
import { theme } from "../../styles/Theme"

const Footer = styled.footer`
    position: relative;
    padding: 40px 0;
`
const SocialList = styled.ul`
    display: flex;
    gap: 50px;
    margin: 30px 0;
`

const SocialItem = styled.li`
    
`

const SocialLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.primaryBg};
    transition: ${theme.animations.transition};
    color: ${theme.colors.accent};

    &:hover {
        transform: translateY(-4px);
    }
`

const Copyright = styled.small`
    letter-spacing: 0.04em;
    color: ${theme.colors.primaryFont};
`

export const S = {
    Footer,
    SocialList,
    SocialItem,
    SocialLink,
    Copyright
}