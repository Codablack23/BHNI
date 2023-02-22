import { FormEventHandler } from "react"

export default function DefaultPage ({goBack,push}:any){
    const handleSubmit:FormEventHandler=(e)=>{
       e.preventDefault()
       push("1")
    }
    return (
      <div className="bh-white p-4 md:rounded-lg pt-6" style={{minHeight:"90vh"}}>
        <p className="text-center font-semibold m-auto mb-8" style={{maxWidth:"520px"}}>BHNi accept donations either in cash or kind from well spirited individuals, corporate bodies, religious organizations and government.</p>
      <form className="md:w-10/12 m-auto" onSubmit={handleSubmit}>
        <div className="mb-6">
        <h4 className="text-2xl text-center bh-text-primary my-4 font-semibold">Donate to the BHNI</h4>
        <div className="md:grid grid-cols-2 gap-10">
          <div className="mb-4 md:mb-0">
            <p>Enter Amount</p>
            <div 
            className="border border-gray-200 rounded-md p-2 h-10 flex items-center" 
              >
              <input 
              type="text" 
              placeholder="100" 
              style={{outline:"none"}}
              className="h-6 ml-3 border-none w-9/12" />
            </div>
          </div>
          <div className="mb-4 md:mb-0">
            <p>Choose Currency</p>
            <select className="border w-full border-gray-200 rounded-md p-1 h-10">
              <option>
                <span className="pl-3">Nigerian Naira</span>
              </option>
            </select>
          </div>
        </div>
        </div>
        <div className="mt-20">
        <h4 className="text-2xl text-center bh-text-primary my-1 font-semibold">My Details</h4>
        <p className="text-sm text-center">We do not share your peersonal details with third parties</p>
        <div className="md:grid grid-cols-2 gap-10 mt-4">
          <div className="mb-4 md:mb-0">
            <p>I Am </p>
            <select className="border w-full border-gray-200 rounded-md p-1 h-10">
              <option>
                <span className="pl-3">An Individual</span>
              </option>
            </select>
          </div>
          <div className="mb-4 md:mb-0">
            <p>Full Name</p>
            <input 
              type="text" 
              placeholder="Enter FullName" 
              style={{outline:"none"}}
              className="border border-gray-200 px-5 py-1 w-full h-10 rounded-md" />
          </div>
          <div className="mb-4 md:mb-0">
            <p>Country/Territory</p>
            <select className="border w-full border-gray-200 rounded-md p-1 h-10">
              <option>
                <span className="pl-3">Nigeria</span>
              </option>
            </select>
          </div>
          <div className="mb-4 md:mb-0">
            <p>Phone Number</p>
           <div className="flex justify-between">
            <select className="border w-2/12 border-gray-200 rounded-md p-1 h-10">
                <option>
                  <span className="pl-3">+234</span>
                </option>
              </select>
            <input 
                type="text" 
                placeholder="123 4567 8901 (optional)" 
                style={{outline:"none"}}
                className="border border-gray-200 px-5 py-1 w-9/12 h-10 rounded-md" />
           </div>
          </div>
          <div className="mb-4 md:mb-0">
            <p>Email</p>
            <input 
              type="text" 
              placeholder="johndoe@gmail.com" 
              style={{outline:"none"}}
              className="border border-gray-200 px-5 py-1 w-full h-10 rounded-md" />
          </div>
          <div>
            <p className="text-sm mt-5">We process your personal data in accordance with our fundraising</p>
            <button type="button" onClick={()=>push("2")}><p className="bh-text-danger">Data Protection Notice</p></button>
          </div>
        </div>
        </div>
        <button className="bh-danger w-full my-6 py-2 rounded-md">Continue</button>
      </form>
   </div>
    )
  }