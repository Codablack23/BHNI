import {Image} from 'antd'
import Link from 'next/link'

interface NewsProps{
    isReversed:boolean,
    title?:string,
    imgUrl:string,
    content?:string
}

const News = ({isReversed,title,imgUrl,content}:NewsProps)=>{
const defContent = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit."

  return (
    <div className={`bh-card rounded w-8/12 sm:w-6/12 md:w-full flex my-6 ${isReversed?"flex-row-reverse":"ml-auto md:ml-0"}`}>
    <div className="hidden md:block" style={{flex:3}}>
      <Image
      src={imgUrl}
      width={"100%"}
      height={"100%"}
      alt="ww1"
      preview={false}
      />
    </div>
    <div className="bh-white rounded-xl relative" style={{flex:2}}>
       {isReversed?
        <div className="w-16 h-16 absolute top-1/2 -right-10">
         <div className="triangle-right"></div>
        </div>
       :<div className="w-16 h-16 absolute top-1/2 -left-10">
         <div className="triangle-left"></div>
        </div>
      }
       <div className="mx-auto px-7 my-10">
          <h4 className="bh-text-primary font-bold text-base sm:text-lg md:text-3xl">{title?title:"What we are doing at the moment!"}</h4>
          <p className="py-3 sm:py-5 md:font-semibold text-xs font-light sm:text-base">{content?content:defContent.slice(0,99)}</p>
          <Link href={"/newsroom"}>
          <button className="bh-danger bh-card bh-hover-white p-2 rounded-lg" style={{minWidth:"150px"}}>Read More</button>
          </Link>
       </div>
    </div>
  </div>
  )
}


export default function NewsRoom(){
    return (
       <div className="bh-container">
          <div className="py-10">
            <header className="flex items-center justify-between">
                <h4 className="bh-text-danger w-2/12 font-bold text-xl">Newsrooms</h4>
                <hr className="bh-danger w-7/12 md:w-10/12" style={{height:"2px"}} />
            </header>
            <h4 className="my-3 text-2xl  md:text-3xl bh-text-primary font-bold">What we are doing at the moment!</h4>
            <News isReversed={false} imgUrl="/ww1.png"/>
            <News isReversed={true} imgUrl="/ww2.png"/>
            <Link href={"/newsroom"}>
               <button className="bh-danger bh-hover-white text-center w-full py-2 rounded-lg">More News</button>
            </Link>
        </div>
       </div>
    )
}