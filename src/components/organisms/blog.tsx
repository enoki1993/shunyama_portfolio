import tw, { css } from 'twin.macro'
import Button from '~/components/atoms/button'
import SectionHeader from '~/components/molecules/sectionHeader'

const Blog = () => (
  <section id='blog' css={section}>
    <SectionHeader
      en='blog'
      title='ブログ'
      caption='技術的な事や日常について不定期に更新しています。'
    />
    <div css={inner}>
      <Button href='/blog' text='一覧を見る' _css={button} />
    </div>
  </section>
)

const section = css`
  ${tw`py-10 bg-blue-100`}
`

const inner = css`
  ${tw`
  container border mx-auto text-center
`}
`

const button = css`
  ${tw`
  bg-pink-600 px-10
`}
`

export default Blog
