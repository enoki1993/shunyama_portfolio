import Header from '~/components/common/header'
import Footer from '~/components/common/footer'

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout
