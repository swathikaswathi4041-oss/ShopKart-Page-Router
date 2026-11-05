"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { usePathname, useSearchParams } from "next/navigation";

function Navigation() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const category = searchParams.get("category") || "";
  const search = searchParams.get("search") || "";

  const { cart } = useCart();

  const count: number = cart.reduce(
    (total: number, item: { quantity: number }): number =>
      total + item.quantity,
    0
  );

  return (
    <div>
      <nav className="min-h-14 bg-[#D8C8B5] text-black">
        <div className="container mx-auto px-4">
          <div className="flex min-h-16 flex-wrap items-center justify-between gap-y-3 py-2">

            {/* Logo */}
            <Link className="text-2xl font-bold" href="/">
              ShopKart
            </Link>

            {/* Search box only show in Products page */}
            {pathname === "/products" && (
              <form
                action="/products"
                method="GET"
                className="order-3 flex w-full items-center gap-2 lg:order-none lg:w-auto"
              >
                {/* Preserve selected category */}
                {category && (
                  <input
                    type="hidden"
                    name="category"
                    value={category}
                  />
                )}

                <input
                  type="search"
                  name="search"
                  defaultValue={search}
                  autoComplete="on"
                  placeholder="Search products..."
                  className="w-[300px] rounded-md border border-[#B99C81] bg-white px-4 py-2.5 text-sm text-[#35291F] outline-none placeholder:text-gray-400 focus:border-[#8C6A50] sm:w-[400px] md:w-[500px] lg:w-[600px]"
                />

                <button
                  type="submit"
                  className="rounded-md bg-[#35291F] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#594333]"
                >
                  Search
                </button>
              </form>
            )}

            {/* Navigation Links */}
            <div className="order-2 flex w-full flex-wrap items-center justify-center gap-x-6 gap-y-3 lg:order-none lg:w-auto lg:justify-end">

              <Link
                className="transition duration-200 hover:text-[#8C6A50]"
                href="/"
              >
                Home
              </Link>

              <Link
                className="transition duration-200 hover:text-[#8C6A50]"
                href="/about"
              >
                About us
              </Link>

              <Link
                className="transition duration-200 hover:text-[#8C6A50]"
                href="/contact"
              >
                Contact us
              </Link>

              <Link
                className="transition duration-200 hover:text-[#8C6A50]"
                href="/products"
              >
                Products
              </Link>

              <Link
                className="relative transition duration-200 hover:text-[#8C6A50]"
                href="/cart"
              >
                🛒

                {cart.length > 0 && (
                  <span className="absolute -right-3 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-600 px-1 text-xs font-bold text-white">
                    {count}
                  </span>
                )}
              </Link>

            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
