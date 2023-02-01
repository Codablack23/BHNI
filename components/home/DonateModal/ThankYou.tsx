import { ModalContext } from "@/context/Provider"
import { useRouter } from "next/router"
import { useContext } from "react"


export default function ThankYou({goBack,push}:any){
    const router = useRouter()
    type close = ((...args: any[]) => any)
    const {closeModal} = useContext(ModalContext)
    const handleComplete=()=>{
      (closeModal as close)()
       router.push("/")
    }
    return (
        <div className="bh-white p-4 flex items-center justify-center md:rounded-lg pt-6" style={{minHeight:"90vh"}}>
            <div className="md:w-5/12 p-3">
                <div className="p-2 py-6 w-full text-center bh-danger rounded-xl">
                    <h1 className="font-bold text-3xl my-4">
                        Thank You
                    </h1>
                    <p>Your donation has been received</p>
                </div>
                <button 
                onClick={handleComplete}
                className="bh-text-danger w-full mt-7">Return to HomePage</button>
            </div>
        </div>
    )
}