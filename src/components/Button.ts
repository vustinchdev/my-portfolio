import styled from 'styled-components'
import { theme } from 'styles/Theme'

export const Button = styled.button`
  font-family: 'Montserrat';
  font-size: 16px;
  font-weight: bold;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  padding: 12px 20px;
  border-radius: 6px;
  background-color: ${theme.colors.accent};
  color: ${theme.colors.secondaryFont};
`
