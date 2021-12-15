import Link from 'next/link'
import tw, { css } from 'twin.macro'

type Props = {
  href: string
  muiIcon: any
  text: string
}

const NavItem = ({ href, muiIcon, text }: Props) => (
  <Link href={href} passHref={true}>
    <a css={itemInner}>
      {muiIcon}
      {text}
    </a>
  </Link>
)

const itemInner = css`
  ${tw`
  block px-8 py-3 uppercase cursor-pointer rounded transition-colors 
  md:flex flex-col items-center
  hover:bg-gray-600
  focus:bg-gray-600 outline-none
`}
`

export default NavItem
