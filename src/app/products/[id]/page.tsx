import { Products } from "@/utils/mock"
import { StaticImageData } from "next/image"
import Image from "next/image";

const getProductsDetail=(id: number | string)=>{
    return Products.filter((product) => product.id == id);


};

export default function Page({ params }: { params: { id: string } }) {
  const result = getProductsDetail(params.id);



    return <div className="flex justify-evenly gap-10 flex-wrap">    

    {
        result.map((product)=>(
          <div key={product.id} className="flex justify-between gap-6">
            <div>
              <Image src={product.image} alt= {product.name}></Image>
            </div>
            <div>
              Product Detail
              <p>Name {product.name}</p>
              <p>Price {product.price}</p>
              <p>Category {product.category}</p>
            </div>
          </div>
          
      )) 
    }
      
      
    </div>
  }
 