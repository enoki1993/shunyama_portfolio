import tw, { css } from 'twin.macro'
import { getStyleByBool } from '~/utils/getStyle'

const Required = ({ isRequired }: { isRequired: boolean }) => (
  <span css={getStyleByBool(isRequired, required)}>※必須</span>
)

const required = {
  true: css`
    ${tw`text-sm text-red-400 ml-2`}
  `,
  false: css`
    ${tw`hidden`}
  `,
}

export default Required
