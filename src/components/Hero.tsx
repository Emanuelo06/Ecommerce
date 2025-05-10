import heroBackground from "../assets/heroBackground.jpg"
import { Link } from "react-router"
const Hero = () => {
  return (
    <div style={{backgroundImage: `url(${heroBackground})` }} 
        className="bg-cover bg-center w-full pt-25 lg:pt-35 xl:pt-50 2xl:pt-60 flex justify-center sm:justify-end sm:pr-10 pb-8 lg:pb-15 xl:pb-25 2xl:pb-30 items-end">
          <div className="w-50 sm:w-80 md:w-100 lg:w-[500px] xl:w-[600px]  bg-[#FFF3e3] p-3 md:p-5 lg:p-7 lg:pb-10 2xl:pb-15 pt-5 rounded-[10px]">
             <p className="text-[#333333] font-[poppins, sans-serif] font-semibold text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl  ">New Arrival</p>
             <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl  text-[#b88e2f] font-[poppins, sans-serif] font-extrabold mt-0.5">Discover Our <br/> New Collection </h1>
             <p className="text-[10px] sm:text-sm md:text-base lg:text-lg xl:text-xl ">Lorem ipsum dolor sit amet consectetur adipisicing elit tellus, luctus nec ullamcorper mattis.</p>
             <button className="text-[8px] sm:text-xs md:text-base lg:text-lg xl:text-xl  text-white bg-[#b88e3f] px-3 sm:px-5 md:px-7 lg:px-9 xl:px-11  py-1.5 sm:py-2.5 md:py-3 lg:py-3.5 xl:py-4  mt-2 xl:mt-3 2xl:mt-5"><Link to="/shop">BUY NOW </Link></button>
          </div> 
        </div>
  )
}
 
export default Hero 