import GlobalNav from 'components/globalNav'
import Footer from 'components/footer'

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <GlobalNav />
      {children}
      <Footer />
    </>
  )
}

export default Layout
