import {Image} from "antd";
import Link from "next/link";

export default function Footer(){
    return (
        <footer className="py-16">
         <div className="bh-container">
            <div className="grid grid-cols-10 gap-x-2">
              <div className="col-span-4 pr-1 text-left">
                <h3 className="font-black bh-text-primary text-4xl">BHNI</h3>
                <p className="bh-text-primary font-black my-2">To promote family centered and equitable healthcare programs in Nigeria.</p>
                <div className="mt-12">
                <h3 className="font-black bh-text-primary text-4xl">Socials</h3>
                <div className="flex mt-4 items-center">
                    <Link className="block mr-2" href={"/"}>
                       <Image 
                       height={28}
                       width={28}
                       preview={false}
                       className="cursor-pinter"
                       src="/icons/facebook.svg"
                       alt="facebook"
                       />
                    </Link>
                    <Link className="block mr-2" href={"/"}>
                       <Image 
                       height={28}
                       width={28}
                       preview={false}
                       className="cursor-pinter"
                       src="/icons/instagram.svg"
                       alt="facebook"
                       />
                    </Link>
                    <Link className="block mr-2" href={"/"}>
                       <Image 
                       height={28}
                       width={28}
                       preview={false}
                       className="cursor-pinter"
                       src="/icons/twitter.svg"
                       alt="facebook"
                       />
                    </Link>
                    <Link className="block mr-2" href={"/"}>
                       <Image 
                       height={28}
                       width={28}
                       preview={false}
                       className="cursor-pinter"
                       src="/icons/linkedin.svg"
                       alt="facebook"
                       />
                    </Link>
                </div>
                </div>
              </div>
              <div className="col-span-2">
                <h3 className="font-black bh-text-primary text-4xl">Sections</h3>
                <ul>
                    <Link href={"/who-we-are"}><li className="font-bold bh-text-primary my-2">Who We Are</li></Link>
                    <Link href={"/newsroom"}><li className="font-bold bh-text-primary my-2">Newsroom</li></Link>
                    <Link href={"/events"}><li className="font-bold bh-text-primary my-2">Events</li></Link>
                    <Link href={"/events"}><li className="font-bold bh-text-primary mt-16">Data Privacy Notice</li></Link>
                </ul>
              </div>
              <div className="col-span-4">
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
                    <h3 className="text-3xl font-black">Subscribe To Our Newsletter</h3>
                    <p >Stay in touch with us to get the latest news & updates on our activities.</p>
                </div>
            </div>
            <div className="border-2 p-2 w-5/12 flex">
                <input type="text" style={{outline:"none"}} placeholder="Enter your Email Address" className="bh-light p-1 w-8/12 rounded-lg" />
                <button className="bh-danger p-2 ml-1 rounded-lg w-4/12">Subscribe</button>
            </div>
            </div>
         </div>
         <p className="my-6 bh-text-primary text-center">Copyright © 2022 BHNI.org, All rights reserved.</p>
        </footer>
    )
}