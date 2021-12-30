import Head from 'next/head'
import Image from 'next/image'
import EventsLayout from '../components/events/EventsLayout'

export default function Home() {
  return (
    <>
      <div id="events-section">

         <EventsLayout/>

      </div>
    </>
   
  )
}
