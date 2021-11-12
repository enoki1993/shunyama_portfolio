import type { SerializedStyles } from '@emotion/react'
import { useState } from 'react'
import tw, { css } from 'twin.macro'

type Props = {
  type: string
  name: string
  id: string
  isRequired?: boolean
  _css?: SerializedStyles
}

const TextBox = ({ type, name, id, isRequired, _css }: Props) => {
  const [value, setValue] = useState('')
  const handleChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <input
      type={type}
      name={name}
      id={id}
      css={[textBox, _css]}
      value={value}
      onChange={(e) => handleChange(e)}
      required={isRequired}
    />
  )
}
const textBox = css`
  ${tw`
    border rounded w-full py-2 px-3 leading-tight 
  `}
`
export default TextBox
