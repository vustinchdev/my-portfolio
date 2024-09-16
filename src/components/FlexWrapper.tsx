import styled from 'styled-components'

type FlexWrapperPropsType = {
  direction?: string
  justify?: string
  align?: string
  wrap?: string
  rowGap?: string
  columnGap?: string
}

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  justify-content: ${props => props.justify || 'start'};
  align-items: ${props => props.align || 'stretch'};
  flex-wrap: ${props => props.wrap || 'nowrap'};
  row-gap: ${props => props.rowGap || '0'};
  column-gap: ${props => props.columnGap || '0'};
  height: 100%;
`
