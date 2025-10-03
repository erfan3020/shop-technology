import React from 'react'
// import { Form, Link } from 'react-router-dom'
import {Mail , Phone , MapPin , Send , Instagram , Twitter , Linkdin} from 'lucide-react';
function Footer() {
  // const currentYear = new Date().getFullYear()
  return (
  <footer className="bg-gray-800 text-gray-300 pt-16 pb-16">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-4 gap-10">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-white">Tech Store</h3>
          <p className="text-sm leading-relaxed">
            فروشگاه تخصصیی قطعات کامیپوتر و تکلونوژی های روز ما بهترین ها برای شما فراهم میکنیم
          </p>
          <div className="flex items-center gap-3">
            <Mail size={20} className='text-indigo-00'/>
            <span>info@techstore.com</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone size={20} className='text-indigo-400'/>
          </div>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer