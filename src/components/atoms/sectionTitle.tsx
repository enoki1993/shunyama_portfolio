import tw, { css } from 'twin.macro'

const SectionTitle = ({ text = '章見出し' }: { text: string }) => (
  <h2 css={title}>{text}</h2>
)

const title = css`
  ${tw`mb-10 text-3xl font-bold text-center uppercase`}
`

export default SectionTitle
