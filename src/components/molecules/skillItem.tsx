import tw, { css } from 'twin.macro'

type Props = {
  img: string
  name: string
  desc: string
}

const SkillItem = ({ img, name, desc }: Props) => (
  <div css={inner}>
    <div css={imgWrapper}>{img}</div>
    <h3 css={skillName}>{name}</h3>
    <p css={description}>{desc}</p>
  </div>
)

const inner = css`
  ${tw`flex flex-col items-center`}
`

const imgWrapper = css`
  ${tw`w-12 md:w-14 h-12 md:h-14 flex justify-center items-center text-indigo-500 mb-2 sm:mb-4`}
`

const skillName = css`
  ${tw`text-lg md:text-xl font-semibold text-center mb-2`}
`

const description = css`
  ${tw`text-gray-500 text-center mb-2`}
`

export default SkillItem
