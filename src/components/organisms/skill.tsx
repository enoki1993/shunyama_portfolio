import tw, { css } from 'twin.macro'
import SectionHeader from '~/components/molecules/sectionHeader'
import SkillItem from '~/components/molecules/skillItem'

const Skill = () => (
  <section id='skill' css={section}>
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
    img: '/img/html.svg',
    name: 'HTML',
    desc: 'HTML Living Standardに則り、明確な文章構造を意識しつつアクセシビリティに配慮しています。テンプレートエンジンとしてPugも使用しています。',
  },
  {
    id: '2',
    img: '/img/sass.svg',
    name: 'CSS(Sass)',
    desc: 'BEMやFLOCSSを用いたクラス設計やSassモジュールの利用により、保守管理が楽なCSSを作ります。BootstrapやTailwind等のCSSフレームワーク、Emotion等のCSS in JSライブラリも使用しています。',
  },
  {
    id: '3',
    img: '/img/ts.svg',
    name: 'JavaScript(TypeScript)',
    desc: '必要に応じてライブラリを使用し、CSSとDOM操作によるアニメーションの実装が出来ます。Webpackを使い、JavaScriptへのトランスパイルや最適化を行っています。',
  },
  {
    id: '4',
    img: '/img/react.svg',
    name: 'React/Next.js',
    desc: 'コンポーネント間の状態管理やReact用ライブラリを用いて、WebサイトのUIを作成します。ReactフレームワークとしてNext.jsを利用し、画面遷移が非常に高速なWebサイトを作成します。当ポートフォリオサイトでもNext.jsを採用しています。',
  },
  {
    id: '5',
    img: '/img/wp.svg',
    name: 'WordPress',
    desc: '既存のテーマを元にしたカスタマイズや、静的サイトにWordPressを組み込む事が出来ます。',
  },
  {
    id: '6',
    img: '/img/cc.svg',
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
