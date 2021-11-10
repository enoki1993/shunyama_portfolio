import tw, { css } from 'twin.macro'

type Props = {
  text: string
}

const SectionTitle = ({ text = '章見出し' }: Props) => {
  return (
    <h2
      css={css`
        ${tw`mb-10 text-3xl font-bold text-center uppercase`}
      `}
    >
      {text}
    </h2>
  )
}

export default SectionTitle
