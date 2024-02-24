// routes/products/$productId/index.tsx
import { Link, useLoaderData } from '@remix-run/react';
import { json, LoaderFunction } from '@remix-run/node';
import { productsData } from '~/components/arrayData';

export const loader: LoaderFunction = async ({ params }) => {
  const productId = parseInt(params.productId, 10);
  const product = productsData.find((p) => p.id === productId);

  if (!product) {
    return json(
      { message: 'Product not found' },
      { status: 404 }
    );
  }

  return json({
    product
  });
};

export default function ProductPage() {
    const { product } = useLoaderData<{ product: Product }>();
    return (
      <div className='flex  gap-8 bg-navy items-start justify-center pt-32  px-10 pb-10'>
     <div className='border-2 border-neonGreen  border w-[500px]' >
     <img src={product.product} alt={product.type} className='w-full' />
     </div>
      <div className='w-[355px]'>
        <p className='text-[40px] text-neonGreen oswald'>
          {product.name}
          </p>
        </div>
      </div>
    );
  }