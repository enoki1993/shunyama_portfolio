import type { SerializedStyles } from '@emotion/react'
import tw, { css } from 'twin.macro'
import Label from '~/components/atoms/label'
import Required from '~/components/atoms/required'

type Props = {
  text: string
  id: string
  isRequired: boolean
  _css: SerializedStyles
}

const TextInput = ({ text, id, isRequired, _css }: Props) => (
  <div css={_css}>
    <div css={labelWrapper}>
      <Label id={id} text={text} />
      <Required isRequired={isRequired} />
    </div>
    <textarea id={id} css={textarea} required={isRequired}></textarea>
  </div>
)

const labelWrapper = css`
  ${tw`flex items-center`}
`

const textarea = css`
  ${tw`
    border rounded w-full py-2 px-3 leading-tight 
    focus:outline-none
  `}
`

export default TextInput
