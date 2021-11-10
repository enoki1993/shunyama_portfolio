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
    <nav
      css={
        openMenu
          ? css`
              ${tw`block`}
            `
          : css`
              ${tw`hidden md:block`}
            `
      }
    >
      <ul css={gNavInnerStyle}>
        <li css={gNavItemStyle}>
          <Link href='/#about'>
            <a css={gNavItemLinkStyle}>
              <AccountCircleOutlinedIcon
                css={css`
                  ${tw`mr-2 md:mr-0`}
                `}
              />
              about
            </a>
          </Link>
        </li>
        <li css={gNavItemStyle}>
          <Link href='/#skill'>
            <a css={gNavItemLinkStyle}>
              <BuildOutlinedIcon
                css={css`
                  ${tw`mr-2 md:mr-0`}
                `}
              />
              skill
            </a>
          </Link>
        </li>
        <li css={gNavItemStyle}>
          <Link href='/works'>
            <a css={gNavItemLinkStyle}>
              <FilterOutlinedIcon
                css={css`
                  ${tw`mr-2 md:mr-0`}
                `}
              />
              works
            </a>
          </Link>
        </li>
        <li css={gNavItemStyle}>
          <Link href='/blog'>
            <a css={gNavItemLinkStyle}>
              <CreateOutlinedIcon
                css={css`
                  ${tw`mr-2 md:mr-0`}
                `}
              />
              blog
            </a>
          </Link>
        </li>
        <li>
          <Link href='/#contact'>
            <a css={gNavItemLinkStyle}>
              <ContactPageOutlinedIcon
                css={css`
                  ${tw`mr-2 md:mr-0`}
                `}
              />
              contact
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

const gNavInnerStyle = css`
  ${tw`
  md:flex md:justify-end
`}
`

const gNavItemStyle = css`
  ${tw`
  border-b md:border-none
`}
`

const gNavItemLinkStyle = css`
  ${tw`
  block px-4 py-3 uppercase cursor-pointer transition-colors 
  md:flex flex-col items-center
  hover:bg-gray-600 rounded
`}
`

export default GlobalNav
