import styled, { css } from "styled-components";
import { theme } from "../../../styles/Theme";

const Link = styled.a`
    font-size: 16px;
    font-weight: 500;
    

    &:hover {
        width: 105px;
        height: 45px;
        padding: 12px 20px;
        border-radius: 6px;
        gap: 10px;
        background-color: ${theme.colors.accent};
        color: ${theme.colors.secondaryFont};
    }
`
const DesktopMenu = styled.nav`
    ul {
        display: flex;
        gap: 30px;
        justify-content: space-around;
    }
    `
const MobileMenu = styled.nav`

`

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index:999;
    background-color: ${theme.colors.primaryBg};
    display: none;

    ${props => props.isOpen && css<{ isOpen: boolean }>`
        display: flex;
        justify-content: center;
        align-items: center;
    `}

    ul {
        display: flex;
        gap: 30px;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
`

const BurgerButton = styled.button<{ isOpen: boolean }>`
    position: fixed;
    top: -100px;
    right: -100px;
    width: 200px;
    height: 200px;
    z-index: 99999;
    
    span {
        display: block;
        width: 36px;
        height: 2px;
        background-color: ${theme.colors.accent};
        position: absolute;
        left: 40px;
        bottom: 50px;

    ${props => props.isOpen && css<{ isOpen: boolean }>`
        background-color: #ffffff;
    `}

    &::before {
        content: "";
        display: block;
        width: 36px;
        height: 2px;
        background-color: ${theme.colors.accent};
        position: absolute;
        transform: translateY(-10px);

    ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: rotate(-45deg) translateY(0)
    `}
        }

    &::after {
        content: "";
        display: block;
        width: 36px;
        height: 2px;
        background-color: ${theme.colors.accent};
        position: absolute;
        transform: translateY(10px);

        ${props => props.isOpen && css<{ isOpen: boolean }>`
            transform: rotate(45deg) translateY(0)
        `}
        }
    }
`

export const S = {
    Link,
    DesktopMenu,
    MobileMenu,
    MobileMenuPopup,
    BurgerButton
}