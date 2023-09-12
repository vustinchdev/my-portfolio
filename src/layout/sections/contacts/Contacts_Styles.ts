import styled from "styled-components"
import { theme } from "../../../styles/Theme"

const Contacts = styled.section`
    position: relative;
`

const Form = styled.form`
    max-width: 530px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin: 0 auto;

    textarea {
        resize: none;
        height: 165px;
    }
`
const Field = styled.input`
    width: 100%;
    border-radius: 6px; 
    border: 1px solid ${theme.colors.borderColor};
    padding: 10px 15px;
    font-family: Montserrat;
    font-weight: 500;
    font-size: 16px;

    &::placeholder {
        color: ${theme.colors.placeHolderColor};
        text-transform: capitalize;
    }

    &:focus-visible {
        outline: 1px solid ${theme.colors.accent};
    }
`

export const S = {
    Contacts,
    Form,
    Field
}