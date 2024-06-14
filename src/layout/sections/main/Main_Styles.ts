import styled from "styled-components"
import { theme } from "../../../styles/Theme"
import { font } from "../../../styles/Common"

const Main = styled.div`
    position: relative;
    min-height: 100vh; 
    display: flex;
`

const Photo = styled.img`
    max-width: 350px;
    width: 100%;
    object-fit: cover;
    box-shadow: 2px 2px 32px #28262C;;
`
const MainTitle = styled.h1`
    ${font({ family: 'Tinos', Fmax: 30, Fmin: 26 })};

    color: ${theme.colors.titleFont};
    
    p {
        display: none;
    }
`
const Name = styled.h2`
    ${font({ weight: 600, Fmax: 60, Fmin: 36 })};

    color: ${theme.colors.accent};
    margin: 10px 0;
    white-space: nowrap;
`

export const S = {
    Main,
    Photo,
    MainTitle,
    Name
}