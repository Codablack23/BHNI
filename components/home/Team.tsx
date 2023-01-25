import { useEffect } from "react"

const TeamMember=()=>(
    <div className="bh-card bh-team-member rounded-lg">
    <div className="img-cover">
       
    </div>
    <div className="bh-primary p-2 rounded-lg text-center">
       <h4 className="font-bold text-2xl">John Doe</h4>
       <p>Founder/CEO</p>
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
             <h4 className="my-4 bh-text-primary text-3xl font-bold">Meet our amazing team across sections</h4>
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