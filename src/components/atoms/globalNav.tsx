import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined'
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined'
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined'
import FilterOutlinedIcon from '@mui/icons-material/FilterOutlined'
import Link from 'next/link'
import tw, { css } from 'twin.macro'

type Props = {
  openMenu: boolean
}

const GlobalNav = ({ openMenu }: Props) => {
  return (
    <nav css={nav(openMenu)}>
      <ul css={list}>
        <li css={item}>
          <Link href='/#about' passHref={true}>
            <a css={itemInner}>
              <AccountCircleOutlinedIcon css={icon} />
              about
            </a>
          </Link>
        </li>
        <li css={item}>
          <Link href='/#skill' passHref={true}>
            <a css={itemInner}>
              <BuildOutlinedIcon css={icon} />
              skill
            </a>
          </Link>
        </li>
        <li css={item}>
          <Link href='/works' passHref={true}>
            <a css={itemInner}>
              <FilterOutlinedIcon css={icon} />
              works
            </a>
          </Link>
        </li>
        <li css={item}>
          <Link href='/blog' passHref={true}>
            <a css={itemInner}>
              <CreateOutlinedIcon css={icon} />
              blog
            </a>
          </Link>
        </li>
        <li>
          <Link href='/#contact' passHref={true}>
            <a css={itemInner}>
              <ContactPageOutlinedIcon css={icon} />
              contact
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

const nav = (openMenu: boolean) => {
  if (openMenu) {
    return css`
      ${tw`block`}
    `
  } else {
    return css`
      ${tw`hidden md:block`}
    `
  }
}

const list = css`
  ${tw`
  md:flex justify-end
`}
`

const item = css`
  ${tw`
  border-b md:border-none
`}
`

const itemInner = css`
  ${tw`
  block px-8 py-3 uppercase cursor-pointer rounded transition-colors 
  md:flex flex-col items-center
  hover:bg-gray-600
  focus:bg-gray-600 outline-none
`}
`

const icon = css`
  ${tw`mr-2 md:mr-0`}
`

export default GlobalNav
