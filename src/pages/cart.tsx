
"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function Cart() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  const totalProducts = cart.reduce(
    (total: number, item: any) => total + item.quantity,
    0
  );

  const totalAmount = cart.reduce(
    (total: number, item: any) =>
      total + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-[#F8F6F2] px-4 py-10 md:px-10">
      <div className="mx-auto max-w-7xl">

        <h1 className="mb-6 text-3xl font-bold text-[#35291F]">
          🛒 Shopping Cart
        </h1>

        <hr className="mb-8 border-[#D8C8B5]" />

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-3">

          {/* CART ITEMS */}
          <div className="space-y-5 lg:col-span-2">

            {cart.length === 0 ? (
              <div className="rounded-2xl bg-white px-6 py-16 text-center shadow-sm">

                <div className="mb-4 text-6xl">🛍️</div>

                <h2 className="text-xl font-bold text-[#35291F]">
                  Your cart is empty
                </h2>

                <p className="mt-2 text-gray-500">
                  Explore our products and find something you love.
                </p>

                <Link
                  href="/products"
                  className="mt-6 inline-block rounded-lg bg-[#35291F] px-6 py-3 font-semibold text-white no-underline transition hover:bg-[#594333]"
                >
                  Go to Products
                </Link>

              </div>
            ) : (
              cart.map((item: any) => (
                <div
                  key={item.id}
                  className="rounded-2xl bg-white p-5 shadow-sm transition hover:shadow-md md:p-6"
                >

                  <div className="grid grid-cols-1 items-center gap-5 sm:grid-cols-4">

                  
                    <div className="flex h-40 items-center justify-center rounded-xl bg-[#F8F5F1] p-3">
                      <img
                        src={item.images?.[0] || item.thumbnail || item.image}
                        alt={item.title}
                        className="h-full w-full object-contain"
                      />
                    </div>

                   
                    <div className="sm:col-span-2">

                      <h2 className="text-lg font-bold text-[#35291F]">
                        {item.title}
                      </h2>

                      <p className="mt-2 text-sm capitalize text-gray-500">
                        Category: {item.category}
                      </p>

                      <p className="mt-2 text-lg font-semibold text-[#006400]">
                        ₹ {Number(item.price).toFixed(2)}
                      </p>

                      <p className="mt-2 text-sm text-[#000000]">
                        ⭐ {typeof item.rating === "object"
                          ? item.rating?.rate
                          : item.rating ?? "No rating"}
                        {typeof item.rating === "number" && " / 5"}
                      </p>

                      <Link
                        href={`/products/${item.id}`}
                        className="mt-3 inline-block text-sm font-semibold text-[#1560BD] no-underline hover:underline"
                      >
                        View More Details →
                      </Link>

                    </div>

                  
                    <div className="text-center">

                      <p className="mb-3 text-sm font-semibold text-gray-600">
                        Quantity
                      </p>

                      <div className="flex items-center justify-center gap-4">

                        <button
                          onClick={() => decreaseQuantity(item.id)}
                          aria-label="Decrease quantity"
                          className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#F4E4D7] text-lg font-bold text-[#35291F] transition hover:bg-[#D8C8B5]"
                        >
                          −
                        </button>

                        <span className="min-w-5 font-bold text-[#35291F]">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() => increaseQuantity(item.id)}
                          aria-label="Increase quantity"
                          className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#35291F] text-lg font-bold text-white transition hover:bg-[#594333]"
                        >
                          +
                        </button>

                      </div>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="mt-4 text-sm font-semibold text-red-600 transition hover:text-red-800"
                      >
                        🗑️ Remove
                      </button>

                    </div>

                  </div>

              
                  <div className="mt-5 flex justify-between border-t border-[#F0E9E2] pt-4">

                    <span className="text-sm text-gray-500">
                      Subtotal ({item.quantity} items)
                    </span>

                    <span className="font-bold text-[#006400]">
                      ₹ {(item.price * item.quantity).toFixed(2)}
                    </span>

                  </div>

                </div>
              ))
            )}

          </div>


         
          {cart.length > 0 && (
            <div className="lg:sticky lg:top-6">

              <div className="rounded-2xl bg-white p-6 shadow-sm">

                <h2 className="mb-6 text-xl font-bold text-[#35291F]">
                  Order Summary
                </h2>

                <div className="mb-4 flex justify-between text-gray-600">
                  <span>Total Products</span>
                  <span className="font-semibold text-[#35291F]">
                    {totalProducts}
                  </span>
                </div>

                <div className="mb-4 flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span className="font-semibold text-[#35291F]">
                    ₹ {totalAmount.toFixed(2)}
                  </span>
                </div>

                <div className="mb-4 flex justify-between text-gray-600">
                  <span>Delivery</span>
                  <span className="font-semibold text-[#8c5522]">
                    Free
                  </span>
                </div>

                <hr className="my-5 border-[#E8DCCB]" />

                <div className="mb-6 flex justify-between gap-3 text-lg font-bold">

                  <span className="text-[#35291F][#35291F]">
                    Grand Total
                  </span>

                  <span className="text-[#006400]">
                    ₹ {totalAmount.toFixed(2)}
                  </span>

                </div>

                <button
                  onClick={() => alert("Checkout coming soon!")}
                  className="w-full rounded-xl bg-[#35291F] px-5 py-3 font-semibold text-white transition hover:bg-[#594333]"
                >
                  Proceed to Checkout →
                </button>

                <Link
                  href="/products"
                  className="mt-4 block text-center text-sm font-semibold text-[#795D49] no-underline transition hover:text-[#35291F]"
                >
                  Continue Shopping
                </Link>

              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
}
