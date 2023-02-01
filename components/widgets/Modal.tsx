import React, { useEffect, useRef } from "react"

interface ModalProps{
  children:React.ReactNode,
  isOpen:boolean,
  closeModal:(...args:any[])=>any
}

export default function Modal({children,isOpen,closeModal}:ModalProps){
    const el = useRef<HTMLDivElement>(null)
    useEffect(()=>{
        el.current?.animate([
            {opacity:0},
            {opacity:1}
        ],{
            duration:350
        })
    })
    return isOpen?(

        <div ref={el} className={`fixed overflow-y-auto  top-0 left-0 w-full h-full z-50 md:p-5 bg-black`}>
            <button className="h-10 my-4 w-10 rounded-full bg-gray-400" onClick={closeModal}>
                <i className="bi bi-x-lg text-2xl text-black"></i>
            </button>
            <div>
               {children}
            </div>
        </div>
    ):null
}