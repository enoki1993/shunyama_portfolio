import Link from "next/link"
import { GetStaticProps, GetStaticPaths } from "next"
import { ParsedUrlQuery } from "node:querystring"
import {client} from 'libs/client'
import Layout from "components/layout"

interface Props {
  blogContent: BlogContent
}

interface Params extends ParsedUrlQuery {
  id: string
}

const BlogId = ({ blogContent }: Props ) => {
  return (
    <Layout>
      <main>
        <h1>{blogContent.title}</h1>
        <p>{blogContent.publishedAt}</p>
        <ul>
          {blogContent.category.map(({ name }, index) => <li key={index}>{ name}</li>)}
        </ul>
        <div
          dangerouslySetInnerHTML={{
            __html: `${blogContent.body}`,
          }}
        />
      </main>
    </Layout>
  )
}

export default BlogId

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const data = await client.get<BlogResponseData>({ endpoint: "blog" })

  const paths = data.contents.map((content) => `/blog/${content.id}`);

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps<Props, Params> = async context => {
  const id = context.params.id

  const data = await client.get<BlogContent>({ endpoint: "blog", contentId: id })

  return {
    props: {
      blogContent: data,
    },
  }
}
