"use client";

import { useCart } from "@/context/CartContext";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ProductCard(props: any) {
  const prod = props.product;
  const router = useRouter();
  const { addToCart } = useCart();

  // Calculate discounted price
  const discountPrice =
    prod.price - (prod.price * prod.discountPercentage) / 100;

  return (
    <div className="group w-full overflow-hidden rounded-xl border border-[#EEE8E1] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

    
      <Link href={`/products/${prod.id}`} className="block">
        <div className="relative flex h-60 items-center justify-center overflow-hidden bg-[#F8F5F1] p-6">

          
          <span className="absolute left-4 top-4 z-10 bg-[#8C6A50] px-3 py-1.5 text-xs font-semibold text-white">
            {prod.discountPercentage}% OFF
          </span>

          <img
            src={prod.images?.[0]}
            alt={prod.title}
            className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
          />

        </div>
      </Link>


      
      <div className="p-5">

        <Link
          href={`/products/${prod.id}`}
          className="no-underline"
        >
          <h3 className="mb-3 line-clamp-2 min-h-12 text-base font-semibold leading-6 text-[#35291F] transition hover:text-[#8C6A50]">
            {prod.title}
          </h3>
        </Link>


       
        <div className="mb-4 flex items-center gap-2">

          <span className="bg-[#F5E9D9] px-2.5 py-1 text-xs font-semibold text-[#795D49]">
            ★ {prod.rating}
          </span>

          <span className="text-xs text-[#8B8178]">
            Customer Rating
          </span>

        </div>


      
        <div className="mb-5 flex flex-wrap items-center gap-2">

          <span className="text-xl font-bold text-[#35291F]">
            ₹{discountPrice.toFixed(2)}
          </span>

          <span className="text-sm text-gray-400 line-through">
            ₹{prod.price}
          </span>

        </div>


       
      <div className="grid grid-cols-2 gap-3">

  <button
    onClick={() => router.push(`/products/${prod.id}`)}
    className="rounded-md border border-[#35291F] bg-white px-2 py-2.5 text-xs font-semibold text-[#35291F] transition duration-300 hover:bg-[#35291F] hover:text-white sm:text-sm"
  >
    View Product
  </button>

  <button
    onClick={() => addToCart(prod)}
    className="rounded-md bg-[#35291F] px-2 py-2.5 text-xs font-semibold text-white transition duration-300 hover:bg-[#594333] sm:text-sm"
  >
    Add to Cart
  </button>

</div>

      </div>

    </div>
  );
}
