import Link from 'next/link'
import { useState } from 'react'
import tw, { css } from 'twin.macro'
import GlobalNav from '../atoms/globalNav'
import ToggleBtn from '../atoms/toggleBtn'

const Header = () => {
  // メニュー開閉状態の管理
  const [openMenu, setOpenMenu] = useState(false)
  const handleClick = () => {
    setOpenMenu(!openMenu)
  }

  return (
    <header
      id='header'
      css={css`
        ${tw`sticky top-0 z-50 py-2 text-white bg-gray-800`}
      `}
    >
      <div
        css={css`
          ${tw`container mx-auto px-4`}
        `}
      >
        <div
          css={css`
            ${tw`flex justify-between items-center`}
          `}
        >
          <Link href='/'>
            <a>
              <h1
                css={css`
                  ${tw`md:text-xl`}
                `}
              >
                Vannamei&rsquo;s Portfolio
              </h1>
            </a>
          </Link>
          <ToggleBtn openMenu={openMenu} handleClick={handleClick} />
        </div>
        <GlobalNav openMenu={openMenu} />
      </div>
    </header>
  )
}

export default Header
