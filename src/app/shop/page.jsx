 "use client"

// import ClothingShop from "@/components/cloths/clothingshop";
// export default function ShopPage() {
//   return (
//     <div>
//       <ClothingShop/>

//     </div>
//   );
// }


import dynamic from 'next/dynamic';
// Dynamically import ClothingShop with SSR disabled
const ClothingShop = dynamic(() => import('@/components/cloths/ClothingShop'), {
  ssr: false, // Disable server-side rendering for this component
});

export default function ShopPage() {
  return (
    <div>
      <ClothingShop />
    </div>
  );
}