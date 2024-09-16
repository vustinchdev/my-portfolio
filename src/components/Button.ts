import styled from 'styled-components'
import { theme } from 'styles/Theme'

export const Button = styled.button`
  width: 134px;
  height: 45px;
  padding: 12px 20px;
  border-radius: 6px;
  gap: 10px;
  background-color: ${theme.colors.accent};
  color: ${theme.colors.secondaryFont};
`
