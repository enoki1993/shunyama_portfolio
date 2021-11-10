import GoTopBtn from '~/components/atoms/goTopBtn'
import Footer from '~/components/molecules/footer'
import Header from '~/components/molecules/header'

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
