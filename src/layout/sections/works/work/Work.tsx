import React from 'react'
import { Button } from 'components/Button'
import { S } from '../Works_Styles'

type WorkPropsType = {
  title: string
  text: string
  src: string
  demoLink: string
  codeLink: string
}

export const Work: React.FC<WorkPropsType> = (props: WorkPropsType) => {
  return (
    <S.Work>
      <S.ImageWrapper>
        <S.Image src={props.src} alt="" />
        <S.ButtonWrapper>
          <Button as={'a'} href={props.demoLink} target="_blank">
            Demo
          </Button>
          <Button as={'a'} href={props.codeLink} target="_blank">
            Code
          </Button>
        </S.ButtonWrapper>
      </S.ImageWrapper>
      <S.Description>
        <S.Title>{props.title}</S.Title>
        <S.Text>{props.text}</S.Text>
      </S.Description>
    </S.Work>
  )
}
