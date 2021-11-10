import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import Link from 'next/link'
import tw, { css } from 'twin.macro'

const GoTopBtn = () => {
  return (
    <Link href='/'>
      <a css={GoTopBtnStyle}>
        <ArrowDropUpIcon />
      </a>
    </Link>
  )
}

const GoTopBtnStyle = css`
  ${tw`
  fixed bottom-10 right-10 z-50 px-4 py-4 text-white bg-gray-800 shadow rounded-full cursor-pointer
  hover:bg-gray-600
`}
`

export default GoTopBtn
