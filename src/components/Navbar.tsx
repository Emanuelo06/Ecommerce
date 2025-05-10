import Logo from '../assets/logo.jpg';
import { Link } from 'react-router-dom';
import { IoMdPerson } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="flex flex-col p-1 xl:px-3 w-full">
      {/* Top Bar */}
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center">
          <img src={Logo} className="w-[30px] sm:w-[40px] lg:w-[50px] xl:w-[60px]  h-auto pb-1" />
          <h1 className="font-bold text-lg sm:text-2xl lg:text-3xl xl:text-4xl  ml-2">Furniro</h1>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:text-lg lg:text-xl xl:text-2xl   cursor-pointer md:flex text-[10px] items-end pb-1 md:px-3 gap-2 lg:gap-4 xl:gap-6 2xl:gap-8">
          <Link to="/" >Home</Link>
          <Link to="/Shop" >Shop</Link>
          <Link to="/About" >About</Link>
          <Link to="/About" >About</Link>
          <Link to="/Contact">Contact</Link>
        </ul>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-sm font-bold"
        >
          {isOpen ? <p className='text-lg'>Close</p> : <p className='text-xl'>☰</p>}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
          <ul className="flex flex-col   w-full items-start px-3 py-2 pt-3 self-end gap-2 mt-2 text-[12px]  md:hidden">
            <div className='w-full h-[2px] bg-gray-200  absolute top-11 left-0'></div>
            <div className='flex w-full justify-between '>
                <IoMdPerson size={24}/>
                <CiSearch size={24} />
                <CiShoppingCart size={24}/>
            </div>
            <Link to="/" className='sm:text-base'>Home</Link>
            <Link to="/Shop" className='sm:text-base'>Shop</Link>
            <Link to="/About" className='sm:text-base'>About</Link>
            <Link to="/Contact" className='sm:text-base'>Contact</Link>
          </ul>
          
      )}
    </nav>
  );
};

export default Navbar;
