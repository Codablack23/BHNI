import {Image} from "antd";
import Link from "next/link";
import { useState } from "react";
import Modal from "../widgets/Modal";

function SocialSection(){
    return (
        <div className="mt-4 md:-mt-16 w-7/12 md:w-full flex items-center justify-between md:block">
        <h3 className="font-black bh-text-primary text-4xl">Socials</h3>
        <div className="flex ml-6 md:ml-0 mt-4 items-center">
            <Link className="block mr-2" href={"/"}>
               <Image 
               height={28}
               width={28}
               preview={false}
               className="cursor-pinter block mr-3"
               src="/icons/facebook.svg"
               alt="facebook"
               />
            </Link>
            <Link className="block mr-2" href={"/"}>
               <Image 
               height={28}
               width={28}
               preview={false}
               className="cursor-pinter block mr-3"
               src="/icons/instagram.svg"
               alt="facebook"
               />
            </Link>
            <Link className="block mr-2" href={"/"}>
               <Image 
               height={28}
               width={28}
               preview={false}
               className="cursor-pinter block mr-3"
               src="/icons/twitter.svg"
               alt="facebook"
               />
            </Link>
            <Link className="block mr-2" href={"/"}>
               <Image 
               height={28}
               width={28}
               preview={false}
               className="cursor-pinter block mr-3"
               src="/icons/linkedin.svg"
               alt="facebook"
               />
            </Link>
        </div>
        </div>
    )
}
export default function Footer(){
    const [isOpen,setIsOpen] = useState(false)

    return (
        <footer className="py-16">
        <Modal isOpen={isOpen} closeModal={()=>setIsOpen(false)} >
        <div className="bh-container flex justify-center items-center bg-white md:rounded-lg pt-6" style={{minHeight:"80vh"}}>
          <div className="mx-auto" style={{flex:1,maxWidth:"800px"}}>
            <h4 className="text-2xl text-center bh-text-primary my-4 font-bold">Get Feedback</h4>
            <p className="text-center">Your thoughts are valuable in helping improve our service</p>
            <form className="mt-3">
                <textarea 
                style={{height:"150px"}} 
                className="resize-none w-full rounded-xl border border-gray-200 py-2 px-2 mb-5" 
                ></textarea>
                <button className="bh-danger w-full p-2 rounded">Share your thoughts</button>
            </form>
          </div>
        </div>
      </Modal>
         <div className="bh-container">
            <div className="grid grid-cols-10 gap-x-2">
              <div className="col-span-5 md:col-span-4 pr-1 text-left">
                <h3 className="font-black bh-text-primary text-4xl">BHNI</h3>
                <p className="bh-text-primary font-black my-2">To promote family centered and equitable healthcare programs in Nigeria.</p>
              </div>
              <div className="col-span-5 md:col-span-2">
                <h3 className="font-black bh-text-primary text-4xl">Sections</h3>
                <ul>
                    <Link href={"/who-we-are"}><li className="font-bold bh-text-primary my-2">Who We Are</li></Link>
                    <Link href={"/newsroom"}><li className="font-bold bh-text-primary my-2">Newsroom</li></Link>
                    <Link href={"/events"}><li className="font-bold bh-text-primary my-2">Events</li></Link>
                    <Link href={"/events"}><li className="font-bold bh-text-primary">Data Privacy Notice</li></Link>
                </ul>
              </div>
              <div className="col-span-10 md:col-span-4">
                <h3 className="font-black bh-text-primary text-4xl">Contact Us</h3>
                <ul>
                    <li className="bh-text-primary my-2 flex">
                        <div></div>
                        <div>
                            <h3 className="text-lg font-bold bh-text-primary">Address</h3>
                            <p>No 6, Chief Michael Nwogha street, Ebony state, Nigeria</p>
                        </div>
                    </li>
                    <li className="bh-text-primary my-2 flex">
                        <div></div>
                        <div>
                            <h3 className="text-lg font-bold bh-text-primary">Call us On</h3>
                            <p>+234 805 577 9770, +2347068142433, +16476711360</p>
                        </div>
                    </li>
                    <li className="bh-text-primary my-2 flex">
                        <div></div>
                        <div>
                            <h3 className="text-lg font-bold bh-text-primary">Email Us</h3>
                            <p>infobhni@gmail.com</p>
                        </div>
                    </li>
                </ul>
              </div>
            </div>
            <SocialSection/>
         </div>
         <div className="py-4 bh-white my-2">
            <div className="bh-container md:flex justify-between items-center">
                <div className="flex items-center">
                    <Image
                    src="/icons/mail.svg"
                    alt="newsletter"
                    preview={false}
                    />
                    <div className="bh-text-primary ml-2">
                        <h3 className="text-2xl md:text-3xl font-black">Subscribe To Our Newsletter</h3>
                        <p >Stay in touch with us to get the latest news & updates on our activities.</p>
                    </div>
                </div>
                <div className="border-2 p-2 md:w-5/12 flex mt-5 md:mt-0">
                    <input type="text" style={{outline:"none"}} placeholder="Enter your Email Address" className="bh-light p-1 w-8/12 rounded-lg" />
                    <button className="bh-danger p-2 ml-1 rounded-lg w-4/12">Subscribe</button>
                </div>
            </div>   
            <hr />
           <div className="bh-container md:flex justify-between items-center">
                <div className="flex items-center">
                    <Image
                    src="/icons/mail.svg"
                    alt="newsletter"
                    preview={false}
                    />
                    <div className="bh-text-primary ml-2">
                        <h3 className="text-2xl md:text-3xl font-black">Give Feedback</h3>
                        <p >Your thoughts are valuable in helping improve our service.</p>
                    </div>
                </div>
                <div className="border-2 p-2 md:w-5/12 flex ml-auto mr-auto md:ml-0 md:mr-0 mt-5 md:mt-0">
                   <button onClick={()=>setIsOpen(true)} className="bh-black p-2 ml-1 w-full rounded-lg block">Share your Thoughts</button>
                </div>
            </div>
         </div>
         <p className="my-6 bh-text-primary text-center">Copyright © 2022 BHNI.org, All rights reserved.</p>
        </footer>
    )
}