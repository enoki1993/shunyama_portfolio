import tw, { css } from 'twin.macro'
import Logo from '~/components/atoms/logo'

const Footer = () => (
  <footer id='footer' css={footer}>
    <div css={copy}>
      <small>©2021 Vannamei</small>
    </div>
  </footer>
)

const footer = css`
  ${tw`bg-gray-300`}
`

const copy = css`
  ${tw`w-full text-center text-white bg-gray-600`}
`

export default Footer
