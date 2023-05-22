import Head from 'next/head'
import About from './aboutMe'
import Contact from './contactMe'
import Main from '../components/main'
import Projects from './projects'
import Skills from './skills'



export default function Home() {
  return (
    <div>
      <Head>
        <title>Kyle | Back-End Developer</title>
        <meta name="description" content="I’m a back-end developer, welcome to my portfolio! I specialise in building and developing apps, which provide a positive user experience" />
        <link rel="icon" href="/icon.png" />
      </Head>
    <Main />
    <About />
    <Skills />
    <Projects />
    <Contact />
    </div>
  )
}
