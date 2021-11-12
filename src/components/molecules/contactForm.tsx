import tw, { css } from 'twin.macro'
import TextInput from '~/components/molecules/textInput'
import Textarea from '~/components/molecules/textarea'

const ContactForm = () => (
  <div css={wrapper}>
    <form action='' method='post' css={form}>
      <TextInput
        text='お名前'
        id='name'
        type='name'
        name='name'
        isRequired={true}
        _css={css`
          ${tw`mb-4`}
        `}
      />
      <TextInput
        text='メールアドレス'
        id='email'
        type='email'
        name='email'
        isRequired={true}
        _css={css`
          ${tw`mb-4`}
        `}
      />
      <TextInput
        text='件名'
        id='title'
        type='text'
        name='text'
        _css={css`
          ${tw`mb-4`}
        `}
      />
      <Textarea
        text='お問い合わせ内容'
        id='contact'
        isRequired={true}
        _css={css`
          ${tw`mb-6`}
        `}
      />
      <div css={submitWrapper}>
        <button type='submit' css={submit}>
          送信する
        </button>
      </div>
    </form>
  </div>
)

const wrapper = css`
  ${tw`max-w-xl mx-auto bg-white shadow-md rounded`}
`

const form = css`
  ${tw`px-8 pt-6 pb-8`}
`

const submitWrapper = css`
  ${tw`flex justify-center`}
`

const submit = css`
  ${tw`
  w-full px-4 py-2 bg-yellow-600 text-white font-bold shadow cursor-pointer transition-colors rounded
  hover:bg-yellow-500
  md:w-3/5
`}
`

export default ContactForm
