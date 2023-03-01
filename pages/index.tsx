import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
// import Layout from '@/components/Layout'
import Hero from '@/components/home/Hero'
import NewsRoom from '@/components/home/Newsroom'
import Objectives from '@/components/home/Objectives'
import Team from '@/components/home/Team'
import Events from '@/components/home/Events'
import WhoWeAre from '@/components/home/WhoWeAre'
// import Modal from '@/components/widgets/Modal'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <div>
    <Hero/>
    <NewsRoom/>
     <div className="bh-white">
      <WhoWeAre/>
      <div className="bh-container">
        <header className="flex items-center justify-between">
                <h4 className="bh-text-danger w-2/12 font-bold text-xl">What We Do</h4>
                <hr className="bh-danger w-7/12 md:w-10/12" style={{height:"2px"}} />
        </header>
        <p className="my-5">BHNi with support from international organizations and corporate entities provides qualitative services to improve family health, enhance talented teenage girls achieve their potentials through a program called "TRACE", collaborate with global health supply chain organizations to improve health commodity security in the urban and rural public-private health facilities in Nigeria.</p>
      </div>
     </div>
     <div className="bh-light-grey">
     <Team/>
     </div>
     <Events/>
    <Objectives/>
   </div>
  )
}
