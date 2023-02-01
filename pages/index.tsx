import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Layout from '@/components/Layout'
import Hero from '@/components/home/Hero'
import NewsRoom from '@/components/home/Newsroom'
import Objectives from '@/components/home/Objectives'
import Team from '@/components/home/Team'
import Events from '@/components/home/Events'
import WhoWeAre from '@/components/home/WhoWeAre'
import Modal from '@/components/widgets/Modal'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <div>
    <Hero/>
    <NewsRoom/>
     <div className="bh-white">
      <WhoWeAre/>
      <Team/>
     </div>
     <Events/>
    <Objectives/>
   </div>
  )
}
