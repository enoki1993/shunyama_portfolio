import tw, { css } from 'twin.macro'
import SectionTitle from '~/components/atoms/sectionTitle'
import ContactForm from '~/components/molecules/contactForm'

const Contact = () => (
  <section id='#contact' css={section}>
    <SectionTitle text='contact' />
    <p css={p}>ご連絡の際はこちらのフォームよりお問い合わせください。</p>
    <ContactForm />
  </section>
)

const section = css`
  ${tw`py-10 bg-yellow-50`}
`

const p = css`
  ${tw`mb-5 text-center`}
`

export default Contact
