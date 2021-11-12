import tw, { css } from 'twin.macro'
import SectionHeader from '~/components/molecules/sectionHeader'
import SkillItem from '~/components/molecules/skillItem'

const Skill = () => (
  <section id='#skill' css={section}>
    <div css={container}>
      <SectionHeader en='skill' title='スキル' />
      <div css={grid}>
        {skillItemDatas.map((skillItemData) => (
          <SkillItem
            key={skillItemData.id}
            img={skillItemData.img}
            name={skillItemData.name}
            desc={skillItemData.desc}
          />
        ))}
      </div>
    </div>
  </section>
)

const skillItemDatas = [
  {
    id: '1',
    img: '',
    name: 'HTML(Pug)&CSS(Sass)',
    desc: 'デザインやコンテンツ内容に応じた適切なマークアップだけでなく、Webアクセシビリティや構造化への対応など内部SEO対策も意識しています。Sassを始めとしてTailwindCSSなどのフレームワークを利用した',
  },
  {
    id: '2',
    img: '',
    name: 'JavaScript(TypeScript)',
    desc: 'TypeScriptを用いつつ、堅牢なコードを書くことを心がけています。',
  },
  {
    id: '3',
    img: '',
    name: 'React/Next.js',
    desc: 'Hooksを利用したReactコンポーネントを作成出来ます。Next.jsを用いて動的コンテンツを含む非常に高速なWebサイトを作成出来ます。このポートフォリオはNext.jsで製作されています。',
  },
  {
    id: '4',
    img: '',
    name: 'PHP/MySQL',
    desc: 'デザインやコンテンツ内容に応じた適切なマークアップだけでなく、Webアクセシビリティや構造化への対応など内部SEO対策も意識しています。Sassを始めとしてTailwindCSSなどのフレームワークを利用した',
  },
  {
    id: '5',
    img: '',
    name: 'WordPress',
    desc: 'デザインやコンテンツ内容に応じた適切なマークアップだけでなく、Webアクセシビリティや構造化への対応など内部SEO対策も意識しています。Sassを始めとしてTailwindCSSなどのフレームワークを利用した',
  },
  {
    id: '6',
    img: '',
    name: 'Photoshop/Illustrator/XD',
    desc: 'Adobe Creative Cloudの各種デザインツールを使って、画像の編集やベクター画像の作成、プロトタイプ作成が出来ます。',
  },
]

const section = css`
  ${tw`py-8 bg-blue-100 lg:py-12`}
`

const container = css`
  ${tw`container mx-auto px-4`}
`

const grid = css`
  ${tw`grid sm:grid-cols-2 xl:grid-cols-3 gap-12 xl:gap-16`}
`

export default Skill
