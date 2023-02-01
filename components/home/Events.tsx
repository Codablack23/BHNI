import {Image} from 'antd'
import Link from 'next/link'
interface EventProps{
   reversed:boolean,
   img_url:string,
}
const Event=({reversed,img_url}:EventProps)=>(
    <div className={`bh-card bh-white p-3 mr-2 flex ${!reversed?"flex-col":"flex-col-reverse"} rounded-lg bh-event `}>
    <div className="img-cover rounded-lg">
      <Image
        src={img_url}
        className="object-cover"
        width={"100%"}
        height={"250px"}
        preview={false}
        alt="event banner"
        />
    </div>
    <div className="p-2">
        <h4 className="bh-text-primary text-2xl font-semibold">Lorem ipsum dolor sit amet,<br /> consetetur sadipscing elitr,</h4>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
    </div>
    </div>
)

export default function Events(){
    return (
        <div className="bh-container">
         <div className="py-12">
           <header className="flex items-center justify-between">
                <h4 className="bh-text-danger font-bold text-xl">Events</h4>
                <hr className="bh-danger w-7/12 md:w-10/12" style={{height:"2px"}} />
            </header>
            <h4 className="my-3 text-2xl md:text-3xl bh-text-primary font-bold">Let's see what we have been up to!</h4>
             <div className="w-100 overflow-x-auto flex my-5">
               <Event
               img_url='/images/post1.png' 
               reversed={false}/>             
               <Event 
               img_url='/images/post2.png'
               reversed={true}/>             
               <Event 
               img_url='/images/post3.png'
               reversed={false}/>             
             </div>
            <Link href={"/events"}>
            <button className="py-2 w-full bh-hover-white bh-hover-text-red bh-danger rounded-lg ">View Gallery</button>
            </Link>
         </div>
        </div>
    )
}