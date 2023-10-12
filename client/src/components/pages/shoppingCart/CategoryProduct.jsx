import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useUserContext } from "../../../Context";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const CategoryProduct = () => {
  const navigateTo = useNavigate();
  const { category, setCategoryData, categoryData } = useUserContext();

  const handlecategoryData = async () => {
    if (category == "All") {
      navigateTo("/");
    } else {
      try {
        console.log("inside handlecategorydata");
        const { data } = await axios.get(`/api/v1/admin/getProductCategory`, {
          category,
        });
        console.log(data);
        setCategoryData(data.products);
        console.log(data.products);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    handlecategoryData();
  }, []);

  return (
    <>
      <div className="border border-green-500 flex gap-5">
        {categoryData.map((product) => {
          console.log("inside map function");
          return (
            <>
              <Link to={`/singleProduct/${product._id}`}>
                <div className="w-full max-w-sm bg-white  rounded-lg m-3 px-5 border border-red-600 ">
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
                      <a
                        href="#"
                        className="text-white bg-emerald-400 hover:bg-emerald-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:px-5 px-1.5 py-2.5 text-center"
                      >
                        Add to cart
                      </a>
                    </div>
                  </div>
                </div>
              </Link>
            </>
          );
        })}
      </div>
    </>
  );
};

export default CategoryProduct;
