import { Products } from "@/utils/mock"
import Productcard from "@/components/productcard"
import { StaticImageData } from "next/image"

const getProductsByCategory=(category: string)=>{
    return Products.filter((product) => product.category === category);


}

export default function Page({ params }: { params: { slug: string } }) {
  const result = getProductsByCategory(params.slug);



    return <div className="flex justify-center gap-10 flex-wrap">    

    {
        result.length>0 ? result.map((product)=>(
          <Productcard 
              key={product.id} 
              title={product.name} 
              price={product.price} 
              img={product.image}
              category={product.category}
              id={product.id}/>
      )) : <p>No products</p>

    }
    
    {
        
    }</div>
  }