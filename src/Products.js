// --- تصاویر ---
import Rtx4070 from './image/products/rtx-4070.jpg';
import Rtx4070ti from './image/products/rtx-4070ti.jpg';
import Rtx4080 from './image/products/rtx-4080.jpg';
import Rtx4090 from './image/products/rtx-4090.jpg';
import Rx7700XT from './image/products/rx-7700-XT.jpg';
import Rx7800XT from './image/products/rx-7800-XT.jpg';
import Rx7900XTX from './image/products/rx-7900-XTX.jpg';
import Rtx3060 from './image/products/asus-rtx-3060.jpg';
// --- لپتاپ---
import AsusTuf from './image/products/AsusTuf.jpg';
import MsiKatana from './image/products/msi-katana.jpg';
import MacbookPro from './image/products/MacbookPro.jpg';
// ---- مانیتور----
import LgUltraGear from './image/products/LgUltraGear.jpg';
import SamsungOdyssey from './image/products/SamsungOdyssey.jpg';
import AsusRog from './image/products/AsusRog.jpg'
// ---پاور----
import Corsair850W from './image/products/CorsairRM850.jpg';
import CoolerMaster750W from './image/products/CoolerMaster.jpg';
import AsusRogThor1200W from './image/products/ASUSROGThor.jpg';
const products = [
  {
    id: 1,
    name: "RTX 4070",
    price: 999.99,
    description: "NVIDIA GeForce RTX 4070 — 12GB GDDR6, مناسب برای گیمینگ 1440p و رندرینگ سبک",
    image: Rtx4070 
  },
  {
    id: 2,
    name: "RTX 4070 Ti",
    price: 1299.50,
    description: "NVIDIA GeForce RTX 4070 Ti — 16GB GDDR6X, عملکرد بالاتر برای بازی‌ها و تولید محتوا",
    image: Rtx4070ti
  },
  {
    id: 3,
    name: "RTX 4080",
    price: 1499.00,
    description: "NVIDIA GeForce RTX 4080 — 16GB GDDR6X, ایده‌آل برای گیمینگ 4K و رندرینگ حرفه‌ای",
    image: Rtx4080
  },
  {
    id: 4,
    name: "RTX 4090",
    price: 1899.99,
    description: "NVIDIA GeForce RTX 4090 — 24GB GDDR6X, پرچمدار انویدیا برای کارایی بی‌نظیر",
    image: Rtx4090
  },
  {
    id: 5, 
    name: "RX 7700 XT",
    price: 799.00,
    description: "AMD Radeon RX 7700 XT — 12GB GDDR6, مناسب برای گیمینگ 1440p مقرون‌به‌صرفه",
    image: Rx7700XT
  },
  {
    id: 6,
    name: "RX 7800 XT",
    price: 899.50,
    description: "AMD Radeon RX 7800 XT — 16GB GDDR6, تعادل عالی بین قیمت و کارایی",
    image: Rx7800XT
  },
  {
    id: 7,
    name: "RX 7900 XT",
    price: 1099.00,
    description: "AMD Radeon RX 7900 XT — 20GB GDDR6, مناسب برای گیمینگ 4K و طراحی",
    image: Rx7900XTX
  },
  {
    id: 8,
    name: "RX 7900 XTX",
    price: 1399.00,
    description: "AMD Radeon RX 7900 XTX — 24GB GDDR6, قدرتمندترین کارت گرافیک AMD",
    image: Rx7900XTX
  },
  {
    id: 9,
    name: "RTX 3060",
    price: 499.99,
    description: "NVIDIA GeForce RTX 3060 — 12GB GDDR6, مناسب برای گیمینگ فول‌اچ‌دی",
    image: Rtx3060
  },
  {
    id: 10,
    name: "RTX 3060 Ti",
    price: 599.99,
    description: "NVIDIA GeForce RTX 3060 Ti — 8GB GDDR6, انتخاب عالی برای گیمرهای میان‌رده",
    image: Rtx4070 
  },
  {
    id: 10,
    name: "Asus TUF Gaming F15",
    price: 1499.00,
    description: "Core i7, RTX 4060, نمایشگر 144Hz مناسب گیمینگ و کار روزمره",
    image: AsusTuf
  },
  {
    id: 11,
    name: "MSI Katana 15",
    price: 1599.00,
    description: "Core i7, RTX 4070, طراحی زیبا برای گیمرها و تولید محتوا",
    image: MsiKatana
  },
  {
    id: 12,
    name: "MacBook Pro 16 M3",
    price: 2499.00,
    description: "Apple M3 Pro, مناسب برای توسعه‌دهندگان و طراحان حرفه‌ای",
    image: MacbookPro
  },
    {
    id: 13,
    name: "LG UltraGear 27GP850",
    price: 499.00,
    description: "مانیتور 27 اینچ QHD، نرخ نوسازی 165Hz با G-Sync",
    image: LgUltraGear
  },
  {
    id: 14,
    name: "Samsung Odyssey G7",
    price: 599.00,
    description: "مانیتور خمیده 32 اینچ QHD، نرخ نوسازی 240Hz برای گیمرها",
    image: SamsungOdyssey
  },
  {
    id: 15,
    name: "ASUS ROG Thor 1200W",
    price: 349.00,
    description: "پاور 1200 وات، گواهی 80+ Platinum، RGB و نمایشگر OLED",
    image: AsusRogThor1200W,
    category: "psu"
  },
    {
    id: 16,
    name: "Corsair RM850x 850W",
    price: 189.00,
    description: "پاور 850 وات، گواهی 80+ Gold، کاملاً ماژولار",
    image: Corsair850W,
    category: "psu"
  },
  {
    id: 17,
    name: "Cooler Master MWE 750W",
    price: 139.00,
    description: "پاور 750 وات، گواهی 80+ Bronze، فن کم‌صدا",
    image: CoolerMaster750W,
    category: "psu"
  },
];
export const categoris = [
  { id: "all", name: "همه محصولات", icon: "🛍️" },
  { id: "gpu", name: "کارت گرافیک", icon: "🎮" },
  { id: "laptop", name: "لپ‌تاپ", icon: "💻" },
  { id: "monitor", name: "مانیتور", icon: "🖥️" }
]
export default products;