import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User, Menu, X } from 'lucide-react';
import NavImage from '../image/D-logo.png';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Dropdown کاربر
  const [isMenuOpen, setIsMenuOpen] = useState(false); // منوی موبایل
  const dropdownRef = useRef(null);

  // بستن Dropdown با کلیک بیرون
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const handleUser = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
    setIsMenuOpen(false); // بستن منوی موبایل هم هنگام کلیک روی آیتم
  };

  // فرض: تعداد محصولات در سبد از state/context می‌آید — الان ثابت است
  const cartItemCount = 3;

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-2">
        <nav className="flex flex-wrap justify-between items-center py-4 gap-4 md:gap-0">
          {/* --- لوگو --- */}
          <div className="flex items-center">
            <Link to="/" onClick={handleClose}>
              <img
                src={NavImage}
                alt="Logo"
                className="py-2 px-4"
                style={{ width: '140px' }}
              />
            </Link>
          </div>

          {/* --- منوهای اصلی (در دسکتاپ نمایش داده شود) --- */}
          <div className="hidden md:flex gap-6 md:order-2">
            <Link
              to="/"
              className="hover:text-gray-700 transition-colors duration-150 font-medium"
              onClick={handleClose}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="hover:text-gray-700 transition-colors duration-150 font-medium"
              onClick={handleClose}
            >
              About
            </Link>
            <Link
              to="/faqs"
              className="hover:text-gray-700 transition-colors duration-150 font-medium"
              onClick={handleClose}
            >
              FAQs
            </Link>
            <Link
              to="/contact"
              className="hover:text-gray-700 transition-colors duration-150 font-medium"
              onClick={handleClose}
            >
              Contact
            </Link>
            <Link to={`/Login`}>Login</Link>
          </div>

          {/* --- دکمه همبرگر برای موبایل --- */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* --- بخش راست: جستجو + سبد خرید + کاربر (فقط در دسکتاپ) --- */}
          <div className="hidden md:flex items-center gap-4 md:order-3">
            {/* --- فرم جستجو --- */}
            <form className="w-64">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full bg-zinc-100 rounded-xl border border-zinc-200 py-2 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all"
                />
              </div>
            </form>

            {/* --- آیکون سبد خرید --- */}
            <Link to="/cart" className="relative" onClick={handleClose}>
              <ShoppingCart
                size={36}
                className="cursor-pointer bg-gray-100 p-2 rounded-full text-black hover:bg-gray-200 transition-colors duration-200"
                aria-label={`Shopping cart, ${cartItemCount} items`}
              />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>

            {/* --- آیکون کاربر + Dropdown --- */}
            <div className="relative" ref={dropdownRef}>
              <User
                size={36}
                className="cursor-pointer bg-gray-200 p-2 rounded-xl text-black hover:bg-gray-300 transition-colors duration-200"
                onClick={handleUser}
                role="button"
                aria-haspopup="true"
                aria-expanded={isOpen}
                aria-label="User menu"
              />

              <div
                className={`absolute right-0 top-full mt-2 z-10 w-48 overflow-hidden rounded-lg shadow-lg bg-zinc-50 transition-all duration-300 ease-in-out ${
                  isOpen
                    ? "opacity-100 transform translate-y-0 scale-100"
                    : "opacity-0 transform -translate-y-2 scale-95 pointer-events-none"
                }`}
              >
                <ul className="flex flex-col py-2">
                  <li>
                    <Link
                      to="/SignUp"
                      className="block px-4 py-2 text-sm hover:bg-gray-100 transition-colors duration-150"
                      onClick={handleClose}
                    >
                      SignUp
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/account"
                      className="block px-4 py-2 text-sm hover:bg-gray-100 transition-colors duration-150"
                      onClick={handleClose}
                    >
                      My Account
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>

        {/* --- منوی موبایل (وقتی همبرگر باز است) --- */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t py-4 px-4 shadow-lg animate-fadeIn">
            <div className="flex flex-col gap-4">
              <Link to="/" onClick={handleClose} className="py-2 border-b hover:bg-gray-50 rounded">Home</Link>
              <Link to="/about" onClick={handleClose} className="py-2 border-b hover:bg-gray-50 rounded">About</Link>
              <Link to="/faqs" onClick={handleClose} className="py-2 border-b hover:bg-gray-50 rounded">FAQs</Link>
              <Link to="/contact" onClick={handleClose} className="py-2 border-b hover:bg-gray-50 rounded">Contact</Link>

              {/* --- نسخه موبایل جستجو --- */}
              <div className="pt-4">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full bg-zinc-100 rounded-xl border border-zinc-200 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-gray-300"
                />
              </div>

              {/* --- لینک سبد خرید در موبایل --- */}
              <Link
                to="/cart"
                onClick={handleClose}
                className="flex items-center justify-center gap-2 py-3 bg-gray-100 rounded-xl mt-2 hover:bg-gray-200 transition"
              >
                <ShoppingCart size={24} />
                <span>My Cart ({cartItemCount})</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;