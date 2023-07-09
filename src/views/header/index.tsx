import Image from "next/image";
import logo from "@/assets/images/Logo.webp"
import Link from "next/link"
import {LucideShoppingCart} from "lucide-react"

const Header=() => {
    return (
        <div className="flex justify-between items-center py-8 px-8">
            <Link href={'/'}><Image src={logo} alt="logo"  className="w-40" /></Link>
            <ul className="flex gap-5">
                <li>
                    <Link href={"/"}>Home</Link>
                </li>
                <li>
                    <Link href={"/category/female"}>Female</Link>
                </li>
                <li>
                    <Link href={"/category/male"}>Male</Link>
                </li>
                <li>
                    <Link href={"/category/kids"}>Kids</Link>
                </li>
                <li>
                    <Link href={"/products"}>All Products</Link>
                </li>
            </ul>
            <div className= "h-10 w-10 rounded-full bg-gray-400 flex justify-center items-center">
                <LucideShoppingCart />
            </div>
            
        </div>
    )
}

export default Header;