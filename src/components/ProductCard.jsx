import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ShoppingCart } from 'lucide-react';
import 'react-toastify/dist/ReactToastify.css';
const ProductCard = ({ product }) => {
  const EXCHANGE_RATE = 58000;
  const handleAddToCart = (e) => {
    e.preventDefault();  
    e.stopPropagation();
    console.log(`محصول "${product.name}" با قیمت ${product.price} به سبد اضافه شد.`);
    toast.success(`${product.name} به سبد خرید اضافه شد!`);
  };
  const priceToman = product.price * EXCHANGE_RATE
  return (

    <Link to={`/products/${product.id}`} className="group block">
      <div className="bg-white rounded-xl shadow-md overflow-hidden 
        transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"/>
        <div className="p-4">
          <h3 className="text-lg font-bold text-gray-800 mb-2 h-14 line-clamp-2">
            {product.name}
          </h3>
          <p className="text-sm text-gray-600 mb-4 h-10 line-clamp-2">
            {product.description.substring(0 , 70) + "..."}
          </p>

          <div className="flex justify-between items-center mt-4">
            <p className="text-green-600 font-bold text-xl">
              $ {new Intl.NumberFormat('fa-IR').format(priceToman)}
            </p>
            <button
              onClick={handleAddToCart}
              className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
              <ShoppingCart size={18} />
              <span>افزودن</span>
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;