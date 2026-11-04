import Image from "next/image";
import Link from "next/link";
import { ProductService } from "@/services/products-service";


export async function getServerSideProps() {
  const products = await ProductService.getProducts();

  const featuredProducts = products.slice(0, 4);

  return {
    props: {
      featuredProducts,
    },
  };
}

export default function Home({ featuredProducts }: any) {
  return (
    <div className="bg-white">

      {/* HERO SECTION */}
      <section className="grid min-h-[600px] grid-cols-1 md:grid-cols-2">

        <div className="relative min-h-[500px] md:min-h-[600px]">
          <Image
            src="/girl.jpg"
            alt="ShopKart Fashion Collection"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-center"
          />
        </div>

        <div className="flex min-h-[450px] items-center bg-[#D8C8B5] px-8 py-16 md:px-12 lg:px-16">

          <div className="w-full max-w-xl">

            <p className="mb-5 text-sm font-semibold tracking-[0.3em] text-[#795D49]">
              NEW COLLECTION
            </p>

            <h1 className="mb-6 text-4xl font-semibold leading-tight text-[#35291F] md:text-5xl lg:text-6xl">
              Timeless Style.
              <br />
              Modern Elegance.
            </h1>

            <p className="mb-8 max-w-md text-[#665447] md:text-lg">
              Discover your style with ShopKart. Explore our collection
              and find your favorite products for every occasion.
            </p>

            <Link
              href="/products"
              className="inline-flex items-center gap-4 bg-[#35291F] px-8 py-4 text-sm font-medium tracking-widest text-white transition duration-300 hover:bg-[#594333]"
            >
              SHOP NOW →
            </Link>

          </div>
        </div>
      </section>

      {/* OFFERS SECTION */}
      <section className="bg-[#E8DCCB] px-4 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

            <div className="rounded-lg bg-white p-8 text-center shadow-sm">
              <h2 className="mb-3 text-xl font-bold text-[#8C6A50]">
                Up to 50% Off
              </h2>
              <p className="text-sm leading-6 text-gray-500">
                Grab amazing deals on selected products.
              </p>
            </div>

            <div className="rounded-lg bg-white p-8 text-center shadow-sm">
              <h2 className="mb-3 text-xl font-bold text-[#8C6A50]">
                Best Products
              </h2>
              <p className="text-sm leading-6 text-gray-500">
                Explore a variety of products to find your favorites.
              </p>
            </div>

            <div className="rounded-lg bg-white p-8 text-center shadow-sm">
              <h2 className="mb-3 text-xl font-bold text-[#8C6A50]">
                Easy Shopping
              </h2>
              <p className="text-sm leading-6 text-gray-500">
                Enjoy a simple, convenient online shopping experience.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl">

          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-semibold tracking-[0.3em] text-[#B99C81]">
              OUR COLLECTION
            </p>

            <h2 className="text-3xl font-bold text-[#35291F] md:text-4xl">
              Featured Products
            </h2>

            <p className="mt-4 text-gray-500">
              Explore our latest collection and find your favorites.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">

            {featuredProducts.map((product: any) => (
              <div
                key={product.id}
                className="overflow-hidden rounded-lg bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-lg"
              >

                <Link href={`/products/${product.id}`}>
                  <div className="flex h-64 items-center justify-center bg-[#F8F5F1] p-6">
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      className="h-full w-full object-contain"
                    />
                  </div>
                </Link>

                <div className="p-5">
                  <h3 className="mb-3 line-clamp-2 text-lg font-semibold text-[#35291F]">
                    {product.title}
                  </h3>

                  <p className="mb-4 text-lg font-bold text-[#B99C81]">
                    ₹{product.price}
                  </p>

                  <Link
                    href={`/products/${product.id}`}
                    className="block bg-[#35291F] py-3 text-center text-sm font-medium tracking-widest text-white no-underline transition hover:bg-[#594333]"
                  >
                    VIEW PRODUCT
                  </Link>
                </div>

              </div>
            ))}

          </div>

          <div className="mt-12 text-center">
            <Link
              href="/products"
              className="inline-block border-2 border-[#35291F] px-8 py-3 text-sm font-semibold tracking-widest text-[#35291F] no-underline transition hover:bg-[#35291F] hover:text-white"
            >
              VIEW ALL PRODUCTS →
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}