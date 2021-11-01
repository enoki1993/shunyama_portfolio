import Link from 'next/link'

const GlobalNav: React.FC = () => {
  return (
    <nav>
      <ul className="flex">
        <li>
          <Link href="/#about">
            <a>about</a>
          </Link>
        </li>
        <li>
          <Link href="/#skill">
            <a>skill</a>
          </Link>
        </li>
        <li>
          <Link href="/works">
            <a>works</a>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <a>blog</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default GlobalNav
