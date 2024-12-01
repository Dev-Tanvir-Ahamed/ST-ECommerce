import { Button } from "@/components/ui/button";
import { Eye, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

interface Product {
  id: number;
  image: string;
  name: string;
  description: string;
  salePrice: number;
  originalPrice: number;
}

export const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl ">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <Link to={`/products/${product.id}`}>
          <h3 className="text-xl font-semibold text-gray-800 mb-2 hover:text-[#1F2937] transition-colors duration-300">
            {product.name}
          </h3>
        </Link>
        <div className="flex justify-between items-center mb-4">
          <div>
            <p className="text-[#1F2937] font-bold text-lg">
              ৳ {product.salePrice.toFixed(2)}
            </p>
            <p className="text-gray-500 line-through text-sm">
              ৳ {product.originalPrice.toFixed(2)}
            </p>
          </div>
          <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full">
            Sale!
          </span>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" className="flex-1" asChild>
            <Link to={`/products/${product.id}`}>
              <Eye className="w-4 h-4 mr-2" />
              View
            </Link>
          </Button>
          <Button className="flex-1 bg-[#1F2937] hover:bg-[#374151]">
            <ShoppingCart className="w-4 h-4 mr-2" />
            Buy Now
          </Button>
        </div>
      </div>
    </div>
  );
};
