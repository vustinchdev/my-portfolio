import styled from "styled-components"
import { theme } from "../../../../styles/Theme"
import { Button } from "../../../../components/Button"

type WorkPropsType = {
    title: string,
    text: string,
    src: string
}

export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <ImageWrapper>
                <Image src={props.src} alt="" />
                <Button>View project</Button>
            </ImageWrapper>
            <Description>
                <Title>{props.title}</Title>
                <Text>{props.text}</Text>
            </Description>
        </StyledWork>
    )
}

const StyledWork = styled.div`
    max-width: 520px;
    width: 100%;
    background-color: ${theme.colors.secondaryBg};
    border-radius: 6px;
    box-shadow: 2px 2px 32px 0 #28262C;
    overflow: hidden;
`

const Image = styled.img`
    width: 100%;
    height: 380px;
`

const Description = styled.div`
    padding: 30px 15px;
`

const Title = styled.h3`
    font-size: 20px;
    font-weight: 600;
    color: ${theme.colors.titleFont};
`

const Text = styled.p`
letter-spacing: 0.04em;
margin-top: 20px;
`

const ImageWrapper = styled.div`
    position: relative;

    &:hover {

        ${Button} {
            opacity: 1;
        }

        &::before {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(4px);
    }
    }

    ${Button} {
        opacity: 0;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
`