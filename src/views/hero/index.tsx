import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/images/hero.webp";
import Image from "next/image";

const Hero =() =>{
    return(
        <section className="flex flex-col lg:flex-row">
            <div className="flex-1">
            <Badge className="py-3 px-6 rounded-lg bg-blue-200 text-blue-600">Badge</Badge>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mt-6">
            An Industrial Take on Streetwear
            </h1>
            <p className="leading-7 [&:not(:first-child)]:mt-3">
            Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.
            </p>
            <Button className="bg-black h-12 px-8 mt-3">Start Shopping</Button>

                
            </div>
           
            <div className="flex-1 rounded-full bg-gray-300 relative ">
                <div className="h-76"><Image src={heroImage} alt="Image" /></div>
            </div>
                
           





        </section>




    )
}

export default Hero;