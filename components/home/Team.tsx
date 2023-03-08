import { useEffect } from "react"
import { Image } from "antd"

interface TeamMemberProps{
  img_url?:string,
  name?:string,
  title?:string
}
const TeamMember=({img_url,name,title}:TeamMemberProps)=>(
    <div className="bh-card bh-team-member">
    <div className="img-cover">
    <Image
    src={img_url}  
    className="z-0"
    width={"100%"}
    height={"200px"}
    preview={false}
    alt="event banner"
    />
    </div>
    <div className="bh-primary desc p-3 -mt-2 text-container relative text-center">
        <div className="absolute z-10 h-16 w-16 -top-9" style={{left:"38%"}}>
           <div className="triangle-up"></div>
        </div>
       <h4 className="font-bold text-xl">{name?name:"John Doe"}</h4>
       <p>{title?title:"Founder/CEO"}</p>
    </div>
   </div>
)

export default function Team(){
    useEffect(() => {
        window.addEventListener("keypress",(e)=>{
         console.log(e)
        })
    }, [])
    return (
        <section className="bh-container">
            <div className="py-5">
            <header className="flex items-center justify-between">
                <h4 className="bh-text-danger font-bold text-xl">Team</h4>
                <hr className="bh-danger w-5/12 md:w-10/12" style={{height:"2px"}} />
            </header>
             <h4 className="my-4 bh-text-primary text-2xl md:text-3xl font-bold">Meet our amazing team across sections</h4>
              <div className="flex overflow-x-auto" id="team">
               <TeamMember
               img_url="/images/simon_chibuzor.png"
               name="Simon Chibuzor"
               title="Founder/Senior Manager of HMGL"
               />
               <TeamMember
               img_url="/images/kalu-paul.png"
                name="Kalu Paul I."
                title="Chairman:Board of Directors and Chairman Board of Trustees"
               />
               <TeamMember
                name="Shagba Humphrey T."
                img_url="/images/secretary.png"
                title="Secretary"
               />               
              </div>
            </div>
        </section>
    )
}