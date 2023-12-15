import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useUserContext } from "../../../Context";
import { useCartContext } from "../../../context/Cart_context";
const SearchProduct = () => {
  const { addToCart } = useCartContext();
  const { searchproduct, searchData, searchName } = useUserContext();

  const handleAddToCart = (product) => {
    // console.log(product);
    addToCart(product);
  };

  useEffect(() => {
    searchproduct();
  }, [searchName]);
  return (
    <div className="flex  pl-2">
      {searchData.map((product, index) => {
        return (
          <div
            key={product._id}
            className="w-[17vw]  max-w-sm bg-white  rounded-lg mx-4 my-3   px-5 border-2 border-gray-300 "
          >
            <Link to={`/singleProduct/${product._id}`}>
              <div className="flex justify-center">
                <img
                  src={product.image1}
                  alt="product image"
                  className="h-28 w-32  "
                />
              </div>
            </Link>

            <div className="px-5 pb-5 mt-4">
              <h5 className="text-sm font-semibold tracking-tight text-gray-400 ">
                {product.category}
              </h5>
              <h5 className="text-2xl  font-semibold tracking-tight  ">
                {product.name}
              </h5>

              <div className="flex items-center justify-between">
                <span className="text-xl font-semibold text-emerald-500 ">
                  ${product.price}
                </span>
                <button
                  className="text-white bg-emerald-400 hover:bg-emerald-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:px-5 px-1.5 py-2.5 text-center"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
          // </Link>
        );
      })}
    </div>
  );
};

export default SearchProduct;
