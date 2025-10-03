import React, { useState } from 'react';
import ProductGrid from '../components/ProductGrid';
import { Search, Grid, List } from 'lucide-react';
import '../index.css' //css
import Footer from './Footer';
const categories = ["All", "Graphic Cards", "Laptop", "Monitors", "Power Supply"];

const Home = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState("grid");

  return (
    <div className="min-h-screen bg-gray-50">

      {/* 1. بخش هدر و جستجو */}
      <header className="header-sticky bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6 text-center">
          <h1 className="header-title text-4xl font-bold text-gray-800 mb-4">
            فروشگاه Tech Store
          </h1>
          {/* نوار جستجو */}
          <div className="max-w-xl mx-auto relative search-container">
            <input
              type="text"
              placeholder="جستجوی محصول..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input w-full px-5 py-3 pr-12 rounded-full bg-gray-100 text-gray-700 border-2 border-transparent focus:outline-none focus:border-indigo-500"
            />
            <Search className="search-icon absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
          </div>
        </div>
      </header>

      {/* 2. بخش اصلی محتوا */}
      <main className="container mx-auto my-12 px-4">

        {/* فیلتر دسته‌بندی و تغییر حالت نمایش */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-6">
          {/* دکمه‌های دسته‌بندی */}
          <div className="flex flex-wrap gap-3 justify-center category-buttons">
            {categories.map((category, index) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`category-btn px-5 py-2 rounded-full font-semibold
                  ${activeCategory === category
                    ? 'category-active bg-indigo-600 text-white shadow-md'
                    : 'bg-white text-gray-600'
                  }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {category}
              </button>
            ))}
          </div>

          {/* دکمه‌های تغییر حالت نمایش */}
          <div className="view-mode-container flex items-center bg-white rounded-full p-1 shadow-sm">
            <button 
              onClick={() => setViewMode('grid')} 
              className={`view-btn p-2 rounded-full
              ${viewMode === 'grid' 
                ? 'bg-indigo-500 text-white' 
                : 'text-gray-500'}`}>
              <Grid size={20} />
            </button>
            <button 
              onClick={() => setViewMode('list')} 
              className={`view-btn p-2 rounded-full
              ${viewMode === 'list' 
                ? 'bg-indigo-500 text-white' 
                : 'text-gray-500'}`}>
              <List size={20} />
            </button>
          </div>
        </div>
        
        <hr className="divider mb-8" />

        {/* 3. نمایش محصولات */}
        <div className="products-wrapper">
          <ProductGrid 
            category={activeCategory} 
            searchQuery={searchQuery}
            viewMode={viewMode}
          />
        </div>
      </main>
    <Footer/>
    </div>
  );
};

export default Home;