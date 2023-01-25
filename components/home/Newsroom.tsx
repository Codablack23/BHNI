import {Image} from 'antd'

interface NewsProps{
    isReversed:boolean,
    title?:string,
    imgUrl:string,
    content?:string
}

const News = ({isReversed,title,imgUrl,content}:NewsProps)=>(
    <div className={`bh-card rounded flex my-6 ${isReversed?"flex-row-reverse":""}`}>
    <div className="" style={{flex:3}}>
      <Image
      src={imgUrl}
      width={"100%"}
      height={"100%"}
      alt="ww1"
      preview={false}
      />
    </div>
    <div className="bh-white" style={{flex:2}}>
       <div className="mx-auto my-10" style={{maxWidth:350}}>
          <h4 className="bh-text-primary font-bold text-3xl">{title?title:"What we are doing at the moment!"}</h4>
          <p className="py-5 font-semibold">{content?content:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit."}</p>
          <button className="bh-danger p-2 rounded-lg" style={{minWidth:"150px"}}>Read More</button>
       </div>
    </div>
  </div>
)

export default function NewsRoom(){
    return (
       <div className="bh-container">
          <div className="py-10">
            <header className="flex items-center justify-between">
                <h4 className="bh-text-danger font-bold text-xl">Newsrooms</h4>
                <hr className="bh-danger w-10/12" style={{height:"2px"}} />
            </header>
            <h4 className="my-3 text-3xl bh-text-primary font-bold">What we are doing at the moment!</h4>
            <News isReversed={false} imgUrl="/ww1.png"/>
            <News isReversed={true} imgUrl="/ww2.png"/>
            <button className="bh-danger text-center w-full py-2 rounded-lg">More News</button>
        </div>
       </div>
    )
}