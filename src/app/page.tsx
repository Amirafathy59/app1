
import Image from "next/image";
import { Button } from "@/components/ui/button"
import FeaturedProducts from "./_component/FeaturedProducts/FeaturedProducts";
import Slider from "./_component/Slider/Slider";
import img1 from '../assets/banner-4.jpeg'
import img2 from '../assets/blog-img-1.jpeg'
import img3 from '../assets/blog-img-2.jpeg'
import dynamic from "next/dynamic";

// import ShopCategory from "./_component/ShopCategory/ShopCategory";

const ShopCategory=  dynamic(() => import('./_component/ShopCategory/ShopCategory') , {
  loading:()=> <div className="bg-gray-400"> Loading</div>
});
export default function Home() {
  return (
  <>
  
  <h2>Home Page</h2>
 <Slider spaceBetween={0} slidesPerView={1} pageList={[img1.src , img2.src , img3.src]}  />


{/* shop catg */}
  <ShopCategory/>

  <FeaturedProducts/>
  </>
  );
}


// import React from 'react'
// import {FadeLoader} from 'react-spinners'
// export default function Loading() {
//   return (
//     <div className='flex justify-center items-center h-screen'>
//      <FadeLoader color='#16a24a' />

//     </div>
//   )
// }

