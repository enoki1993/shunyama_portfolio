import type { SerializedStyles } from '@emotion/react'
import tw, { css } from 'twin.macro'

type Props = {
  label: string
  id: string
  type: string
  name: string
  required?: boolean
  _css?: SerializedStyles
}

const TextInput = ({ label, id, type, name, required, _css }: Props) => {
  return (
    <div>
      <label
        htmlFor={id}
        css={css`
          ${tw`text-sm font-bold text-gray-500 block`}
        `}
      >
        {label}
        <span
          css={
            required
              ? css`
                  ${tw`text-red-400 ml-2`}
                `
              : css`
                  ${tw`hidden`}
                `
          }
        >
          ※必須
        </span>
      </label>
      <input
        type={type}
        name={name}
        id={id}
        css={textInputStyle(_css)}
        required={required}
      />
    </div>
  )
}

const textInputStyle = (_css: SerializedStyles): SerializedStyles => css`
  ${tw`
    border rounded w-full py-2 px-3 leading-tight 
    focus:outline-none 
  `}
  ${_css}
`

export default TextInput
