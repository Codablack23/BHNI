import Head from "next/head"
import Navbar from "./layouts/Navbar"
import Footer from "./layouts/Footer"
import { useContext } from "react"
import { ModalContext } from "@/context/Provider"
import { DonateModal } from "./home/DonateModal"

interface LayoutProps{
    children:JSX.Element,
    title:string
}
type func = (...args:any[]) =>any
export default function Layout({children}:LayoutProps){
    const {modalOpen,closeModal} = useContext(ModalContext)
    return (
        <div>
        <Head>
            <title>BHNI</title>
            <link rel="shortcut icon" href="logo.png" type="image/x-icon" />
        </Head>
        <Navbar/>
         <DonateModal
         modalOpen={modalOpen}
         closeModal={closeModal as func}
         />
         <div>
            {children}
         </div>
         <Footer/>
        </div>
    )
}