import Button from '~/components/atoms/button'
import Contact from '~/components/organisms/contact'
import Layout from '~/components/templates/single-column'

const Home = () => {
  return (
    <Layout>
      <Button href='/works' text='制作実績一覧' />
      <Contact />
    </Layout>
  )
}

export default Home
