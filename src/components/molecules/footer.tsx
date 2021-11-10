import tw, { css } from 'twin.macro'

const Footer = () => {
  return (
    <footer id='footer'>
      <div css={footerInner}>
        <small>©2021 Vannamei</small>
      </div>
    </footer>
  )
}

const footerInner = css`
  ${tw`container mx-auto px-4 border`}
`

export default Footer
