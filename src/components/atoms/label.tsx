import tw, { css } from 'twin.macro'

const Label = ({ id, text }: { id: string; text: string }) => (
  <label htmlFor={id} css={label}>
    {text}
  </label>
)

const label = css`
  ${tw`text-sm font-bold text-gray-500 block`}
`

export default Label
