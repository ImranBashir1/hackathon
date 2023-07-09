import { Products } from "@/utils/mock"
import Productcard from "@/components/productcard"

const AllProducts =() =>{
    return(
    
        <div className="flex justify-center gap-10 flex-wrap">    
            {
                Products.map((product)=>(
                    <Productcard 
                        key={product.id} 
                        title={product.name} 
                        price={product.price} 
                        img={product.image}
                        category={product.category}
                        id={product.id}
                        />
                ))
            }
            
            {/* <Productcard title="abc" price={100} img={p1}/>
            <Productcard title="xyz"  price={200} img={p2}/>
            <Productcard title="lov" price={300} img={p3}/> */}
        </div>

    )
}
export default AllProducts