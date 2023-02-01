import React, { useState } from "react"
import Modal from "../widgets/Modal"
import DefaultPage from "./DonateModal/Default"
import PrivacyPage from "./DonateModal/PrivacyPage"
import ChoosePayOption from "./DonateModal/ChoosePayOption"
import FillCardDetails from "./DonateModal/FillCardDetails"
import ThankYou from "./DonateModal/ThankYou"

interface DonateModalProps{
    modalOpen:boolean,
    closeModal:(...args:any[])=>any,
  }

 
interface ComponentProps{
  goBack?:()=>any,
  push?:(page:string)=>any,
  [key:string]:any
}
interface PageProps{
  pageIndex:string | number,
  Component:(props:ComponentProps)=>JSX.Element 
}
  
  function PageRouter({pages}:{pages:PageProps[]}){
    type stackType = string | undefined | null
    const [pageStack,setPageStack] = useState<stackType[]>([])
    const goBack = ()=> setPageStack((prev=>{
      const prevCopy = [...prev]
      prevCopy.pop()
      return prevCopy
    }))
    const push = (page:string)=>setPageStack(prev=>{
      const prevCopy = [...prev]
      if(prevCopy.includes(page)){
        return [...prevCopy.filter(p=>p!==page),page]
      }
      return [...prevCopy,page]
    })
    const CurrentPage = pages.find(({pageIndex})=>(pageIndex as string)  === pageStack[pageStack.length-1]) as PageProps
    const DefPage = pages[0]
    return CurrentPage
    ?<CurrentPage.Component
    goBack={goBack}
    push={push}
    />
    :<DefPage.Component
    goBack={goBack}
    push={push}
    />
  }
  export function DonateModal({modalOpen,closeModal}:DonateModalProps){
    const pages:PageProps[] = [
      {
        pageIndex:"0",
        Component:({goBack,push})=><DefaultPage goBack={goBack} push={push}/>
      },
      {
        pageIndex:"3",
        Component:({goBack,push})=><FillCardDetails goBack={goBack} push={push}/>
      }, 
      {
        pageIndex:"4",
        Component:({goBack,push})=><ThankYou goBack={goBack} push={push}/>
      },
      {
        pageIndex:"1",
        Component:({goBack,push})=><ChoosePayOption goBack={goBack} push={push}/>
      },
      {
        pageIndex:"2",
        Component:({goBack,push})=><PrivacyPage goBack={goBack} push={push}/>
      },
    ]

    return(
   <Modal isOpen={modalOpen} closeModal={closeModal}>
      <PageRouter
      pages={pages}
      />
   </Modal>
    )
  }
  
  interface DonateModalProps{
    modalOpen:boolean,
    closeModal:(...args:any[])=>any
  }
  
  