import tw, { css } from 'twin.macro'
import SectionTitle from '~/components/atoms/sectionTitle'
import TextInput from '~/components/atoms/textInput'
import Textarea from '~/components/atoms/textarea'

const ContactForm = () => {
  return (
    <div
      css={css`
        ${tw`w-full max-w-xl mx-auto bg-white shadow-md rounded`}
      `}
    >
      <form
        action=''
        method='post'
        css={css`
          ${tw`px-8 pt-6 pb-8`}
        `}
      >
        <TextInput
          label='お名前'
          id='name'
          type='name'
          name='name'
          required={true}
          _css={css`
            ${tw`mb-4`}
          `}
        />
        <TextInput
          label='メールアドレス'
          id='email'
          type='email'
          name='email'
          required={true}
          _css={css`
            ${tw`mb-4`}
          `}
        />
        <TextInput
          label='件名'
          id='title'
          type='text'
          name='text'
          _css={css`
            ${tw`mb-4`}
          `}
        />
        <Textarea
          label='お問い合わせ内容'
          id='contact'
          required={true}
          _css={css`
            ${tw`mb-4`}
          `}
        />
        <div
          css={css`
            ${tw`flex justify-center`}
          `}
        >
          <button type='submit' css={submitBtnStyle}>
            送信する
          </button>
        </div>
      </form>
    </div>
  )
}

const Contact = () => {
  return (
    <section
      id='#contact'
      css={css`
        ${tw`py-10 bg-yellow-50`}
      `}
    >
      <SectionTitle text='contact' />
      <p
        css={css`
          ${tw`mb-5 text-center`}
        `}
      >
        ご連絡の際はこちらのフォームよりお問い合わせください。
      </p>
      <ContactForm />
    </section>
  )
}

const submitBtnStyle = css`
  ${tw`
  w-full px-4 py-2 bg-yellow-600 text-white font-bold shadow cursor-pointer transition-colors rounded
  hover:bg-yellow-500
  md:w-3/5
`}
`

export default Contact
