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
                <hr className="bh-danger w-5/12 md:w-10/12" style={{height:"2px"}} />
            </header>
            <h4 className="my-3 text-2xl md:text-3xl bh-text-primary font-bold">We prioritize healthcare service delivery in Nigeria</h4>
            <div className="md:flex mt-4 rounded-lg bh-card" style={{minHeight:"410px"}}>
                <div style={{flex:3}}>
                  <Image
                  src="/Union 3.png"
                  preview={false}
                  height={"100%"}
                  width={"100%"}
                  alt='banner'
                  />
                </div>
                <div style={{flex:3}}>
                    <div className="pt-6 md:pt-10 pb-6 mx-auto px-6" style={{maxWidth:450}}>
                       <h4 className="my-3 bh-text-primary">BHNi, Blissful Health Nigeria Initiative is an indigenous non governmental organization that was founded in the year 2022 BHNi was incorporated in Nigeria in 2022 with registration number CAC/.No/187280 and headquarters in Nigeria with a corporate office in Canada. BHNi core areas of interest includes Education, Health and Skills enhancement programs.</h4>
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