import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header/Header'
import EventsLayout from '../components/events/EventsLayout'
import Ourteam from '../components/our_team_section/ourteam'
import Faq from '../components/faq/Faq'
import Footer from '../components/footer/Footer'
import Sponsors from '../components/sponsors/Sponsors'

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8"></meta>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <title>GDSC EXPLORE</title>
        <link rel="shortcut icon" href="/logo.svg" type="image/x-icon" />
      </Head>
      <div id="header-section">
        <Header/>
      </div>
      <div id="events-section">
        <EventsLayout/>
      </div>
      <div id='team-secion'>
        <Ourteam/>
      </div>
      <div id="sponsors-section">
        <Sponsors/>
      </div>
      <div id="faq-section">
        <Faq/>
      </div>
      <div id="footer-section">
        <Footer/>
      </div>
    </>
   
  )
}
