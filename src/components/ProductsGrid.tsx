import { Link } from "react-router";
import useProducts from "./useProducts";
import { useEffect, useState } from "react";
const ProductsGrid = () => {
  const products = useProducts();

  // Limit number of displayed products based on screen width using Tailwind's breakpoints
  const getDisplayLimit = () => {
    if (window.innerWidth < 640) return 3;     // smaller than "sm"
    if (window.innerWidth < 1024) return 4;    // smaller than "lg"
    return 6;                                  // lg and above
  };

  const [displayLimit, setDisplayLimit] = useState(getDisplayLimit());

  useEffect(() => {
    const handleResize = () => setDisplayLimit(getDisplayLimit());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const displayedProducts = products.slice(0, displayLimit);

  return (
    <div className="p-4 flex flex-col items-center gap-4 justify-center">
      <div className=" 
        grid gap-8  
        grid-cols-1 
        sm:grid-cols-2 
        md:grid-cols-2 md:grid-rows-2 
        lg:grid-cols-3 lg:grid-rows-2">
        {displayedProducts.map((product) => (
          <div key={product.id} className="  bg-[#f4f5f7] flex flex-col justify-center w-full shadow-md max-w-[250px] md:max-w-[300px] xl:max-w-[380px]">
            <img src={product.image} className="w-full h-50 sm:h-60 md:h-70 xl:h-90 object-cover object-center " />
            <div className="px-4">
              <h2 className="text-lg sm:text-xl lg:text-2xl lg:mt-4  xl:text-3xl  font-bold mt-2 text-[#333333]">{product.name}</h2>
              <p className="text-sm sm:text-base lg:text-lg lg:mt-2  xl:text-xl  font-medium text-gray-600">{product.description}</p>
              <p className="text-[#333333] font-semibold mt-0 lg:mt-2 lg:mb-2 text-lg sm:text-xl lg:text-2xl xl:text-3xl ">${Number(product.price).toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 lg:mt-10 2xl:mt-20 lg:mb-5 2xl:mb-15 text-center">
        <Link to={"/shop"} className="bg-white sm:text-lg lg:text-2xl xl:text-3xl  text-[#b88e2f] border-[#b88e2f] border-1 px-8 sm:px-10 lg:px-14  py-2 sm:py-3 lg:py-5 xl:py-6  ">
          View All Products
        </Link>
      </div>
    </div>
  );
};

export default ProductsGrid;