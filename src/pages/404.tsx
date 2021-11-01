import Link from 'next/link'
import Layout from '~/components/layout/layout'

const NotFound: React.FC = () => {
  return (
    <Layout>
      ページが存在しません。
      <Link href="/">
        <a>TOP</a>
      </Link>
    </Layout>
  )
}

export default NotFound
