import tw, { css } from 'twin.macro'
import ContactForm from '~/components/molecules/contactForm'
import SectionHeader from '~/components/molecules/sectionHeader'

const Contact = () => (
  <section id='#contact' css={section}>
    <SectionHeader
      en='contact'
      title='お問い合わせ'
      caption='ご連絡の際はこちらのフォームよりお問い合わせください。'
    />
    <ContactForm />
  </section>
)

const section = css`
  ${tw`py-10 bg-transparent`}
`

export default Contact
