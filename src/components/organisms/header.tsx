import { useState } from 'react'
import tw, { css } from 'twin.macro'
import Logo from '~/components/atoms/logo'
import ToggleBtn from '~/components/atoms/toggleBtn'
import GlobalNav from '~/components/molecules/globalNav'

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const handleClick = () => {
    setOpenMenu(!openMenu)
  }

  return (
    <header id='header' css={header}>
      <div css={container}>
        <div css={inner}>
          <Logo text='Vannamei&rsquo;s Portfolio' />
          <ToggleBtn openMenu={openMenu} handleClick={handleClick} />
        </div>
        <GlobalNav openMenu={openMenu} />
      </div>
    </header>
  )
}

const header = css`
  ${tw`sticky top-0 z-50 py-2 text-white bg-gray-900 shadow-md`}
`

const container = css`
  ${tw`container mx-auto px-4`}
`

const inner = css`
  ${tw`flex justify-between items-center`}
`

export default Header
