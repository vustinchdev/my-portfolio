import React from 'react'
import iconsSprite from 'assets/images/icons-sprite.svg'

type IconPropsType = {
  iconId: string
  width?: string
  height?: string
  viewBox?: string
}

export const Icon: React.FC<IconPropsType> = (props: IconPropsType) => {
  return (
    <svg
      width={props.width || '100%'}
      height={props.height || '100%'}
      viewBox={props.viewBox || '0 0 120 120'}
      xmlns="http://www.w3.org/2000/svg"
    >
      <use href={`${iconsSprite}#${props.iconId}`} />
    </svg>
  )
}
