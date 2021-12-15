import type { SerializedStyles } from '@emotion/react'
import tw, { css } from 'twin.macro'
import Label from '~/components/atoms/label'
import Required from '~/components/atoms/required'
import TextBox from '~/components/atoms/textBox'

type Props = {
  id: string
  text: string
  isRequired?: boolean
  type: string
  name: string
  _css: SerializedStyles
}

const TextInput = ({ id, text, isRequired, type, name, _css }: Props) => (
  <div css={_css}>
    <div css={labelWrapper}>
      <Label id={id} text={text} />
      <Required isRequired={isRequired} />
    </div>
    <TextBox type={type} name={name} id={id} isRequired={isRequired} />
  </div>
)

const labelWrapper = css`
  ${tw`flex items-center`}
`

export default TextInput
