import Link from 'next/link'
import tw, { css } from 'twin.macro'

const Logo = ({ text }: { text: string }) => (
  <Link href='/' passHref={true}>
    <a>
      <h1 css={logo}>{text}</h1>
    </a>
  </Link>
)

const logo = css`
  ${tw`md:text-xl`}
`

export default Logo
