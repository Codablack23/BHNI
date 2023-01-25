interface CarouselItemProps{
    children?:JSX.Element,
    [key:string]:any
}

type CarouselItem=(props:CarouselItemProps)=>JSX.Element

interface CarouselProps{
    children:JSX.Element[],
    [key:string]:any
}
export const CarouselItem:CarouselItem =({children})=>(
   <>
   {children}
   </>
)

export default function Carousel({children}:CarouselProps){
    
   return (
    <div>
      <div className="flex">
      {children.map((item,index)=>(
          <div key={`carousel-item-${index}`}>
            {item}
          </div>
       ))}
      </div>
       <div className="bh-container">

       </div>
       <div className="flex justify-center items-center absolute bottom-3 w-full">
       {children.map((item,index)=>(
        <button key={`carousel-indicator-${index}`} className="w-2 mx-1 bg-gray-300 h-2 rounded-full"></button>
       ))}
       </div>
    </div>
   )
}