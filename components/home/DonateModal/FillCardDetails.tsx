import {Image} from 'antd'
import { FormEventHandler } from 'react'

export default function FillCardDetails({goBack,push}:any){
    const handleSubmit:FormEventHandler=(e)=>{
        e.preventDefault()
        push("4")
     }
  return (
    <div className="bh-white p-4 md:rounded-lg pt-6" style={{minHeight:"90vh"}}>
    <div className="md:w-10/12 m-auto">
       <h4 className="text-2xl text-center bh-text-primary my-4 font-semibold">Fill in Your Card Details</h4>
       <div className="mt-10">
        <div className="w-full p-1 text-center rounded-lg">
            <Image
            src='/icons/card-types.png'
            alt='card_types'
            height={30}
            width={80}
            preview={false}
            />
        </div>
       </div>
       <form action="" className="w-100" onSubmit={handleSubmit}>
          <div className="md:grid grid-cols-2 gap-10">
          <div className="mb-4 md:mb-0">
            <p className="font-semibold">Card Number</p>
            <div 
            className="border border-gray-200 rounded-md p-2 h-10 flex items-center" 
              >
              <input 
              type="text" 
              placeholder="XXXX-XXXX-XXXX-XXXX" 
              style={{outline:"none"}}
              className="h-6 ml-3 border-none w-9/12" />
            </div>
          </div>  
          <div className="mb-4 md:mb-0">
            <p className="font-semibold">Expiry Date</p>
            <div 
            className="border border-gray-200 rounded-md p-2 h-10 flex items-center" 
              >
              <input 
              type="text" 
              placeholder="MM/YY" 
              style={{outline:"none"}}
              className="h-6 ml-3 border-none w-9/12" />
            </div>
          </div>  
          <div className="mb-4 md:mb-0">
            <p className="font-semibold">CVV/CVC</p>
            <div 
            className="border border-gray-200 rounded-md p-2 h-10 flex items-center" 
              >
              <input 
              type="text" 
              placeholder="XXX" 
              style={{outline:"none"}}
              className="h-6 ml-3 border-none w-9/12" />
            </div>
          </div>  
          <div className="mb-4 md:mb-0">
            <p className="font-semibold">Full Name</p>
            <div 
            className="border border-gray-200 rounded-md p-2 h-10 flex items-center" 
              >
              <input 
              type="text" 
              placeholder="Full name as on card" 
              style={{outline:"none"}}
              className="h-6 ml-3 border-none w-9/12" />
            </div>
          </div>  
          </div>
          <button className="bh-danger w-full my-6 py-2 rounded-md font-semibold">Pay 10,000</button>

       </form>
       <div className="mt-10 flex justify-between items-center">
          <div className="w-3/12">
          <Image
            src='/icons/secure.svg'
            alt='card_types'
            height={"100%"}
            width={"100%"}
            preview={false}
          />
          </div>
          <div className="w-3/12 text-center">
          <Image
            src='/icons/mcAfee.png'
            alt='card_types'
            height={40}
            width={100}
            preview={false}
          />
          </div>
          <div className="w-3/12 text-right">
          <Image
            src='/icons/norton_secure_seal.png'
            alt='card_types'
            height={80}
            width={100}
            preview={false}
          />
          </div>
       </div>
    </div>
    </div>
  )
}