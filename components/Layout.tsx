import Head from "next/head"
import Navbar from "./layouts/Navbar"
import Footer from "./layouts/Footer"

interface LayoutProps{
    children:JSX.Element,
    title:string
}

export default function Layout({children}:LayoutProps){
    return (
        <div>
        <Navbar/>
         <div>
            {children}
         </div>
         <Footer/>
        </div>
    )
}