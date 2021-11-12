import tw, { css } from 'twin.macro'

const Hero = () => (
  <section id='hero' css={section}>
    <div css={inner}>
      <h2>Shun Yamanaka</h2>
      <p>
        福島県郡山市在住の駆け出しWebエンジニア。Webサイトのコーディングを基本として、簡単なデザインやWordPressのカスタマイズ等を承っています。
      </p>
    </div>
  </section>
)

const section = css`
  ${tw` flex items-center h-80 bg-blue-100 `}
`

const inner = css`
  ${tw`container mx-auto px-10 border-red-400 border
`}
`

export default Hero
