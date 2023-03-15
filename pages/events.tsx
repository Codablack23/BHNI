import EventModal from "@/components/events/EventModal"
import { Image } from "antd"
import { useState } from "react"

interface EventProps{
  reversed:boolean,
  openModal:any,
  img_url:string
}
const Event=({reversed,openModal,img_url}:EventProps)=>(
    <div className={`bh-card bh-white p-3 mr-2 mb-2 flex ${!reversed?"flex-col":"flex-col-reverse"} rounded-lg bh-event `}>
    <div className="img-cover rounded-lg" onClick={openModal}>
      <Image
        src={img_url}
        className="object-cover"
        width={"100%"}
        height={"200px"}
        preview={false}
        alt="event banner"
      />
    </div>
    <div className="p-2">
        <h4 className="bh-text-primary text-lg md:text-2xl font-semibold">Lorem ipsum dolor sit amet,<br /> consetetur sadipscing elitr,</h4>
        <p className="text-sm md:text-base">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
    </div>
    </div>
)

export default function Events(){
    const events = [
      {
        img_url:"/images/post1.png"
      },
      {
        img_url:"/images/post2.png"
      },
      {
        img_url:"/images/slider-1.png"
      },
      {
        img_url:"/images/post3.png"
      }
    ]
    const [modalIndex,setModalIndex] = useState(2)
    const [modalOpen,setModalOpen] = useState(false)
    const closeModal=()=>{
      setModalOpen(false)
    }
    const openModal=(index:number)=>{
     return ()=>{
      setModalIndex(index)
      setModalOpen(true)
     }
    }
    return (
      <div className="bh-white">
         <EventModal currentIndex={modalIndex} modalOpen={modalOpen} closeModal={closeModal}/>
          <div className="bh-container bh-white">
         <div className="py-5">
           <header className="flex items-center justify-between">
                <h4 className="bh-text-danger font-bold text-xl">Events Gallery</h4>
                <hr className="bh-danger w-6/12 md:w-10/12" style={{height:"2px"}} />
            </header>
            <h4 className="my-3 text-xl md:text-3xl bh-text-primary font-bold">Let's see what we have been up to!</h4>
             <div className="w-100 md:grid grid-cols-2 my-5">
                {events.map((v,i)=>(
                  <Event img_url={v.img_url} key={`${i}-event`} reversed={(i+1)%2 === 0} openModal={openModal(i+1)}/>
                ))}                        
             </div>
         </div>
        </div>
      </div>
    )
}