import type { SerializedStyles } from '@emotion/react'
import Link from 'next/link'
import tw, { css } from 'twin.macro'

type Props = {
  href?: string
  text?: string
  style?: SerializedStyles
}

const Button = ({ href = '/', text = 'ボタン', style = baseStyle }: Props) => {
  return (
    <Link href={href}>
      <a css={style}>{text}</a>
    </Link>
  )
}

const baseStyle = css`
  ${tw`
  px-4 py-2 bg-gray-500 text-white shadow cursor-pointer transition-colors rounded
  hover:bg-gray-400
`}
`

export default Button
