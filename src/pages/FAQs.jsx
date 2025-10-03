import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
// ✅ 1. ایمپورت صحیح Link
import { Link } from 'react-router-dom';

const faqData = [
  // ... داده‌ها بدون تغییر باقی می‌مانند ...
   {
    id: 1,
    category: 'سفارشات',
    question: 'چگونه می‌توانم یک سفارش ثبت کنم؟',
    answer: 'برای ثبت سفارش، ابتدا محصول مورد نظر خود را به سبد خرید اضافه کنید. سپس به صفحه سبد خرید رفته و روی دکمه "تکمیل خرید" کلیک کنید. در نهایت اطلاعات خود را وارد کرده و پرداخت را انجام دهید.'
  },
  {
    id: 2,
    category: 'ارسال',
    question: 'زمان ارسال سفارشات چقدر است؟',
    answer: 'سفارشات در تهران طی ۱ تا ۲ روز کاری و در شهرستان‌ها طی ۳ تا ۵ روز کاری از طریق پست پیشتاز ارسال می‌شوند.'
  },
  {
    id: 3,
    category: 'پرداخت',
    question: 'آیا پرداخت در محل امکان‌پذیر است؟',
    answer: 'در حال حاضر، پرداخت فقط به صورت آنلاین از طریق درگاه‌های امن بانکی امکان‌پذیر است. ما در تلاشیم تا به زودی قابلیت پرداخت در محل را نیز اضافه کنیم.'
  },
  {
    id: 4,
    category: 'سفارشات',
    question: 'چگونه می‌توانم سفارشم را پیگیری کنم؟',
    answer: 'پس از ارسال سفارش، کد رهگیری پستی برای شما از طریق پیامک ارسال می‌شود. شما می‌توانید با وارد کردن این کد در سایت اداره پست، وضعیت مرسوله خود را پیگیری کنید.'
  },
  {
    id: 5,
    category: 'حساب کاربری',
    question: 'آیا برای خرید باید حتما حساب کاربری داشته باشم؟',
    answer: 'بله، برای ثبت سفارش و پیگیری بهتر، نیاز به ایجاد یک حساب کاربری دارید. ثبت نام بسیار ساده و سریع است.'
  },
  {
    id: 6,
    category: 'ارسال',
    question: 'هزینه ارسال چقدر است؟',
    answer: 'هزینه ارسال بر اساس وزن مرسوله و شهر مقصد به صورت خودکار محاسبه و در مرحله نهایی خرید به شما نمایش داده می‌شود.'
  },
];

// ✅ 2. کامپوننت AccordionItem اصلاح شده
const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200">
      <button 
        className="w-full flex justify-between items-center text-right py-5 px-4 focus:outline-none"
        onClick={onClick} // ✅ اصلاح شده: onClick
      >
        <span className="text-lg font-semibold text-gray-800">{question}</span> {/* ✅ اصلاح شده: font-semibold */}
        <ChevronDown 
          className={`w-6 h-6 text-indigo-500 transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`}
        />
      </button>
      {/* ✅ 3. بخش نمایش جواب اضافه شد */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}
      >
        <p className="p-4 pt-0 text-gray-600 leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
};

function FAQs() {
  const [openQuestionId, setOpenQuestionId] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...new Set(faqData.map(item => item.category))];
  
  const filteredFaqs = activeCategory === 'All'
    ? faqData
    : faqData.filter(item => item.category === active-category);

  // ✅ 4. منطق handleToggle کامل شد
  const handleToggle = (id) => {
    setOpenQuestionId(openQuestionId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto"> {/* ✅ اصلاح شده: max-w-4xl */}
        {/* هدر صفحه */}
        <div className="text-center mb-12">
          <HelpCircle className='w-16 h-16 mx-auto text-indigo-500 mb-4' /> {/* ✅ اصلاح شده: w-16 */}
          <h1 className="text-4xl font-extrabold text-gray-800">سوالات متداول</h1> {/* ✅ اصلاح شده: font-extrabold */}
          <p className="mt-4 text-lg text-gray-600">پاسخ سوالات پرتکرار شما را در اینجا آماده کرده‌ایم.</p>
        </div>

        {/* دکمه‌های فیلتر */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map(category => (
            <button 
              key={category}
              onClick={() => setActiveCategory(category)} // ✅ اصلاح شده: onClick
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 
                ${activeCategory === category 
                  ? 'bg-indigo-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
            >
              {category === 'All' ? 'همه' : category}
            </button>
          ))}
        </div>

        {/* لیست سوالات */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {filteredFaqs.map(faq => (
            <AccordionItem 
              key={faq.id} 
              question={faq.question} 
              answer={faq.answer} 
              isOpen={openQuestionId === faq.id} 
              onClick={() => handleToggle(faq.id)} // ✅ اصلاح شده: onClick
            />
          ))}
        </div>
        
        {/* بخش تماس */}
        <div className="mt-12 text-center bg-white p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold text-gray-800">پاسخ خود را پیدا نکردید؟</h3>
          <p className="mt-3 text-gray-600">تیم پشتیبانی ما همیشه آماده پاسخگویی به شماست. با ما در تماس باشید.</p>
          <Link to="/contact"> {/* ✅ اصلاح شده: مسیر صحیح */}
            <button className="mt-6 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105">
              تماس با ما
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FAQs;