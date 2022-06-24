import { SerializedStyles } from '@emotion/utils'
import tw, { css } from 'twin.macro'

const SectionHeader = ({
  en = 'heading',
  title = '章見出し',
  caption = '',
  isAlt = false
}: {
  en: string
  title: string
  caption?: string
  isAlt?: boolean
}) => (
  <>
    <p css={enHeading}>{en}</p>
    <h2 css={heading(isAlt)}>{title}</h2>
    {caption && <p css={cap(isAlt)}>{caption}</p>}
  </>
)

const enHeading = css`
  ${tw`text-purple-600 uppercase 
  md:mb-3 
  lg:text-lg font-semibold text-center mb-2
  `}
`

const heading = (isAlt: boolean): SerializedStyles => {
  if (isAlt) {
    return css`
      ${tw`text-gray-300 text-2xl
      md:mb-6
      lg:text-3xl font-bold text-center mb-4`}
    `
  } else {
    return css`
      ${tw`text-gray-800 text-2xl
      md:mb-6
      lg:text-3xl font-bold text-center mb-4`}
    `
  }
}
const cap = (isAlt: boolean): SerializedStyles => {
  if (isAlt) {
    return css`
    ${tw`max-w-screen-md text-white mb-6 md:text-lg text-center mx-auto`}
  `
  } else {
    return css`
    ${tw`max-w-screen-md text-gray-500 mb-6 md:text-lg text-center mx-auto`}
  `
  }

}
export default SectionHeader
