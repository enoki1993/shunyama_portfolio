import Link from 'next/link'
import { GetStaticProps } from 'next'
import { client } from '~/libs/client'
import Layout from '~/components/layout/layout'

interface Props {
  blogContents: BlogContent[]
}

const Blog = ({ blogContents }: Props) => {
  return (
    <Layout>
      <div>
        <ul>
          {blogContents.map((blogContent) => (
            <li key={blogContent.id}>
              <Link href={`/blog/${blogContent.id}`}>
                <a>{blogContent.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Link href="/">
        <a>TOP</a>
      </Link>
    </Layout>
  )
}

export default Blog

export const getStaticProps: GetStaticProps = async () => {
  const data = await client.get<BlogResponseData>({ endpoint: 'blog' })
  return {
    props: {
      blogContents: data.contents,
    },
  }
}
