import Head from 'next/head'

/******************************************
  Imports
******************************************/
import Navigation from '../components/Navigation'
import Preloader from '../components/Preloader'
import Hero from '../features/Hero'
import SectionOne from '../features/SectionOne'
import SectionTwo from '../features/SectionTwo'
import SectionThree from '../features/SectionThree'
import ContactForm from '../features/ContactForm'
import Footer from '../components/Footer'
//import './app.scss'

/******************************************
  Component
******************************************/
const App = (props) => {
  return (
    <>
      <Head>
        <title>RBSX</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Preloader />
      <Navigation />
      <main>
        <Hero id="home" />
        <SectionOne id="section1" bg="light" />
        <SectionTwo id="section2" />
        <SectionThree id="section3" bg="light" />
        <ContactForm id="section5" />
      </main>
      <Footer />
    </>
  )
}

export default App
