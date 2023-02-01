import {Image} from 'antd'

interface ObjProps{
    icon:string,
    content:string
}

function Objective({icon,content}:ObjProps){
    return (
        <div className="flex items-center col-span-2 md:col-span-1">
        <div style={{flex:1}}>
        <div className="w-28 flex items-center justify-center rounded-full h-28 bh-danger">
           <Image
            src={icon}
            alt="obj"
            height={70}
            preview={false}
            width={70}
           />
        </div>
        </div>
        <p className="ml-2" style={{flex:3}}>{content}</p>
      </div>
    )
}
export default function Objectives(){
    return (
        <section className="bh-white py-5">
            <div className="bh-container">
                <header className="flex items-center justify-between">
                    <h4 className="bh-text-danger font-bold text-xl">Objectives Of BHNI </h4>
                    <hr className="bh-danger w-5/12 md:w-9/12" style={{height:"2px"}} />
                </header>
                <h4 className="my-3 text-2xl md:text-3xl bh-text-primary font-bold">Here are our four (4) key objectives</h4>
                <div className="grid grid-cols-2 gap-10 my-3">
                  <Objective 
                  icon="/icons/health.svg"
                  content="To provide enabling environment towards making qualitative healthcare services available and accessible to rural and urban dwellers."
                  />
                  <Objective 
                  icon="/icons/people.svg"
                  content="To collaborate with MoH and other stakeholders in health care delivery to strengthen health system workforce through incentive driven capacity building platforms."
                  />
                  <Objective 
                  icon="/icons/p_lady.svg"
                  content="To engage actively in public health awareness campaign, advocacy visits to policy makers aimed at reducing mortality rates among infants (0-5years) and pregnant women using family focused health integrated programs."
                  />
                 <Objective 
                  icon="/icons/hands.svg"
                  content="To collaborate with global supply chain organizations in ensuring cutting edge procurement and supply chain mechanisms to forestall avoidable stocks out of health commodities thereby improving service delivery."
                  />
                </div>
           </div>
        </section>
    )
}