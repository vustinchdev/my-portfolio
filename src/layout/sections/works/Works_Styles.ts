import styled from 'styled-components'
import { theme } from 'styles/Theme'
import { Button } from 'components/Button'

const Works = styled.section`
  position: relative;
`
const Work = styled.div`
  max-width: 520px;
  width: 100%;
  background-color: ${theme.colors.workBg};
  border-radius: 6px;
  box-shadow: 2px 2px 32px #28262c;
  overflow: hidden;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
`

const Description = styled.div`
  padding: 30px 15px;

  @media ${theme.media.mobile} {
    padding: 15px 10px;
  }
`

const Title = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: ${theme.colors.titleFont};
`

const Text = styled.p`
  letter-spacing: 0.04em;
  margin-top: 20px;

  @media ${theme.media.mobile} {
    margin-top: 15px;
  }
`
const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 35px;
`

const ImageWrapper = styled.div`
  position: relative;

  ${ButtonWrapper} {
    opacity: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    transition: ${theme.animations.transition};
  }

  &::before {
    width: 100%;
    height: 100%;
  }

  &::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(2px);
    opacity: 0;
    transition: ${theme.animations.transition};
  }

  &:hover {
    &::before {
      opacity: 1;
    }

    ${ButtonWrapper} {
      opacity: 1;
      /* transform: translate(-50%, -50%); */
    }
  }
`

export const S = {
  Works,
  Work,
  Image,
  Description,
  Title,
  Text,
  ImageWrapper,
  ButtonWrapper,
}
