import { productsData } from "../arrayData";
import ProductCard from "../cards";

const FeaturedProducts = () => {
    return (  <section className="flex flex-col gap-8 bg-navy items-center px-10">
<h1 className="oswald text-[40px] text-neonGreen font-bold">
FEATURED PRODUCT
</h1>
<div className="grid grid-cols-3 justify-between gap-10">
{productsData.map((product) => (
          <ProductCard key={product.id} product={product}   />
        ))}
                    </div>
    </section>);
}
 
export default FeaturedProducts;