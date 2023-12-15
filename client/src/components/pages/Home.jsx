import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { featuredProducts } from "./Temp";
import { Link } from "react-router-dom";
import { useUserContext } from "../../Context";
import { useCartContext } from "../../context/Cart_context";

const Home = () => {
  const { addToCart } = useCartContext();

  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 3,
    },
    1024: {
      items: 4,
    },
    1168: {
      items: 5,
    },
  };

  const handleAddToCart = (product) => {
    console.log(product);
    addToCart(product);
  };

  const items = featuredProducts.map((product) => {
    return (
      <>
        {console.log(product.image1)}
        <div className="w-full max-w-sm bg-white  rounded-lg m-3 px-5">
          <Link to={`/singleProduct/${product.id}`}>
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
      </>
    );
  });

  return (
    <>
      <div className=" min-h-[100vh] items-center  text-4xl">
        <div className="h-[40vh] md:h-[60vh] flex  bg-emerald-100">
          <div className="w-[50%] flex  flex-col items-center justify-center ">
            <div className=" text-center text-slate-800 text-3xl md:text-6xl font-quicksand ">
              Don't miss our daily amazing deals
            </div>
            <div className="text-center text-xl sm:text-3xl text-gray-500 mt-2    ">
              Save up to 60% off on your first order
            </div>
          </div>
          <div className="w-[50%] h-full overflow-hidden flex justify-end">
            <img
              src="../../../public/images/homePage_img.png"
              alt=""
              className="md:w-[90%] "
            />
          </div>
        </div>
        <div className="h-[40vh] ">
          <div className="ml-5 mt-3">Featured Products</div>

          <AliceCarousel
            mouseTracking
            infinite
            autoPlayInterval={2000}
            animationDuration={1500}
            responsive={responsive}
            autoPlay
            items={items}
            disableButtonsControls={true}
            disableDotsControls={true}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
