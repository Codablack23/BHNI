import { Carousel,Image} from "antd"
import { CarouselRef } from "antd/es/carousel"
import { useRef } from "react"

export default function Hero(){
    const carouselRef = useRef<CarouselRef>(null)
    function next(){
        carouselRef.current?.next()
    }
    function prev(){
        carouselRef.current?.prev()
    }
    return(
        <section className="relative bh-min-vh-60">
                <button
                onClick={prev}
                className="rounded-full h-10 w-10 opacity-50 bg-gray-300 hover:bg-gray-50 absolute top-1/2 z-10" style={{left:"5%"}}>
                    <i className="bi bi-arrow-left bh-text-primary"></i>
                </button>
                <button 
                 onClick={next}
                className="rounded-full h-10 w-10 opacity-50 bg-gray-300 hover:bg-gray-50 absolute top-1/2 z-10" style={{right:"5%"}}>
                    <i className="bi bi-arrow-right bh-text-primary"></i>
                </button>
            <Carousel 
            dotPosition="bottom" 
            effect="fade"
            ref={carouselRef} >
              <div className="bh-slide-1 bh-min-vh-60 ">
                 <div className="bh-container">
                   <div className="p-5 h-full flex flex-col justify-end bh-min-vh-50">
                     <h4 className="text-xl sm:text-3xl md:text-4xl text-center text-white font-bold">Improving Family Health In Nigeria</h4>
                   </div>
                 </div>
              </div>
              <div className="bh-slide-2 bh-min-vh-60">
                 <div className="bh-container">
                   <div className="p-5 h-full flex flex-col justify-end bh-min-vh-50">
                     <h4 className="text-xl sm:text-3xl md:text-4xl text-center text-white font-bold">Medical outreach for children, Cross River State</h4>
                   </div>
                 </div>
              </div>
              <div className="bh-slide-3 bh-min-vh-60">
                 <div className="bh-container">
                   <div className="p-5 h-full flex flex-col justify-end bh-min-vh-50">
                     <h4 className="text-xl sm:text-3xl md:text-4xl text-center text-white font-bold">Drug sensitization excercise in Bonny Island</h4>
                   </div>
                 </div>
              </div>
            </Carousel>
        </section>
    )
}
