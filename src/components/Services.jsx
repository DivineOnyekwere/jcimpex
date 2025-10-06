import { FaRegCreditCard, FaRegComments, FaTags, FaTruck   } from "react-icons/fa6";

const Services = () =>{
    return (
        <>
        <div className="h-full w-screen b-[rgba(10,14,238,0.64)] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 p-8 gap-4 md:gap-3 text-white bg-[rgba(3,5,122,0.97)] text-center">
            <div className="h-full  flex flex-col items-center justify-center  bg-[rgba(7,11,207,0.52)] p-4 shadow-lg">
                <div className="p-5 rounded-full border-4 border-white inline-block text-4xl mb-2 md:mb-5">
                    <FaRegCreditCard/>
                </div>
                <h1 className="font-bold">Guarantee Assured</h1>
                <p className="font-medium">Risk-free shopping.</p>
            </div>

            <div className="h-full bg-[rgba(7,11,207,0.52)] shadow-lg p-4 flex flex-col items-center justify-center">
                <div className="p-5 rounded-full border-4 border-white inline-block text-4xl mb-2 md:mb-5">
                    <FaRegComments/>
                </div>
                <h1 className="font-bold">24/7 Customer Care</h1>
                <p className="font-medium">Unparalleled support.</p>
            </div>

            <div className="h-full bg-[rgba(7,11,207,0.52)] shadow-lg p-4 flex flex-col items-center justify-center">
                <div className="p-5 rounded-full border-4 border-white inline-block text-4xl mb-2 md:mb-5">
                    <FaTags/>
                </div>
                <h1 className="font-bold">Best Offers & Deals</h1>
                <p className="font-medium">Unprecedented prices.</p>
            </div>

            <div className="h-full bg-[rgba(7,11,207,0.52)] shadow-lg p-4 flex flex-col items-center justify-center">
                <div className="p-5 rounded-full border-4 border-white inline-block text-4xl mb-2 md:mb-5">
                    <FaTruck />
                </div>
                <h1 className="font-bold">Nationwide Shipping </h1>
                <p className="font-medium">More savings than ever.</p>
            </div>
        </div>
        </>
    )
}

export default Services;