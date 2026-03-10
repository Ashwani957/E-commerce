const ProductCard = ({ product }) => {
  return (
    <div className="productCard group w-[15rem] transition-all cursor-pointer flex flex-col">
      {/* Image Section */}
      <div className="h-[20rem] w-[15rem] overflow-hidden">
        <img
          className="h-full w-full object-cover object-top transition-transform duration-500 ease-in-out group-hover:scale-105"
          src={product.image}
          alt="Product"
        />
      </div>

      {/* Card Details Section */}
      <div className="textPart pt-4 flex flex-col gap-1">
        <div>
          <p className="font-semibold text-gray-500 text-xs tracking-wider mb-1 transition-all duration-300">{product.brand}</p>
          <p className="text-gray-900 text-sm font-medium line-clamp-2 transition-all duration-300 group-hover:text-[15px]">{product.title}</p>
        </div>

        {/* Price Section */}
        <div className="flex items-center space-x-2 mt-2 transition-all duration-300">
          <p className="font-bold text-gray-900 text-sm transition-all duration-300">₹{product.discount}</p>
          <p className="line-through text-gray-400 text-xs transition-all duration-300">₹{product.price}</p>
          <p className="text-green-500 font-semibold text-xs transition-all duration-300">{product.discount}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductCard;