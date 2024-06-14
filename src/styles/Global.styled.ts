import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }  

body {
    margin: 0;
    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    background-color: ${theme.colors.primaryBg};
    color: ${theme.colors.primaryFont};
    font-weight: 400;
    line-height: 1.2;
}

section {
    padding: 140px 0;

    @media ${theme.media.mobile} {
        padding: 100px 0;
    }
}

    a {
        text-decoration: none;
        color: ${theme.colors.primaryFont};
        cursor: pointer;
    }

    ul {
        list-style: none;
    }

    button {
        background-color: unset;
        border: none;
        cursor: pointer;
    }
`

