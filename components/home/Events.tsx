const Event=({reversed}:{reversed:boolean})=>(
    <div className={`bh-card bh-white p-3 mr-2 flex ${!reversed?"flex-col":"flex-col-reverse"} rounded-lg bh-event `}>
    <div className="img-cover rounded-lg">

    </div>
    <div className="p-2">
        <h4 className="bh-text-primary text-2xl font-semibold">Lorem ipsum dolor sit amet,<br /> consetetur sadipscing elitr,</h4>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
    </div>
    </div>
)

export default function Events(){
    return (
        <div className="bh-container">
         <div className="py-12">
           <header className="flex items-center justify-between">
                <h4 className="bh-text-danger font-bold text-xl">Events</h4>
                <hr className="bh-danger w-10/12" style={{height:"2px"}} />
            </header>
            <h4 className="my-3 text-3xl bh-text-primary font-bold">Let's see what we have been up to!</h4>
             <div className="w-100 overflow-x-auto flex my-5">
               <Event reversed={false}/>             
               <Event reversed={true}/>             
               <Event reversed={false}/>             
             </div>
            <button className="py-2 w-full bh-danger rounded-lg ">View Gallery</button>
         </div>
        </div>
    )
}