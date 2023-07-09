import Image from "next/image"
import p1 from "@/assets/images/p1.webp"
import p2 from "@/assets/images/p2.png"
import p3 from "@/assets/images/p3.png"
import { Products } from "@/utils/mock"

import Productcard from "@/components/productcard"

export const productslist = () => {
   const productChecks = Products.slice(0,3)
  return (
    <>
    <div className="flex justify-center">Products</div>
        <div className="flex justify-center gap-10">    
            {
                productChecks.map((product)=>(
                    <Productcard key={product.id} 
                        title={product.name} 
                        price={product.price} 
                        img={product.image}
                        category={product.category}
                        id={product.id}/>
                ))
            }
            
            
            
            
        
        </div> 
        </>
    )
}

export default productslist