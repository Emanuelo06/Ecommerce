import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Home2 from "../assets/home2.jpg"
import Home3 from "../assets/home3.jpg"
import Home4 from "../assets/home4.jpg"
import HomeCards from "../components/HomeCards"
import ProductsGrid from "../components/ProductsGrid" // ✅ Fix the name here
import Footer from "../components/Footer"

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="w-full mt-5 lg:mt-10 xl:mt-15 2xl:mt-20 xl:mb-10 font-[poppins, sans-serif]">
        <h1 className="text-center text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl  font-extrabold text-[#333333]">Browse The Range</h1>
        <p className="text-center text-[10px] sm:text-sm md:text-base lg:text-lg xl:text-xl  sm:mb-5 lg:mb-10">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div className="flex flex-col sm:flex-row justify-between items-center mt-2 xl:mt-15 p-2">
          <HomeCards image={Home4} text="Dining" />
          <HomeCards image={Home3} text="Living" />
          <HomeCards image={Home2} text="Bedroom" />
        </div>
      </div>
      {/* Products showcase */}
      <div className="w-full mt-5 font-[poppins,sans-serif]">
        <h1 className="text-center text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl   lg:mb-10 xl:mb-15 font-extrabold text-[#333333]">Our Products</h1>
        <ProductsGrid /> {/* ✅ Add this line */}
      </div>

      <Footer/>
    </div>
  );
};

export default Home;
