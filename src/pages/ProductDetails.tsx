import { Button } from "@/components/ui/button";
import { useParams } from "react-router-dom";
import products from "../../db.json";

const ProductDetails = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = products.find((p) => p.id === parseInt(productId ?? ""));
  console.log(product);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="bg-[#F3F4F6]">
      <div className="p-6 max-w-4xl mx-auto">
        <div className="border rounded-lg shadow-lg bg-white p-4">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-72 object-cover mb-4"
          />
          <h1 className="text-2xl font-semibold text-gray-800">
            {product.name}
          </h1>
          {/* <p className="text-gray-500 mb-4">{product.tag}</p> */}
          <p className="text-red-500 font-bold text-lg">
            ৳ {product.originalPrice}
          </p>

          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-4">Details:</h2>
            <p className="text-gray-700">{product.details}</p>
          </div>

          {/* Add to Cart or Buy Now Button */}
          <div className="mt-4">
            <Button>Buy Now</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
