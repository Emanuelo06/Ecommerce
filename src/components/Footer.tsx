import { Link } from "react-router"
const Footer = () => {
  return (
    <div className="pb-3">
        <div className="w-full h-0.5 mt-5 mb-2 bg-gray-200"></div>
        <div className="px-2 flex justify-between">
            <div>
                <h1 className="font-bold sm:text-xl lg:text-2xl xl:text-3xl  text-[#333333]">Furniro.</h1>
                <p className="text-[10px] sm:text-sm lg:text-base xl:text-lg  text-[#9f9f9f] max-w-[100px] sm:max-w-[150px] lg:max-w-[200px] 2xl:max-w-[250px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>
            <div className="text-xs sm:text-sm text-[#9f9f9f] flex flex-col items-start">
                <h1 className="text-base sm:text-xl lg:text-2xl xl:text-3xl  font-bold text-[#333333]">Links</h1>
                <div className="flex flex-col sm:text-sm lg:text-base xl:text-lg   cursor-pointer">
                  <Link to={"/home"}>Home</Link>
                  <Link to={"/shop"}>Shop</Link>
                  <Link to={"/about"}>About</Link>
                  <Link to={"/contact"}>Contact</Link>
                </div>
            </div>
        </div>
        <div className="w-full h-0.5 mt-5 mb-2 bg-gray-200"></div>
        <h1 className="text-xs md:text-sm lg:text-lg xl:text-xl  text-center text-gray-700">2025 Furniro. Coded by Emanuele Czofei</h1>
    </div>
  )
}

export default Footer