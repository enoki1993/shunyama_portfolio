import tw, { css } from 'twin.macro'

const Hero = () => (
  <section id='hero' css={section}>
    <div css={inner}>
      <h2 css={siteDescription}>
        福島県郡山市にてWeb開発の学習をしています。
        <br />
        これまでに学んだ事や制作物を紹介します。
      </h2>
    </div>
  </section>
)

const section = css`
  ${tw` flex items-center h-96 bg-transparent `}
`

const inner = css`
  ${tw`container mx-auto px-10 text-center lg:text-right
`}
`

const siteDescription = css`
  ${tw`lg:text-xl text-white
`}
`

export default Hero
