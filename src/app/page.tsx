"use client";
import Image from "next/image";
import { useState } from "react";

const egyptPackages = [
  { coins: 76, price: 50 },
  { coins: 154, price: 100 },
  { coins: 463, price: 150 },
  { coins: 777, price: 300 },
  { coins: 1245, price: 500 },
  { coins: 1562, price: 800 },
  { coins: 2425, price: 1100 },
  { coins: 2509, price: 1400 },
  { coins: 5025, price: 2700 },
  { coins: 7920, price: 4150 },
  { coins: 9945, price: 5150 },
  { coins: 25200, price: 13000 },
];

const yemenPackages = [
  { coins: 80, price: 570 },
  { coins: 140, price: 1000 },
  { coins: 213, price: 1500 },
  { coins: 426, price: 3000 },
  { coins: 572, price: 4000 },
  { coins: 717, price: 5000 },
  { coins: 1000, price: 7000 },
  { coins: 1447, price: 10000 },
  { coins: 2039, price: 14000 },
  { coins: 4420, price: 30000 },
];
export default function Home() {

  const [country, setCountry] = useState("egypt");

  const currentPackages =
    country === "egypt"
      ? egyptPackages
      : yemenPackages;

  return (

    <main className="min-h-screen text-white overflow-hidden">

      {/* Navbar */}
      <nav className="border-b border-yellow-500/20 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

          <div>
            <h1 className="text-3xl font-bold text-yellow-400">
              COINS MART
            </h1>

            <p className="text-xs text-gray-400">
              FAST • SAFE • TRUSTED
            </p>
          </div>

          <button className="border border-yellow-500 text-yellow-400 px-5 py-2 rounded-full">
            WhatsApp Support
          </button>

        </div>
      </nav>

      {/* Hero */}
      <section
  className="
  relative
  min-h-screen
  bg-cover
  bg-center
  flex
  items-center
  justify-center
  text-center
  "
  style={{
    backgroundImage: "url('/images/coins-banner.png')",
  }}
>
  <div className="absolute inset-0 bg-black/60"></div>

  <div className="relative z-10">

    <h1 className="text-7xl font-black text-yellow-400">
      COINS MART
    </h1>

    <p className="text-3xl mt-4">
      شحن كوينزات StarMaker
    </p>

    <a
  href="#packages"
  className="inline-block bg-yellow-500 text-black px-10 py-4 rounded-2xl font-bold hover:scale-105 transition"
>
  اختر الباقة الآن
</a>

  </div>
</section>
<section className="max-w-7xl mx-auto px-6 py-16">

  <h2 className="text-center text-5xl font-black text-yellow-400 mb-12">
    اختر الباقة المناسبة
  </h2>

  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

    {currentPackages.map((pkg) => (

      <div
        key={pkg.coins}
        className="
        bg-black/70
        border
        border-yellow-500/30
        rounded-3xl
        p-6
        text-center
        hover:scale-105
        hover:border-yellow-400
        transition
        cursor-pointer
        "
      >

        <div className="flex justify-center mb-4">
          <Image
            src="/images/coin.png"
            alt="coin"
            width={70}
            height={70}
          />
        </div>

        <h3 className="text-4xl font-black text-yellow-400">
          {pkg.coins}
        </h3>

        <p className="text-gray-400 mt-2">
          COINS
        </p>

        <div className="mt-4 text-3xl font-bold">
          {pkg.price}
        </div>

        <div className="text-gray-500">
          {country === "egypt" ? "جنيه" : "ريال"}
        </div>

      </div>

    ))}

  </div>

</section>
       <section
  id="packages"
  className="max-w-7xl mx-auto px-6 pb-20"
>
  <div className="bg-black/40 border border-fuchsia-500/50 rounded-3xl p-8">

    <h2 className="text-3xl font-bold text-center mb-8">
      بيانات الطلب
    </h2>

    <div className="grid md:grid-cols-2 gap-4">

      <input
        type="text"
        placeholder="StarMaker ID"
        className="bg-slate-900 border border-slate-700 rounded-xl p-4"
      />

      <input
        type="text"
        placeholder="رقم الواتساب"
        className="bg-slate-900 border border-slate-700 rounded-xl p-4"
      />

       <select
  value={country}
  onChange={(e) => setCountry(e.target.value)}
  className="bg-slate-900 border border-slate-700 rounded-xl p-4"
>
  <option value="egypt">مصر</option>
  <option value="yemen">اليمن</option>
</select>

      <select className="bg-slate-900 border border-slate-700 rounded-xl p-4">
        {currentPackages.map((pkg) => (
  <option key={pkg.coins}>
    {pkg.coins} Coins - {pkg.price} {country === "egypt" ? "EGP" : "YER"}
  </option>
))}
      </select>

    </div>

    <div className="mt-4">
      <input
        type="file"
        className="w-full bg-slate-900 border border-slate-700 rounded-xl p-4"
      />
    </div>

    <button className="w-full mt-6 bg-gradient-to-r from-yellow-500 to-yellow-300 text-black font-bold p-4 rounded-xl">
      🚀 تأكيد طلب الشحن
    </button>

  </div>
</section>
      <a
  href="https://wa.me/966534524678"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-5 right-5 z-50"
>
  <Image
    src="/images/whatsapp.png"
    alt="WhatsApp"
    width={70}
    height={70}
  />
</a>
    </main>
  );
}