import Link from "next/link"
import Layout from "components/layout"

const Home: React.FC = () => {
  return (
    <Layout>
      <Link href="/about">
        <a>About</a>
      </Link>
    </Layout>
  )
}

export default Home
