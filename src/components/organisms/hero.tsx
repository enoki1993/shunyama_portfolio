import tw, { css } from 'twin.macro'

const Hero = () => (
  <section id='hero' css={section}>
    <div css={inner}>
      <h2 css={siteDescription}>
        福島県郡山市在住のWebエンジニア
        <br />
        ばなめいのポートフォリオサイトです。
      </h2>
    </div>
  </section>
)

const section = css`
  ${tw` flex items-center h-96 bg-transparent `}
`

const inner = css`
  ${tw`container mx-auto px-10 text-right
`}
`

const siteDescription = css`
  ${tw`text-xl text-white
`}
`

export default Hero
