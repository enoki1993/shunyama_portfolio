import About from '~/components/organisms/about'
import Blog from '~/components/organisms/blog'
import Contact from '~/components/organisms/contact'
import Hero from '~/components/organisms/hero'
import Skill from '~/components/organisms/skill'
import Works from '~/components/organisms/works'
import Layout from '~/components/templates/single-column'

const Home = () => (
  <Layout>
    <Hero />
    <About />
    <Skill />
    <Works />
    <Blog />
    <Contact />
  </Layout>
)

export default Home
