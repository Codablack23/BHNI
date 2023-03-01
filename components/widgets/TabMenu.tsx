import { FC, useEffect, useState, } from "react"

interface TabData{
    key:number | string,
    component:FC ,
    tab:string,
}
interface TabProps{
    tabs:TabData[],
    defaultTab?:string
}

export default function CustomTab({tabs,defaultTab}:TabProps){
    const [currentTab,setCurrentTab] = useState(defaultTab?defaultTab:tabs[0].key)
    const getTabStyle=(isActive:boolean)=>{
      const shared = `cursor-pointer bh-card mr-4 p-2 text-center transition-all bh-hover-danger`;
      const active = `${shared} bh-danger`;
      const inactive = `${shared} border text-gray-200` 
      return isActive?active:inactive;
    }
    const changeTab=(key:string|number)=>{
      return ()=>setCurrentTab(key as string)
    }
    useEffect(()=>{
     const el = document.getElementById("content")
     el?.animate([
        {opacity:0},
        {opacity:1}
     ],{
        duration:1000,
        
     })
    },[currentTab])
    const {component:Component} = (tabs.find(tab=>tab.key === currentTab)) as TabData
    return (
        <div>
            <ul className="flex items-center ">
                {tabs.map(tab=>(
                    <li 
                    onClick={changeTab(tab.key)}
                    style={{flex:1}}
                    className={getTabStyle(tab.key === currentTab)} 
                    key={tab.key}>
                        {tab.tab}
                    </li>
                ))}
            </ul>
            <div className="my-5" id="content">
                <Component/>
            </div>
        </div>
    )
}