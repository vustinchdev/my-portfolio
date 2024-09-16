import styled from 'styled-components'
import { theme } from '../../styles/Theme'
const Header = styled.header`
  padding: 20px 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99999;
  background-color: ${theme.colors.headerBg};

  @media ${theme.media.tablet} {
    background-color: transparent;
  }
`

export const S = {
  Header,
}
