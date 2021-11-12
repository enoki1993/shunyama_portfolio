import type { SerializedStyles } from '@emotion/react'
import Link from 'next/link'
import tw, { css } from 'twin.macro'

type Props = {
  href?: string
  text?: string
  _css?: SerializedStyles
}

const Button = ({ href = '/', text = 'ボタン', _css }: Props) => (
  <Link href={href}>
    <a css={[base, _css]}>{text}</a>
  </Link>
)

const base = css`
  ${tw`
  px-4 py-2 bg-gray-500 text-white shadow cursor-pointer transition-colors rounded
  hover:bg-gray-400
`}
`

export default Button
