import React from "react"
import { Button } from "../../../../components/Button"
import { S } from "../Works_Styles"


type WorkPropsType = {
    title: string,
    text: string,
    src: string
}

export const Work: React.FC<WorkPropsType> = (props: WorkPropsType) => {
    return (
        <S.Work>
            <S.ImageWrapper>
                <S.Image src={props.src} alt="" />
                <Button>View project</Button>
            </S.ImageWrapper>
            <S.Description>
                <S.Title>{props.title}</S.Title>
                <S.Text>{props.text}</S.Text>
            </S.Description>
        </S.Work>
    )
}

