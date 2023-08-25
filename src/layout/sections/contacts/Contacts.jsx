import styled from 'styled-components'
import { SectionTitle } from '../../../components/SectionTitle'
import { Button } from '../../../components/Button'

export const Contacts = () => {
    return (
        <StyledContacts>
            <SectionTitle>Contact</SectionTitle>
            <StyledForm>
                <Field placeholder="name" />
                <Field placeholder="subject" />
                <Field placeholder='message' as="textarea" />
                <Button type='submit'>Submit</Button>
            </StyledForm>
        </StyledContacts>
    )
}

const StyledContacts = styled.section`
    min-height: 50vh;
    background-color: #e78d3f;
`

const StyledForm = styled.section`
    max-width: 530px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
`
const Field = styled.input`
    
`