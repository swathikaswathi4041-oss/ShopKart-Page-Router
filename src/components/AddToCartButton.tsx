import { useCart } from "@/context/CartContext";

export default function AddToCartButton({ product }: any) {
  const { addToCart } = useCart();

  return (
    <button
      onClick={() => addToCart(product)}
      className="bg-[#35291F] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#594333] transition duration-300"
    >
      Add to Cart
    </button>
  );
}
