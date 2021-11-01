import Link from 'next/link'
import Layout from '~/components/layout/layout'

const Contact: React.FC = () => {
  return (
    <section id="#contact">
      <p>ご連絡の際はこちらのフォームよりお問い合わせください。</p>
      <form action="" method="post">
        <p>
          <label htmlFor="cf_name">氏名</label>
          <input type="text" name="name" id="cf_name" value="" />
        </p>
        <p>
          <label htmlFor="cf_email">メールアドレス</label>
          <input type="email" name="email" id="cf_email" value="" />
        </p>
        <p>
          <label htmlFor="cf_contact">お問い合わせ内容</label>
          <textarea name="email" id="cf_contact" value=""></textarea>
        </p>
        <button type="submit">送信する</button>
      </form>
    </section>
  )
}

const Home: React.FC = () => {
  return (
    <Layout>
      <Contact />
      <Link href="/">
        <a>TOP</a>
      </Link>
    </Layout>
  )
}

export default Home
