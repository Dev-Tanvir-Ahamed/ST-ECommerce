import { ProductCard } from "@/components/ProductCard";
import products from "../../db.json";
const Products = () => {
  return (
    <div className="bg-[#F3F4F6]">
      <h1 className="text-center text-4xl font-bold pt-5">
        Our Digital Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 px-6 py-10">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
