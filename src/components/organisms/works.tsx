import tw, { css } from 'twin.macro'
import Button from '~/components/atoms/button'
import SectionHeader from '~/components/molecules/sectionHeader'

const Works = () => (
  <section id='works' css={section}>
    <SectionHeader
      en='works'
      title='制作実績'
      caption='これまでの制作物です。随時更新しています。'
    />
    <div css={inner}>
      <Button href='works' text='一覧を見る' _css={button} />
    </div>
  </section>
)

const section = css`
  ${tw`py-10`}
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

export default Works
