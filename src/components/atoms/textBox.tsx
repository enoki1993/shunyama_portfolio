import type { SerializedStyles } from '@emotion/react'
import tw, { css } from 'twin.macro'

type Props = {
  type: string
  name: string
  id: string
  isRequired?: boolean
  _css?: SerializedStyles
}

const TextBox = ({ type, name, id, isRequired, _css }: Props) => (
  <input
    type={type}
    name={name}
    id={id}
    css={[textBox, _css]}
    required={isRequired}
  />
)

const textBox = css`
  ${tw`
    border rounded w-full py-2 px-3 leading-tight 
    focus:outline-none 
  `}
`
export default TextBox
