import React, { FormEvent, useRef} from 'react'
import { SectionTitle } from '../../../components/SectionTitle'
import { Button } from '../../../components/Button'
import { Container } from '../../../components/Container'
import { S } from './Contacts_Styles'

import axios from 'axios'

export const Contacts: React.FC = () => {
    const formRef = useRef<HTMLFormElement | null>(null)

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (formRef.current) {
            const formData = new FormData(formRef.current)
            const data = Object.fromEntries(formData)

            try {
                await axios.post('http://localhost:5000/sendMessage', data)
                formRef.current.reset()
            } catch (error) {
    
            }
        }
    }
    
    return (
        <S.Contacts id='contact'>
            <Container>
                <SectionTitle>Contact</SectionTitle>
                
                <S.Form ref={formRef} onSubmit={handleSubmit}>
                    <S.Field placeholder="name" name='name' required/>
                    <S.Field placeholder='your contact details' name='contactDetails' required/>
                    <S.Field placeholder="subject" name='subject' required/>
                    <S.Field placeholder='message' as="textarea" name='message' required/>
                    <Button type='submit'>Submit</Button>
                </S.Form>
            </Container>
        </S.Contacts>
    )
}

