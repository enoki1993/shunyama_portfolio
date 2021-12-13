import tw, { css } from 'twin.macro'
import Logo from '~/components/atoms/logo'

const Footer = () => (
  <footer id='footer' css={footer}>
    <div css={inner}>
      <div css={item}>
        <Logo text='Vannamei&rsquo;s Portfolio' />
      </div>
      <div css={item}>なんとか</div> <div css={item}>かんとか</div>
    </div>
    <div css={copy}>
      <small>©2021 Vannamei</small>
    </div>
  </footer>
)

const footer = css`
  ${tw``}
`

const inner = css`
  ${tw`container mx-auto flex justify-between px-4 border`}
`

const item = css`
  ${tw`flex-1 border-red-400 border`}
`

const copy = css`
  ${tw`w-full text-center text-white bg-gray-600`}
`

export default Footer
