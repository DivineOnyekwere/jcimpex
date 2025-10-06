


const Contact = () => {

    return(
        <>
            <div className=" w-screen flex justify-center bg-gray-200 p-5">
                <form action="#" className=" w-[600px] grid p-9 gap-4 shadow-xl">
                    <input type="text" placeholder="Name" className=" p-2 rounded-md border-2 w-full border-orange-500 outline-0"/>
                    <input type="email" placeholder="Email" className="p-2 rounded-md border-2 w-full border-orange-500 outline-0"/>
                    <input type="tel" placeholder="Phone Number" className="p-2 rounded-md border-2 w-full border-orange-500 outline-0"/>
                    <textarea rows="4" placeholder="Message" className="p-2 rounded-md border-2 w-full border-orange-500 outline-0"/>

                   <div>
                     <button className="bg-orange-500 p-2 text-white px-3 cursor-pointer">Send</button>
                   </div>
                </form>
            </div>
        </>
    )
}

export default Contact;