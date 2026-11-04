import React from 'react';
import ProductCard from '@/components/ProductCard';
import { ProductService } from '@/services/products-service';
import type { GetServerSideProps } from 'next';
import Productslayout from '@/components/products-layout/ProductsLayout';

export const getServerSideProps: GetServerSideProps = async (context) => {

  const category = context.query.category as string | undefined;
  const search = context.query.search as string | undefined;

  console.log("products page executed");

  await new Promise((resolve) => setTimeout(resolve, 1000));

  const productResp = category
    ? await ProductService.getProductsByCategory(category)
    : await ProductService.getProducts();

  const searchTerm = search?.trim().toLowerCase() || "";

  const filteredProducts = productResp.filter((product: any) =>
    product.title.toLowerCase().includes(searchTerm)
  );

  return {
    props: {
      category: category || "",
      search: search || "",
      products: filteredProducts,
    },
  };
};

export default function ProductList({
  category,
  search,
  products,
}: any) {

  return (
    <Productslayout>
    <div className="min-h-screen bg-[#F8F6F3] px-5 py-5">

     
      <div className="mb-10 text-center">

        <h2 className="text-3xl font-bold capitalize tracking-tight text-[#35291F] sm:text-4xl">
          {category
            ? category.replaceAll("-", " ")
            : "Shop All Products"}
        </h2>

        <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-[#D8B6A4]"></div>

        <p className="mt-4 text-sm text-gray-500 sm:text-base">
          Explore our collection and find your favorites.
        </p>

      </div>

      {/* Product Grid */}
      <div className="mx-auto grid max-w-8xl grid-cols-1 justify-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

        {products.length > 0 ? (

          products.map((p: any) => (
            <ProductCard key={p.id} product={p} />
          ))

        ) : (

          <p className="col-span-full py-10 text-center text-[#665447]">
            No products found for "{search}".
          </p>

        )}

      </div>

    </div>
    </Productslayout>
  );
}
