
import AddToCartButton from '@/components/AddToCartButton';
import { ProductService } from '@/services/products-service';
import React from 'react';
import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async (context) => {

  const productId = context.params?.productId as string;

  console.log("You clicked product with id :", productId);

  try {
    const product = await ProductService.getProductById(Number(productId));

    if (!product) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        product,
      },
    };

  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export default function ProductDetails({ product }: any) {

  return (
    <div className='max-w-5xl mx-auto my-10 p-6'>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-white rounded-2xl shadow-lg p-6 md:p-10'>

        <div className='flex justify-center items-center bg-[#F5F1EC] rounded-xl p-8'>

          <img
            src={product.images?.[0] || product.thumbnail}
            alt={product.title}
            className='w-full max-w-[300px] h-[300px] object-contain hover:scale-105 transition duration-300'
          />

        </div>

        <div className='flex flex-col gap-4'>

          <h1 className='text-3xl font-bold'>
            {product.title}
          </h1>

          <p className='text-gray-600 leading-7'>
            {product.description}
          </p>

          <p className="text-3xl font-bold text-[#8c5522]">
            ${product.price}
          </p>

          <div className="flex items-center gap-2">

            <span className="text-yellow-500 text-xl">★</span>

            <span className="font-semibold text-gray-800">
              {product.rating}
            </span>

            <span className="text-gray-500 text-sm">
              / 5 Rating
            </span>

          </div>

          <AddToCartButton product={product} />

        </div>

      </div>

    </div>
  );
}
