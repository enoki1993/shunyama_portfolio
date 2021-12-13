import tw, { css } from 'twin.macro'
import GoTopBtn from '~/components/atoms/goTopBtn'
import Footer from '~/components/organisms/footer'
import Header from '~/components/organisms/header'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div css={container}>
        <main>{children}</main>
        <Sidebar />
      </div>

      <GoTopBtn />
      <Footer />
    </>
  )
}

const Sidebar = () => {
  return (
    <aside>
      <ul>
        <li>a</li>
        <li>b</li>
        <li>c</li>
      </ul>
    </aside>
  )
}

const container = css`
  ${tw`container mx-auto px-4 md:flex justify-between`}
`

export default Layout
