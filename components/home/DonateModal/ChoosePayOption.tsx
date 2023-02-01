import {Image} from 'antd'

export default function ChoosePayOption({goBack,push}:any){
  return (
    <div className="bh-white p-4  md:rounded-lg pt-6" style={{minHeight:"90vh"}}>
    <div className="md:w-10/12 m-auto">
       <h4 className="text-2xl text-center bh-text-primary my-4 font-semibold">Choose Payment Option</h4>
       <div className="mt-10">
        <button className="w-full border border-gray-300 p-1 text-center rounded-lg"
        onClick={()=>push("3")}
        >
            <Image
            src='/icons/card-types.png'
            alt='card_types'
            height={30}
            width={80}
            preview={false}
            />
        </button>
        <button className="w-full border mt-3 border-gray-300 p-1 text-center rounded-lg">
            <Image
            src='/icons/gpay.png'
            alt='card_types'
            height={30}
            width={50}
            preview={false}
            />
        </button>
       </div>
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