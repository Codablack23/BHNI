import { Image } from "antd";
import Link from "next/link";
import Modal from "../widgets/Modal";
import { useContext, useState } from "react";
import { ModalContext } from "@/context/Provider";




export default function Navbar(){
  const [isOpen,setIsOpen] = useState(false)
  const [isCareerModalOpen,setIsCareerModalOpen] = useState(false)
  const [isSearchOpen,setIsSearchOpen] = useState(false)

  const {openModal,} = useContext(ModalContext)
  return (
    <header className="bh-white sticky top-0 z-50">
      <Modal isOpen={isCareerModalOpen} closeModal={()=>setIsCareerModalOpen(false)} >
        <div className="bh-container bg-white md:rounded-lg pt-6" style={{minHeight:"80vh"}}>
          <h4 className="text-2xl text-center bh-text-primary my-4 font-bold">Join the team! Reach out to us.</h4>
          <div className="md:grid grid-cols-2 gap-10 my-8 mx-auto" style={{maxWidth:"800px"}}>
            <div className="text-center">
              <button className="bh-black w-full p-2 rounded-xl">Volunteer</button>
              <p className="my-4 mx-auto md:w-8/12">For free will act of service</p>
            </div>
           <div className="text-center">
              <button className="bh-black w-full p-2 rounded-xl">Membership</button>
              <p className="my-4 mx-auto md:w-8/12">For those who what to be a core part of us</p>
            </div>
           <div className="text-center">
              <button className="bh-black w-full p-2 rounded-xl">Partnership</button>
              <p className="my-4 mx-auto md:w-8/12">For associate relationship on this project</p>
            </div>
           <div className="text-center">
              <button className="bh-black w-full p-2 rounded-xl">Fellowship</button>
              <p className="my-4 mx-auto md:w-9/12">A group of people who wants to follow us all we do</p>
            </div>
          </div>
        </div>
      </Modal>
    <header className="bg-black md:hidden">
      <div className="bh-container flex justify-between items-center">
        <button onClick={()=>setIsOpen(true)} className="text-white"><i className="bi bi-justify text-white text-xl"></i></button>
        <div className="search flex items-center">
          {isSearchOpen?
           <button className="mr-5 h-8 w-8 bh-light rounded-full flex items-center justify-center" onClick={()=>setIsSearchOpen(prev=>!prev)}>
           <i className="bi bi-x-lg text-black text-xl"></i>
         </button>:
           <button className="mr-5" onClick={()=>setIsSearchOpen(prev=>!prev)}>
           <i className="bi bi-search text-white text-xl"></i>
         </button>
          }
          <button type="button" className="bh-danger bh-card bh-hover-white ml-2 p-2 rounded-lg" onClick={openModal}>Donate</button>
       </div>
      </div>
    </header>
    <div className={`bh-light-grey transition-all ${isSearchOpen?"h-14 max-h-16":"max-h-0"} overflow-hidden w-full flex items-center`}>
        <form className="searchbar justify-between rounded-lg bh-light mx-auto px-3 p-1 flex items-center w-10/12">
            <input type="text" placeholder="Search" className="bg-transparent text-sm w-10/12" style={{outline:"none"}}/>
            <button>
            <i className="bi bi-search text-black"></i>
            </button>
          </form>
    </div>
    <section className="block md:hidden">
       <Modal isOpen={isOpen} closeModal={()=>setIsOpen(false)}>
         <ul className="bh-container bg-white">
          <Link href={"/newsroom"}><li className="p-1 py-3 mt-8 bh-light bh-hover-text-danger cursor-pointer text-center bh-text-primary bh-card font-bold"><p>Newsroom</p></li></Link>
          <Link href={"/what-we-are"}><li className="p-3 py-3 bh-light bh-hover-text-danger cursor-pointer text-center bh-text-primary bh-card font-bold"><p>What we are</p></li></Link>
          <Link href={"/events"}><li className="p-1 py-3 bh-light bh-hover-text-danger cursor-pointer text-center bh-text-primary bh-card font-bold"><p>Events</p></li></Link>
          <li onClick={()=>{setIsOpen(false);setIsCareerModalOpen(true)}} className="p-1 mb-3 bh-light bh-hover-danger cursor-pointer text-center bh-text-primary bh-card font-bold"><p>Careers</p></li>
          <button type="button" className="bh-danger bh-card bh-hover-white w-10/12 block mx-auto mt-5 p-2 rounded-lg" onClick={openModal}>Donate</button>
         </ul>
       </Modal>
    </section>
    <section className="bh-white">
      <nav className="bh-container flex justify-between">
       <div className="flex items-center">
       <Link href={"/"}>
          <Image
          src="/logo.png"
          alt="logo"
          height={"70px"}
          width={"70px"}
          preview={false}
          />
        </Link>
        <h3 className="bh-text-primary ml-2 text-xl md:text-2xl">Blissful Health Nigeria <br/> Initiative (BHNI)</h3>
       </div>
       <form className="search md:flex items-center w-5/12 hidden">
          <div className="searchbar justify-between rounded-lg bh-light p-2 flex items-center w-10/12">
            <input type="text" placeholder="Search" className="bg-transparent w-10/12" style={{outline:"none"}}/>
            <Image
            src="/icons/search.svg"
            preview={false}
            height={"30px"}
            width={"30px"}
            alt="search"
            />
          </div>
          <button type="button" className="bh-danger bh-card bh-hover-white ml-2 p-2 rounded-lg" onClick={openModal}>Donate</button>
       </form>
      </nav>
    </section>
    <ul className="bh-container hidden md:grid grid-cols-4 gap-x-2 -mt-3">
        <Link href={"/newsroom"}><li className="p-1 bh-white bh-hover-danger cursor-pointer text-center bh-text-primary bh-card font-bold"><p>Newsroom</p></li></Link>
        <Link href={"/"}><li className="p-1 bh-white bh-hover-danger cursor-pointer text-center bh-text-primary bh-card font-bold"><p>What we are</p></li></Link>
        <Link href={"/events"}><li className="p-1 bh-white bh-hover-danger cursor-pointer text-center bh-text-primary bh-card font-bold"><p>Events</p></li></Link>
        <li onClick={()=>{setIsOpen(false);setIsCareerModalOpen(true)}} className="p-1 bh-white bh-hover-danger cursor-pointer text-center bh-text-primary bh-card font-bold"><p>Careers</p></li>
    </ul>
    </header>
  )
}