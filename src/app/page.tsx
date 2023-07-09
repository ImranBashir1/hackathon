import Image from 'next/image'
import Hero from "@/views/hero/index"
import ProductsList from '@/views/products/productslist'

export default function Home() {
  return (
    <div>
      
      <Hero />
      <ProductsList />


    </div>
  )
}
