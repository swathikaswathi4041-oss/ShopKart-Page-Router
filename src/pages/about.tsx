import React from "react";
import Link from "next/link";

function Page() {
  return (
    <div className="bg-white">

    
      <section className="bg-[#E8DCCB] py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">

           
            <div className="order-2 md:order-1">
              <p className="mb-4 text-sm font-semibold tracking-[0.3em] text-[#8C6A50]">
                ABOUT OUR STORE
              </p>

              <h1 className="text-4xl font-bold leading-tight text-[#35291F] md:text-5xl">
                About ShopKart
              </h1>

              <p className="mt-6 max-w-lg text-lg leading-8 text-[#665447]">
                Your trusted online shopping destination for quality
                products and a simple shopping experience.
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-block bg-[#35291F] px-8 py-4 text-sm font-semibold tracking-widest text-white no-underline transition duration-300 hover:bg-[#594333]"
              >
                CONTACT US →
              </Link>
            </div>

   
            <div className="order-1 flex justify-center md:order-2">
              <img
                src="/images/about-1.jpg"
                alt="About ShopKart"
                className="h-[300px] w-full max-w-[450px] rounded-2xl object-cover shadow-lg md:h-[380px]"
              />
            </div>

          </div>
        </div>
      </section>


      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">

            
            <div className="flex justify-center">
              <img
                src="/images/about-2.webp"
                alt="ShopKart shopping experience"
                className="h-[300px] w-full max-w-[450px] rounded-2xl object-cover shadow-md md:h-[380px]"
              />
            </div>

           
            <div>
              <p className="mb-3 text-sm font-semibold tracking-[0.3em] text-[#B99C81]">
                WHO WE ARE
              </p>

              <h2 className="mb-6 text-3xl font-bold leading-tight text-[#35291F] md:text-4xl">
                Why Choose ShopKart?
              </h2>

              <p className="leading-8 text-[#665447]">
                We offer quality products, affordable prices and an easy
                shopping experience for everyone.
              </p>

              <p className="mt-5 leading-8 text-[#665447]">
                We bring together a wide range of products so customers
                can easily browse, compare and find what they need.
              </p>

              <p className="mt-5 leading-8 text-[#665447]">
                Our goal is to make online shopping convenient and
                enjoyable by bringing everything you need into one place.
              </p>
            </div>

          </div>
        </div>
      </section>


     
      <section className="bg-[#F8F5F1] py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">

          <p className="mb-3 text-sm font-semibold tracking-[0.3em] text-[#B99C81]">
            WHAT WE BELIEVE
          </p>

          <h2 className="mb-6 text-3xl font-bold text-[#35291F] md:text-4xl">
            Our Mission
          </h2>

          <p className="text-lg leading-8 text-[#665447]">
            Our mission is to make online shopping simple, convenient and
            enjoyable for everyone. We aim to provide a wide range of
            quality products at affordable prices while creating a
            shopping experience that customers can trust.
          </p>

        </div>
      </section>


      
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">

         
          <div className="mb-14 text-center">

            <p className="mb-3 text-sm font-semibold tracking-[0.3em] text-[#B99C81]">
              THE SHOPKART DIFFERENCE
            </p>

            <h2 className="text-3xl font-bold text-[#35291F] md:text-4xl">
              What Makes Us Different?
            </h2>

            <p className="mt-4 text-[#665447]">
              We focus on making every shopping experience better.
            </p>

          </div>

         
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">

          
            <div className="rounded-xl bg-[#F8F5F1] p-8 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-lg">

              <div className="mb-5 text-5xl">🛍️</div>

              <h3 className="mb-4 text-xl font-bold text-[#35291F]">
                Wide Product Collection
              </h3>

              <p className="leading-7 text-[#665447]">
                Discover a variety of products across different categories
                to meet your everyday needs.
              </p>

            </div>


            <div className="rounded-xl bg-[#F8F5F1] p-8 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-lg">

              <div className="mb-5 text-5xl">💰</div>

              <h3 className="mb-4 text-xl font-bold text-[#35291F]">
                Affordable Prices
              </h3>

              <p className="leading-7 text-[#665447]">
                Enjoy great value with budget-friendly prices and
                exciting shopping offers.
              </p>

            </div>

         
            <div className="rounded-xl bg-[#F8F5F1] p-8 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-lg">

              <div className="mb-5 text-5xl">❤️</div>

              <h3 className="mb-4 text-xl font-bold text-[#35291F]">
                Customer Satisfaction
              </h3>

              <p className="leading-7 text-[#665447]">
                We focus on providing a smooth and enjoyable
                experience for every customer.
              </p>

            </div>

          </div>
        </div>
      </section>


     
      <section className="bg-[#3B2A20] px-6 py-16 text-center">

        <h2 className="text-3xl font-bold text-white md:text-4xl">
          Ready to Explore ShopKart?
        </h2>

        <p className="mx-auto mt-4 max-w-xl leading-7 text-[#E8DCCB]">
          Discover our collection and find your favorite products
          with a simple and enjoyable shopping experience.
        </p>

        <Link
          href="/products"
          className="mt-8 inline-block bg-[#E8DCCB] px-8 py-4 text-sm font-semibold tracking-widest text-[#35291F] no-underline transition duration-300 hover:bg-white"
        >
          EXPLORE PRODUCTS →
        </Link>

      </section>

    </div>
  );
}

export default Page
