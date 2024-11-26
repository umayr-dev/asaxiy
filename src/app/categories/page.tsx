"use client"
import ProductCard from "@/component/Product";
import { CategoriesType } from "@/interface";
import axios from "axios";
import { useEffect, useState } from "react";

const Categoriespage = () => {
  const [categories, setCategories] = useState<CategoriesType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(
          "https://9fd0d88e6d8305b1.mokky.dev/categories"
        );
        setCategories(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, []);
  return (
    <div>
      <div>
      {
        categories.map((item) =>(
          <p key={item.id}>{item.name}</p>
        ))
      }
      </div>
      <ProductCard/>
    </div>
  )
}

export default Categoriespage
// 'use client'

// import { Badge, Heart,Scale} from "lucide-react"
// import { useState, useEffect } from "react"
// // import { Card } from "@/components/ui/card"
// interface Product {
//   id: number
//   name: string
//   price: number
//   monthlyPrice: number
//   monthlyDuration: number
//   rating: number
//   image: string
//   isSuper?: boolean
//   totalSold?: number
// }

// interface CategoriesType {
//   id: number
//   name: string
//   products: Product[]
// }

// export default function CategoriesPage() {
//   const [categories, setCategories] = useState<CategoriesType[]>([])
//   const [isLoading, setIsLoading] = useState(true)

//   useEffect(() => {
//     const getData = async () => {
//       try {
//         const response = await fetch("https://9fd0d88e6d8305b1.mokky.dev/categories")
//         const data = await response.json()
//         setCategories(data)
//       } catch (error) {
//         console.log(error)
//       } finally {
//         setIsLoading(false)
//       }
//     }
//     getData()
//   }, [])

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//         {categories.map((category) => (
//           category.products?.map((product) => (
//             <Card key={product.id} className="relative overflow-hidden group">
//               {product.isSuper && (
//                 <Badge className="absolute top-2 left-2 bg-orange-500 text-white">
//                   SUPER NARX
//                 </Badge>
//               )}
//               <div className="absolute top-2 right-2 flex gap-2">
//                 <button className="p-2 rounded-full bg-white shadow-sm hover:bg-gray-50">
//                   <Heart className="w-5 h-5 text-gray-600" />
//                 </button>
//                 <button className="p-2 rounded-full bg-white shadow-sm hover:bg-gray-50">
//                   <Scale className="w-5 h-5 text-gray-600" />
//                 </button>
//               </div>
//               <div className="p-4">
//                 <div className="aspect-square relative mb-4">
//                   <img
//                     src={product.image || "/placeholder.svg"}
//                     alt={product.name}
//                     className="object-cover w-full h-full rounded-lg"
//                   />
//                 </div>
//                 <div className="space-y-2">
//                   <h3 className="font-medium text-sm line-clamp-2">{product.name}</h3>
//                   <div className="flex items-center gap-1">
//                     {[...Array(5)].map((_, i) => (
//                       <svg
//                         key={i}
//                         className={`w-4 h-4 ${
//                           i < (product.rating || 0) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
//                         }`}
//                         xmlns="http://www.w3.org/2000/svg"
//                         viewBox="0 0 24 24"
//                       >
//                         <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
//                       </svg>
//                     ))}
//                     <span className="text-sm text-gray-500">
//                       {product.totalSold || 0} ta sharh
//                     </span>
//                   </div>
//                   <div className="space-y-1">
//                     <p className="text-xl font-bold">{product.price?.toLocaleString()} so'm</p>
//                     <p className="text-sm text-gray-500">
//                       {product.monthlyPrice?.toLocaleString()} so'm x {product.monthlyDuration} oy
//                     </p>
//                   </div>
//                   <div className="pt-2 flex gap-2">
//                     <Button className="flex-1">Hoziroq xarid qilish</Button>
//                     <Button variant="outline" size="icon">
//                       <svg
//                         className="w-4 h-4"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
//                         />
//                       </svg>
//                     </Button>
//                   </div>
//                 </div>
//               </div>
//             </Card>
//           ))
//         ))}
//       </div>
//     </div>
//   )
// }

