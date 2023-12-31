import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useUserContext } from "../../../Context";
const Product = () => {
  const { allProduct, allData } = useUserContext();
  useEffect(() => {
    allProduct();
  }, []);

  return (
    <>
      <div className=" flex-wrap flex gap-5">
        {allData.map((product, index) => {
          //   console.log('inside map function')
          return (
            <Link to={`/singleProduct/${product._id}`} key={product._id}>
              <div className="w-full max-w-sm bg-white  rounded-lg mt-2 ml-3 px-5 border-2 border-gray-300 ">
                <div className="flex justify-center">
                  <img
                    src={product.image1}
                    alt="product image"
                    className="h-28 w-32  "
                  />
                </div>

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
                    <button className="text-white bg-emerald-400 hover:bg-emerald-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:px-5 px-1.5 py-2.5 text-center">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Product;
