import { useEffect } from "react"
import { Image } from "antd"

interface TeamMemberProps{
  img_url?:string,
  name?:string,
  title?:string
}
const TeamMember=({img_url,name,title}:TeamMemberProps)=>(
    <div className="bh-card bh-team-member rounded-lg">
    <div className="img-cover">
    {img_url?null:(
    <Image
    src={"/images/profile-1.png"}
    className="object-cover"
    width={"100%"}
    height={"100%"}
    preview={false}
    alt="event banner"
    />
    )}
    </div>
    <div className="bh-primary p-2 rounded-lg text-center">
       <h4 className="font-bold text-2xl">{name?name:"John Doe"}</h4>
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
             <h4 className="my-4 bh-text-primary text-2xl md:text-3xl font-bold">Meet our amazing team across sections</h4>
              <div className="flex overflow-x-auto" id="team">
               <TeamMember/>
               <TeamMember/>
               <TeamMember/>
               <TeamMember/>
               <TeamMember/>
               <TeamMember/>
               <TeamMember/>
               <TeamMember/>
               
              </div>
            </div>
        </section>
    )
}