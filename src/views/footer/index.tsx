import logo from "@/assets/images/Logo.webp"
import Image from "next/image"

const Footer = () => {
    return(
    <>
        <div className="grid grid-cols-4 justify-between px-14">
            <div><Image src={logo} alt="logo"  className="w-40" /></div>
            <div className="text-lg font-bold">Company</div>
            <div className="text-lg font-bold">Support</div>
            <div className="text-lg font-bold">Contact</div>
            <div>
              


            </div>
            <div>About</div>
            <div>Support Carrer</div>
            <div>Whatsapp</div>
            <div>Small, artisan label that offers a</div>
            <div>Terms of Use</div>
            <div>24h Service</div>
            <div>Support 24h</div>
            <div>thoughtfully curated collection of high</div>
            <div>Privacy Policy</div>
            <div>Quick Chat</div>
            <div></div>
            <div>quality everyday essentials made.</div>
            <div>How it Works</div>
            <div></div>
            <div></div>
            <div>Col1</div>
            <div>Contact Us</div>

            

                



        </div>

        <div><hr className="h-px my-8 bg-gray-400 border-0 dark:bg-gray-700"></hr></div>
        <div className="flex justify-around">
            <div>Copyright 2022 Dine Market</div>
            <div>Design by: Weird Design Studio</div>
            <div>Code by: Imran Bashir</div>



        </div>
        </>

    )



}

export default Footer;