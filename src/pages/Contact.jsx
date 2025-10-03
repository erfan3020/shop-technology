import React, { useState } from 'react';

const Contact = () => {
  const [formData ,setFormData] = useState({
    name : '' ,
    email : '' , 
    message : ''
  })
  const [submited , setSubmited] = useState(false);

  const handleChange = (e)=>{
    const { name , value } = e.target;
    setFormData(prev => ({...prev , [name]: value}));
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log("📩 فرم ارسال شد: ", formData);
    setSubmited(true);
    setTimeout(()=> setSubmited(false),3000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-16 px-6">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-extrabold text-slate-600 mb-4">تماس با ما</h1>
        <p className="text-slate-600 text-lg">
          اگر سوالی دارید یا میخواید با ما همکاری کنید، پیامتان را ارسال کنید 🥰
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto shadow-lg rounded-2xl p-8 bg-white">
        <h2 className="text-3xl mb-6 text-center text-gray-600 font-extrabold">ارسال پیام</h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-2 text-sm font-medium text-slate-700">نام و نام خانوادگی</label>
            <input 
              type="text" 
              value={formData.name}
              name="name"
              onChange={handleChange}
              placeholder="نام"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-slate-700">ایمیل</label>
            <input 
              type="email" 
              name="email"
              placeholder="ایمیل" 
              value={formData.email} 
              onChange={handleChange} 
              className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-slate-700">پیام</label>
            <textarea
              name="message"
              rows="4"
              placeholder="متن پیام..."
              value={formData.message}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            />
          </div>

          <button 
            type="submit"
            className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-lg hover:bg-indigo-700 transition"
          >
            ارسال پیام
          </button>

          {submited && (
            <p className="text-green-600 text-center mt-3 ">پیام شما با موفقیت ارسال شد ✅</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;