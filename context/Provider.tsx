import React, { createContext, useState } from "react";

interface ModalContextProps{
   modalOpen:boolean,
   closeModal?:(...args:any[])=>any,
   openModal?:(...args:any[])=>any,
}
export const ModalContext = createContext<ModalContextProps>({
    modalOpen:false,

})
interface ModalContextProviderProps{
 children:React.ReactNode | React.ReactNode[]
}
export default function ModalContextProvider({children}:ModalContextProviderProps){
    const [modalOpen,setIsOpen] = useState(false)
    const openModal = ()=>{
        setIsOpen(true)
    }
    const closeModal = ()=>{
        setIsOpen(false)
    }
    return (
        <ModalContext.Provider value={{modalOpen,openModal,closeModal}}>
           {children}
        </ModalContext.Provider>
    )
}