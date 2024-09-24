import React, { FormEvent, useRef } from 'react'


import { S } from './Contacts_Styles'

import axios from 'axios'
import { Container } from 'components/Container'
import { SectionTitle } from 'components/SectionTitle'
import { Button } from 'components/Button'
import { toast } from 'react-toastify'



export const Contacts: React.FC = () => {
  const formRef = useRef<HTMLFormElement | null>(null)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (formRef.current) {
      const formData = new FormData(formRef.current)
      const data = Object.fromEntries(formData)

      try {
        await axios.post('https://portfolio-server-gilt-one.vercel.app/sendMessage', data)
        toast.success('Message sent successfully.')
        formRef.current.reset()
      } catch (error) {
        toast.error('Error sending message, please try again.')
      }
    }
  }

  return (
    <S.Contacts id="contact">
      <Container>
        <SectionTitle>Contact</SectionTitle>
        <S.Form ref={formRef} onSubmit={handleSubmit}>
          <S.Field placeholder="name" name="name" required />
          <S.Field placeholder="your contact details" name="contactDetails" required />
          <S.Field placeholder="subject" name="subject" required />
          <S.Field placeholder="message" as="textarea" name="message" required />
          <Button type="submit">Submit</Button>
        </S.Form>
      </Container>
    </S.Contacts>
  )
}
