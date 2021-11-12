import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined'
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined'
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined'
import FilterOutlinedIcon from '@mui/icons-material/FilterOutlined'
import tw, { css } from 'twin.macro'
import NavLink from '~/components/atoms/navLink'

const GlobalNav = ({ openMenu }: { openMenu: boolean }) => (
  <nav css={nav(openMenu)}>
    <ul css={list}>
      <li css={item}>
        <NavLink
          href='/#about'
          muiIcon={<AccountCircleOutlinedIcon css={icon} />}
          text='about'
        />
      </li>
      <li css={item}>
        <NavLink
          href='/#skill'
          muiIcon={<BuildOutlinedIcon css={icon} />}
          text='skill'
        />
      </li>
      <li css={item}>
        <NavLink
          href='/works'
          muiIcon={<FilterOutlinedIcon css={icon} />}
          text='works'
        />
      </li>
      <li css={item}>
        <NavLink
          href='/blog'
          muiIcon={<CreateOutlinedIcon css={icon} />}
          text='blog'
        />
      </li>
      <li>
        <NavLink
          href='/#contact'
          muiIcon={<ContactPageOutlinedIcon css={icon} />}
          text='contact'
        />
      </li>
    </ul>
  </nav>
)

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

const icon = css`
  ${tw`mr-2 md:mr-0`}
`

export default GlobalNav
