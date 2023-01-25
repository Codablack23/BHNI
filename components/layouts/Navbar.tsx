import { Image } from "antd";
import Link from "next/link";

export default function Navbar(){
  return (
    <header className="bh-white sticky top-0 z-50">
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
        <h3 className="bh-text-primary ml-2 text-3xl">Blissful Health Nigeria <br/> Initiative (BHNI)</h3>
       </div>
       <form className="search flex items-center w-5/12">
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
          <button className="bh-danger ml-2 p-2 rounded-lg">Donate</button>
       </form>
      </nav>
    </section>
    <ul className="bh-container grid grid-cols-3 gap-x-2 -mt-3">
        <Link href={"/newsroom"}><li className="p-1 bh-white bh-hover-text-danger cursor-pointer text-center bh-text-primary bh-card font-bold"><p>Newsroom</p></li></Link>
        <Link href={"/what-we-are"}><li className="p-1 bh-white bh-hover-text-danger cursor-pointer text-center bh-text-primary bh-card font-bold"><p>What we are</p></li></Link>
        <Link href={"/events"}><li className="p-1 bh-white bh-hover-text-danger cursor-pointer text-center bh-text-primary bh-card font-bold"><p>Events</p></li></Link>
    </ul>
    </header>
  )
}