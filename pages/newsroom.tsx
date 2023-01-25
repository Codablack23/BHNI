import {Image} from "antd"


interface StoryProps{
    isReversed:boolean,
    title?:string,
    imgUrl:string,
    content?:string
}

const Story = ({isReversed,title,imgUrl,content}:StoryProps)=>(
    <div className={`bh-card bh-white rounded flex my-6 mr-6 ${isReversed?"flex-row-reverse":""}`} style={{minWidth:900}}>
    <div className="" style={{flex:3}}>
      <Image
      src={imgUrl}
      width={"100%"}
      height={"100%"}
      alt="ww1"
      preview={false}
      />
    </div>
    <div className="" style={{flex:2}}>
       <div className="mx-auto my-8 px-4" style={{maxWidth:350}}>
          <h4 className="bh-text-primary font-bold text-xl">{title?title:"What we are doing at the moment!"}</h4>
          <p className="py-5 font-semibold">{content?content:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit.".slice(0,150)}</p>
       </div>
    </div>
  </div>
)
interface NewsProps{
    isReversed:boolean,
    title?:string,
    imgUrl:string,
}

const News = ({isReversed,title,imgUrl}:NewsProps)=>(
    <div className={`bh-card bh-white rounded-lg flex my-6 ${isReversed?"flex-row-reverse":""}`}>
    <div className="" style={{flex:3}}>
      <Image
      src={imgUrl}
      width={"100%"}
      height={"100%"}
      alt="ww1"
      preview={false}
      />
    </div>
    <div className="" style={{flex:2}}>
       <div className="mx-auto my-5 p-2" style={{maxWidth:350}}>
          <h4 className="bh-text-primary font-bold text-lg">{title?title:"What we are doing at the moment!"}</h4>
       </div>
    </div>
  </div>
)
export default function Events(){
    return (
      <div className="bh-white">
            <div className="bh-container">
         <div className="">
           <header className="flex items-center justify-between">
                <h4 className="bh-text-danger font-bold text-xl">Events</h4>
                <hr className="bh-danger w-10/12" style={{height:"2px"}} />
            </header>
            <h4 className="my-3 text-3xl bh-text-primary font-bold">What we are doing at the moment!</h4>
            <div>
                <Image
                src="/ww1.png"
                width={"100%"}
                height={"400px"}
                alt="article"
                preview={false}
                />
            </div>
             <div className="w-100 grid grid-cols-3 my-5 gap-x-3">
                <div className="col-span-2">
                 <h3 className="bh-text-primary text-3xl">Socio-economic sensitization on secondary schools in the south south geo-political zones</h3>
                 <p className="my-3">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                 </p>
                </div>
                <div className="col-span-1">
                   <div className="bh-light-grey p-2 pt-8 pb-4 rounded-lg ">
                   <h4 className="mt-10 font-bold text-2xl mb-5 bh-text-primary">Related Posts</h4>
                   <News isReversed={false} imgUrl="/ww1.png"/>
                   <News isReversed={true} imgUrl="/ww2.png"/>
                   <News isReversed={false} imgUrl="/ww1.png"/>
                   <News isReversed={true} imgUrl="/ww2.png"/>
                   <News isReversed={false} imgUrl="/ww1.png"/>
                   </div>
                </div>
             </div>
             <hr className="bh-light-grey w-8/12 my-10" style={{height:"2px"}}/>
             <div>
               <h4 className="mt-10 font-bold text-3xl mb-5 bh-text-primary">Top Stories</h4>
               <section className="flex overflow-x-auto">
                <Story imgUrl="/ww1.png" isReversed={false}/>
                <Story imgUrl="/ww2.png" isReversed={true}/>
               </section>
             </div>
         </div>
        </div>
      </div>
    )
}