import tw, { css } from 'twin.macro'
import Button from '~/components/atoms/button'
import Layout from '~/components/templates/single-column'

const NotFound = () => {
  return (
    <Layout>
      <div
        css={css`
          ${tw`bg-white py-6 sm:py-8 lg:py-12`}
        `}
      >
        <div
          css={css`
            ${tw`max-w-screen-2xl px-4 md:px-8 mx-auto`}
          `}
        >
          <div
            css={css`
              ${tw`flex flex-col items-center`}
            `}
          >
            <p
              css={css`
                ${tw`text-green-600 text-lg md:text-xl font-semibold uppercase mb-4`}
              `}
            >
              404
            </p>
            <h1
              css={css`
                ${tw`text-gray-800 text-2xl md:text-3xl font-bold text-center mb-2`}
              `}
            >
              ページが見つかりません
            </h1>

            <p
              css={css`
                ${tw`max-w-screen-md text-gray-500 md:text-lg text-center mb-12`}
              `}
            >
              お探しのページが見つかりませんでした。
            </p>

            <Button text='トップへ戻る' />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default NotFound
