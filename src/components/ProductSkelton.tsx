
import Productslayout from "@/components/products-layout/ProductsLayout";

export default function ProductSkelton() {
  return (
    <Productslayout>
      <div className="min-h-screen bg-[#F8F6F3] px-5 py-5">
        {/* Page Heading */}
        <div className="mb-10 text-center">
          <div className="mx-auto h-9 w-64 rounded bg-gray-200 animate-pulse" />

          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-[#D8B6A4] animate-pulse" />

          <div className="mx-auto mt-4 h-4 w-72 max-w-full rounded bg-gray-200 animate-pulse" />
        </div>

        {/* Product Grid */}
        <div className="mx-auto grid max-w-8xl grid-cols-1 justify-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div
              key={item}
              className="w-full overflow-hidden rounded-xl border border-[#EEE8E1] bg-white shadow-sm"
            >

              {/* Product Image */}
              <div className="relative flex h-60 items-center justify-center overflow-hidden bg-[#F8F5F1] p-6">
                <div className="absolute left-4 top-4 h-6 w-20 rounded bg-[#D8C8B5] animate-pulse" />
                <div className="h-full w-full rounded-lg bg-gray-200 animate-pulse" />
              </div>

              {/* Product Details */}
              <div className="p-5">

                {/* Title */}
                <div className="mb-3 space-y-2">
                  <div className="h-5 w-full rounded bg-gray-200 animate-pulse" />
                  <div className="h-5 w-3/4 rounded bg-gray-200 animate-pulse" />
                </div>

                {/* Rating */}
                <div className="mb-4 flex items-center gap-2">
                  <div className="h-7 w-14 rounded bg-[#F5E9D9] animate-pulse" />
                  <div className="h-4 w-28 rounded bg-gray-200 animate-pulse" />
                </div>

                {/* Price */}
                <div className="mb-5 flex items-center gap-2">
                  <div className="h-7 w-24 rounded bg-gray-200 animate-pulse" />
                  <div className="h-5 w-20 rounded bg-gray-200 animate-pulse" />
                </div>

                {/* Buttons */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="h-10 rounded-md bg-gray-200 animate-pulse" />
                  <div className="h-10 rounded-md bg-gray-200 animate-pulse" />
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </Productslayout>
  );
}
