import {Image} from 'antd'
import CustomTab from '../widgets/TabMenu'
import { FC, ReactNode } from 'react'

interface TabData{
    key:number | string,
    component:FC,
    tab:string,
}

const tabs:TabData[] = [
    {
      key:"1",
      tab:"Mission",
      component:()=><p className="text-gray-800 font-bold">To promote family centered and equitable healthcare programs in Nigeria.</p>
    },
    {
      key:"2",
      tab:"Vision",
      component:()=><p className="text-gray-800 font-bold">To improve qualitative and sustainable healthcare service delivery in Nigeria.</p>
    },
    {
      key:"3",
      tab:"Core Values",
      component:()=><p className="text-gray-800 font-bold">A: Accountability <br/> C: Committed to Integrity <br/>T: Trust S: Service Driven<br/></p>
    },
  ] 



export default function WhoWeAre(){
    return (
        <section className="bh-container">
        <div className="py-12">
           <header className="flex items-center justify-between">
                <h4 className="bh-text-danger font-bold text-xl">Who We Are</h4>
                <hr className="bh-danger w-10/12" style={{height:"2px"}} />
            </header>
            <h4 className="my-3 text-3xl bh-text-primary font-bold">We prioritize healthcare service delivery in Nigeria</h4>
            <div className="md:flex mt-4 rounded-lg bh-card">
                <div style={{flex:2}}>
                  <Image
                  src="/Union 3.png"
                  preview={false}
                  height={"100%"}
                  width={"100%"}
                  alt='banner'
                  />
                </div>
                <div style={{flex:3}}>
                    <div className="pt-14 mx-auto" style={{maxWidth:450}}>
                       <h4 className="my-3 text-3xl bh-text-primary font-bold">This is who we are, these are the pillars that holds us.</h4>
                       <CustomTab
                       tabs={tabs}
                       />
                    </div>
                </div>
            </div>
         </div>
        </section>
    )
}