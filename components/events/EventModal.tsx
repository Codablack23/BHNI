import { useEffect, useRef } from "react";
import Modal from "../widgets/Modal";
import { Carousel, Image } from "antd";
import { CarouselRef } from "antd/es/carousel";

interface EventProps{
  currentIndex?:string | number,
  modalOpen:boolean,
  closeModal:(...args:any)=>any
}
interface SlideProps{
    index:number,
    img_url:string
}
const EventSlide=({index,img_url}:SlideProps)=>{
    return (
        <div className="md:w-10/12 m-auto">
        <header className="flex justify-between mb-7">
            <div className="rounded-full h-16 w-16 bg-gray-400 mr-6">
            <Image
              src={"/images/slider-1.png"}
              className="object-cover rounded-full"
              width={"100%"}
              height={"100%"}
              preview={false}
              alt="event banner"
             />
            </div>
            <div className="w-11/12">
                <h4 className="font-semibold text-2xl bh-text-primary">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, {index}</h4>
                <p className="">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
            </div>
        </header>
        <div className="w-9/12 m-auto mb-10" style={{height:300}}>
        <Image
              src={img_url}
              className="object-contain"
              width={"100%"}
              height={"100%"}
              preview={false}
              alt="event banner"
             />
        </div>
        <div className="gallery">
            <div className="bg-gray-300">
              <Image
              src={"/images/e-pic1.png"}
              className="object-cover"
              width={"100%"}
              height={"100%"}
              preview={false}
              alt="event banner"
             />
            </div>
            <div className="bg-gray-300">
            <Image
              src={"/images/e-pic2.png"}
              className="object-cover"
              width={"100%"}
              height={"100%"}
              preview={false}
              alt="event banner"
             />
            </div>
            <div className="bg-gray-300">
            <Image
              src={"/images/e-pic3.png"}
              className="object-cover"
              width={"100%"}
              height={"100%"}
              preview={false}
              alt="event banner"
             />
            </div>
            <div className="bg-gray-300">
            <Image
              src={"/images/e-pic1.png"}
              className="object-cover"
              width={"100%"}
              height={"100%"}
              preview={false}
              alt="event banner"
             />
            </div>
            <div className="bg-gray-300">
            <Image
              src={"/images/e-pic2.png"}
              className="object-cover"
              width={"100%"}
              height={"100%"}
              preview={false}
              alt="event banner"
             />
            </div>
            <div className="bg-gray-300">
            <Image
              src={"/images/e-pic3.png"}
              className="object-cover"
              width={"100%"}
              height={"100%"}
              preview={false}
              alt="event banner"
             />
            </div>
            <div className="bg-gray-300">
            <Image
              src={"/images/e-pic1.png"}
              className="object-cover"
              width={"100%"}
              height={"100%"}
              preview={false}
              alt="event banner"
             />
            </div>
            <div className="bg-gray-300">
            <Image
              src={"/images/e-pic2.png"}
              className="object-cover"
              width={"100%"}
              height={"100%"}
              preview={false}
              alt="event banner"
             />
            </div>
            <div className="bg-gray-300">
            <Image
              src={"/images/e-pic3.png"}
              className="object-cover"
              width={"100%"}
              height={"100%"}
              preview={false}
              alt="event banner"
             />
            </div>
            <div className="bg-gray-300">
            <Image
              src={"/images/e-pic1.png"}
              className="object-cover"
              width={"100%"}
              height={"100%"}
              preview={false}
              alt="event banner"
             />
            </div>
            <div className="bg-gray-300">
            <Image
              src={"/images/e-pic2.png"}
              className="object-cover"
              width={"100%"}
              height={"100%"}
              preview={false}
              alt="event banner"
             />
            </div>
        </div>
       </div>
    )
}
export default function EventModal({currentIndex,modalOpen,closeModal}:EventProps){
    const events = [
        {
          img_url:"/images/post1.png"
        },
        {
          img_url:"/images/post2.png"
        },
        {
          img_url:"/images/post3.png"
        },
        {
          img_url:"/images/post4.png"
        }
      ]
    const el = useRef<CarouselRef>(null)

    function next(){
      el.current?.next()
      
    }
    function prev(){
        el.current?.prev()
    }

    useEffect(()=>{
     el.current?.goTo(currentIndex as number)
     console.log(el.current)
     console.log(currentIndex)
    },[currentIndex])
   
    return (
       <Modal isOpen={modalOpen} closeModal={closeModal}>
            <div className="bh-white relative p-4 md:rounded-lg pt-6" style={{minHeight:"90vh"}}>
                <button onClick={prev} className="h-10 w-10 absolute z-50 left-5 md:-left-5 bg-gray-200 rounded-full flex items-center justify-center" style={{top:"15%"}}>
                    <i className="bi bi-arrow-left"></i>
                </button>
                 <button onClick={next} className="h-10 w-10 absolute z-50 right-5 md:-right-5 bg-gray-200 rounded-full flex items-center justify-center" style={{top:"15%"}}>
                    <i className="bi bi-arrow-right"></i>
                </button>
              <Carousel dots={false} ref={el} >
               
                {events.map((v,i)=>
                     <EventSlide img_url={v.img_url} key={`${i}-event-modal`} index={i + 1}/>
                )}
              </Carousel>
            </div>
       </Modal>
    )
}