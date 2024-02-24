import { Link } from "@remix-run/react";
import { productsData } from "./arrayData";

const ProductCard = ({product}) => {

    return (  
      <Link to={`/products/${product.id}`} className="w-full">
        <div className="flex relative flex-col justify-between p-5 border border-2 border-neonGreen  border gap-5">
<button className="p-2 absolute text-black  text-base bg-neonGreen top-0 left-0">
{product.seller}
</button>
<img src={product.product} alt="product" className="w-full"/>

<button className="px-2 py-3  rounded-full border  border-2 border-neonGreen text-base text-neonGreen bg-darkNavy hover:bg-neonGreen hover:text-black ease-in-out duration-300  xs:px-5 xs:py-2 w-full">  
ADD TO CART
</button>


        </div>
        </Link>
);
}
 
export default ProductCard;