import tw, { css } from 'twin.macro'
import Button from '~/components/atoms/button'
import Contact from '~/components/organisms/contact'
import Layout from '~/components/templates/single-column'

const Home = () => (
  <Layout>
    <Button href='/works' text='制作実績一覧' _css={worksBtn} />
    <Contact />
  </Layout>
)

const worksBtn = css`
  ${tw`bg-green-600 hover:bg-green-500`}
`

export default Home
