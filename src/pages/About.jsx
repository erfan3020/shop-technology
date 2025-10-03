"use client"
import { Users, Target, Heart, Sparkles, ArrowLeft } from "lucide-react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const pageVariants = {
  initial: { opacity: 0, x: 40, scale: 0.995 },
  animate: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.45, ease: "easeOut" } },
  exit: { opacity: 0, x: -30, scale: 0.995, transition: { duration: 0.35, ease: "easeIn" } },
}

const containerVariants = {
  hidden: { opacity: 0, y: 6 },
  show: { opacity: 1, y: 0, transition: { staggerChildren: 0.06, delayChildren: 0.08 } },
}

const itemVariant = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.36, ease: "easeOut" } },
}

function About() {
  return (
    <motion.div
      dir="rtl"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50/30 to-white text-slate-800"
    >
      <motion.header
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700 text-white py-24 overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <motion.div
            variants={itemVariant}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"
          >
            <Sparkles className="w-4 h-4 text-yellow-300" />
            <span className="text-sm font-medium text-white">تیم حرفه‌ای و متعهد</span>
          </motion.div>

          <motion.h1
            variants={itemVariant}
            className="text-5xl md:text-6xl font-black tracking-tight mb-6 drop-shadow-lg bg-clip-text text-transparent bg-gradient-to-b from-white to-indigo-100"
          >
            درباره ما
          </motion.h1>

          <motion.p
            variants={itemVariant}
            className="text-lg md:text-xl text-indigo-50 max-w-3xl mx-auto leading-relaxed font-medium"
          >
            با اشتیاق، نوآوری و تعهد در خدمت شما هستیم — ساخت تجربه‌های وب امن، سریع و ایرانی‌پسند.
          </motion.p>

          <motion.div variants={itemVariant} className="mt-10 flex flex-col sm:flex-row sm:justify-center gap-4">
            <button className="group inline-flex items-center justify-center gap-2 bg-white text-indigo-600 px-8 py-4 rounded-xl font-bold shadow-xl shadow-indigo-900/20 hover:shadow-2xl hover:shadow-indigo-900/30 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/30">
              تماس با ما
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            </button>
            <button className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-7 py-4 rounded-xl font-bold hover:bg-white/20 hover:border-white/50 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/20">
              مشاهده خدمات
            </button>
          </motion.div>
        </div>
      </motion.header>

      {/* Main */}
      <main className="max-w-5xl mx-auto px-6 py-16 space-y-10">
        <motion.section
          variants={itemVariant}
          whileHover={{ y: -4 }}
          className="bg-white rounded-3xl shadow-xl shadow-indigo-100/50 ring-1 ring-indigo-100 p-10 hover:shadow-2xl hover:shadow-indigo-200/50 transition-all duration-300"
        >
          <div className="flex flex-col md:flex-row md:items-start md:gap-8">
            <div className="flex-none w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-200">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <div className="mt-6 md:mt-0 text-right flex-1">
              <h2 className="text-3xl font-black text-slate-900 mb-4">معرفی پروژه</h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                این پروژه اپلیکیشن وبی مدرن است که برای ارائه خدمات آنلاین باکیفیت به کاربران ایرانی طراحی شده است. با
                انتخاب بهترین ابزارها و الگوهای مهندسی، تمرکز ما روی امنیت، کارایی و تجربه کاربری است.
              </p>
            </div>
          </div>
        </motion.section>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            variants={itemVariant}
            whileHover={{ y: -4 }}
            className="lg:col-span-2 bg-white rounded-3xl shadow-xl shadow-blue-100/50 ring-1 ring-blue-100 p-8 hover:shadow-2xl hover:shadow-blue-200/50 transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-200">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-black text-slate-900">تیم توسعه</h3>
              </div>
            </div>

            <p className="text-slate-600 mb-8 text-lg leading-relaxed">
              تیم شامل برنامه‌نویسان، طراحان UI/UX و متخصصان امنیت است که با هم برای ارائه محصولی پایدار و زیبا کار
              می‌کنند.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
              <motion.div
                variants={itemVariant}
                whileHover={{ scale: 1.05, y: -4 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-600 text-center shadow-lg shadow-indigo-200 hover:shadow-xl hover:shadow-indigo-300 transition-all duration-300"
              >
                <div className="text-4xl font-black text-white">5+</div>
                <div className="text-sm text-indigo-100 mt-2 font-semibold">سال تجربه</div>
              </motion.div>
              <motion.div
                variants={itemVariant}
                whileHover={{ scale: 1.05, y: -4 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 text-center shadow-lg shadow-purple-200 hover:shadow-xl hover:shadow-purple-300 transition-all duration-300"
              >
                <div className="text-4xl font-black text-white">10+</div>
                <div className="text-sm text-purple-100 mt-2 font-semibold">پروژه موفق</div>
              </motion.div>
              <motion.div
                variants={itemVariant}
                whileHover={{ scale: 1.05, y: -4 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-center shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-300 transition-all duration-300"
              >
                <div className="text-4xl font-black text-white">100+</div>
                <div className="text-sm text-blue-100 mt-2 font-semibold">کاربر راضی</div>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                { name: "عرفان", role: "فرانت‌اند", gradient: "from-indigo-400 to-indigo-600" },
                { name: "نگار", role: "طراح UI/UX", gradient: "from-purple-400 to-purple-600" },
                { name: "سروش", role: "بک‌اند", gradient: "from-blue-400 to-blue-600" },
                { name: "مهسا", role: "تست و کیفیت", gradient: "from-pink-400 to-pink-600" },
              ].map((m) => (
                <motion.div
                  key={m.name}
                  variants={itemVariant}
                  whileHover={{ scale: 1.03, x: -4 }}
                  className="flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-l from-slate-50 to-white border border-slate-100 hover:border-indigo-200 hover:shadow-lg transition-all duration-300"
                >
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${m.gradient} text-white flex items-center justify-center font-black text-xl shadow-lg`}
                  >
                    {m.name.charAt(0)}
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-slate-900 text-lg">{m.name}</div>
                    <div className="text-sm text-slate-500 font-medium">{m.role}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.aside
            variants={itemVariant}
            whileHover={{ y: -4 }}
            className="bg-white rounded-3xl shadow-xl shadow-green-100/50 ring-1 ring-green-100 p-8 flex flex-col justify-between hover:shadow-2xl hover:shadow-green-200/50 transition-all duration-300"
          >
            <div>
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg shadow-green-200">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-xl font-black text-slate-900">ماموریت ما</h4>
              </div>
              <p className="text-slate-600 text-base leading-relaxed">
                ارائه خدمات آنلاین امن، قابل اعتماد و باکیفیت که زندگی دیجیتال کاربران را آسان‌تر کند.
              </p>
            </div>

            <div className="mt-8">
              <h5 className="text-sm font-bold text-slate-700 mb-4 uppercase tracking-wide">اهداف کلیدی</h5>
              <ul className="space-y-4 text-sm text-slate-600">
                <li className="flex items-start gap-3 group">
                  <div className="flex-none w-8 h-8 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center text-white font-black shadow-md group-hover:scale-110 transition-transform">
                    1
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">کیفیت بالا</div>
                    <div className="text-slate-500 text-xs mt-1">اجرای استانداردهای حرفه‌ای در تمامی مراحل</div>
                  </div>
                </li>
                <li className="flex items-start gap-3 group">
                  <div className="flex-none w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-black shadow-md group-hover:scale-110 transition-transform">
                    2
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">تجربه کاربری عالی</div>
                    <div className="text-slate-500 text-xs mt-1">رابط‌های ساده، سریع و دلپذیر</div>
                  </div>
                </li>
                <li className="flex items-start gap-3 group">
                  <div className="flex-none w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center text-white font-black shadow-md group-hover:scale-110 transition-transform">
                    3
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">نوآوری مستمر</div>
                    <div className="text-slate-500 text-xs mt-1">به‌روزرسانی و یادگیری مداوم</div>
                  </div>
                </li>
              </ul>
            </div>
          </motion.aside>
        </section>

        <motion.section
          variants={itemVariant}
          whileHover={{ scale: 1.02 }}
          className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700 text-white rounded-3xl p-12 text-center shadow-2xl shadow-indigo-300/50 overflow-hidden"
        >
          {/* Decorative background */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>

          <div className="relative">
            <h3 className="text-3xl font-black mb-3">آماده همکاری هستید؟</h3>
            <p className="text-indigo-100 mb-8 text-lg font-medium">
              تماس بگیرید تا پروژه شما را با بهترین کیفیت راه‌اندازی کنیم.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="group bg-white text-indigo-600 px-8 py-4 rounded-xl font-black hover:scale-105 hover:shadow-2xl shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/30">
                درخواست همکاری
                <ArrowLeft className="inline-block w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              </button>
              <Link to={`/`}>
                <button className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-7 py-4 rounded-xl font-bold hover:bg-white/20 hover:border-white/50 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/20">
                  پرسش و مشاوره
                </button>
              </Link>
            </div>
          </div>
        </motion.section>
      </main>
    </motion.div>
  )
}

export default About
