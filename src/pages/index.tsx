import Head from 'next/head'
import About from './aboutMe'
import Contact from './contactMe'
import Main from '../components/main'
import Projects from './projects'




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
    <Projects />
    <Contact />
    </div>
  )
}
