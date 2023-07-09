import Image, {StaticImageData} from "next/image"
import Link from "next/link"



function Productcard (props: {
  title: string; 
  price: number; 
  img: string | StaticImageData; 
  category: string;
  id: number;
 }) { 
  return (
    <Link href={`/products/${props.id}`}>
      <div>
          <Image src={props.img} alt="Product-1"/>
          <div className="font-bold text-lg flex justify-center">{props.title}</div>
          <div className="font-bold text-lg flex justify-center">${props.price}</div>
          <div className="font-bold text-lg flex justify-center">Category {props.category}</div>
      </div>
    </Link> 
  )
}

export default Productcard