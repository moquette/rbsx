import Head from 'next/head'

/******************************************
  Imports
******************************************/
import Navigation from '../components/Navigation'
import Preloader from '../components/Preloader'
import Hero from '../features/Hero'
import Services from '../features/Services'
import CallToAction from '../features/CallToAction'
import About from '../features/About'
import Testimonials from '../features/Testimonials'
import Team from '../features/Team'
import ContactForm from '../features/ContactForm'
import Footer from '../components/Footer'

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
        <div id="services">
          <Services bg="light" />
          <CallToAction />
        </div>
        <About id="about" bg="light" />
        <Testimonials id="testimonials" />
        <Team id="team" bg="light" />
        <ContactForm id="contact" />
      </main>
      <Footer />
    </>
  )
}

export default App
