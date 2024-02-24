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
      <div>
     
        <img src={product.product} alt={product.type} />
        <p>Product ID: {product.id}</p>
        {/* Add more details as needed */}
        <Link to="/cart">ADD TO CART</Link>
       
      </div>
    );
  }