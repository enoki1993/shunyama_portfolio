import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import tw, { css } from 'twin.macro'

const GoTopBtn = () => {
  const [isShow, setIsShow] = useState(false)

  useEffect(() => {
    const handleShow = () => {
      if (window.scrollY > 500) {
        setIsShow(true)
      } else {
        setIsShow(false)
      }
    }

    window.addEventListener('scroll', handleShow)
    return () => {
      window.removeEventListener('scroll', handleShow)
    }
  }, [])

  return (
    <Link href='/' passHref={true}>
      <a css={goTop(isShow)}>
        <ArrowDropUpIcon />
      </a>
    </Link>
  )
}

const goTop = (isShow: boolean) => {
  if (isShow) {
    return css`
      ${tw`
      fixed bottom-10 right-10 z-50 px-4 py-4 text-white bg-gray-800 shadow rounded-full transition-colors cursor-pointer
      hover:bg-gray-600
      `}
    `
  }
}

export default GoTopBtn
