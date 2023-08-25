import styled from "styled-components"

type WorkPropsType = {
    title: string,
    text: string,
    src: string
}

export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <Image src={props.src} alt="" />
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>
        </StyledWork>
    )
}

const StyledWork = styled.div`
    background-color: #e1ec8d;
    max-width: 520px;
    width: 100%;
`

const Image = styled.img`
    width: 100%;
    height: 380px;
    object-fit: cover;
`

const Title = styled.h3`

`

const Text = styled.p`
    
`