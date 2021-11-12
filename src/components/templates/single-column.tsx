import GoTopBtn from '~/components/atoms/goTopBtn'
import Footer from '~/components/organisms/footer'
import Header from '~/components/organisms/header'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <GoTopBtn />
      <Footer />
    </>
  )
}

export default Layout
