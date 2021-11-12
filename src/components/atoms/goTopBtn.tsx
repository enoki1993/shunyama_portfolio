import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import Link from 'next/link'
import tw, { css } from 'twin.macro'

const GoTopBtn = () => (
  <Link href='/' passHref={true}>
    <a css={goTop}>
      <ArrowDropUpIcon />
    </a>
  </Link>
)

const goTop = css`
  ${tw`
  fixed bottom-10 right-10 z-50 px-4 py-4 text-white bg-gray-800 shadow rounded-full transition-all cursor-pointer
  hover:bg-gray-600
`}
`

export default GoTopBtn
