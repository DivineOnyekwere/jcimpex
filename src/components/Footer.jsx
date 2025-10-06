
import { FaSquareWhatsapp, FaSquareXTwitter, FaSquareInstagram, FaSquarePinterest, FaSquareFacebook   } from "react-icons/fa6";

const Footer = () => {
    return(
        <div div className="p-8 text-white flex flex-col gap-4 bg-[rgba(4,6,124,0.91)]">
            <div className="w-full grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3  ">
                <div>
                    <h1 className="text-xl font-bold ">Customers Support</h1>
                    <p  className="font-light">Contact us</p>
                    <p className="font-light">Chat with us</p>
                    <p className="font-light">call: +2348027830748</p>
                    <p className="font-light">WhatsApp: +2348027830748</p>
                    <p className="font-light">Email: Contact@jcimpexnigerialimited.com</p>
                </div>

                <div >
                    <h1  className="text-xl font-bold">Legal</h1>
                    <p className="font-light">Terms of Service</p>
                    <p className="font-light">Privacy Policy</p>
                    <p className="font-light">Cookie Policy</p>
                    <p className="font-light">Security</p>
                </div>

                <div>
                    <h1 className="text-xl font-bold">Follow Us</h1>
                    <div className="flex gap-4 text-3xl mt-2">
                        <FaSquareWhatsapp className="cursor-pointer"/>
                        <FaSquareXTwitter className="cursor-pointer"/>
                        <FaSquareInstagram className="cursor-pointer"/>
                        <FaSquarePinterest className="cursor-pointer"/>
                        <FaSquareFacebook className="cursor-pointer"/>
                    </div>
                </div>
            </div>

            <hr className="" />

            <div className="text-center text-sm font-light">
                © 2025 SHOPSPHEREAFRICA. All rights reserved.
            </div>
        </div>
    )
}

export default Footer;