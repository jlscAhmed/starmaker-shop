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
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="text-center">

          <h1 className="text-7xl md:text-8xl font-black text-yellow-400 drop-shadow-lg">
            COINS
          </h1>

          <h2 className="text-7xl md:text-8xl font-black text-yellow-400 -mt-4">
            MART
          </h2>

          <p className="text-3xl mt-4">
            شحن كوينزات
          </p>

          <div className="flex justify-center mt-4">
          <Image
            src="/images/starmaker.png"
             alt="StarMaker"
              width={280}
              height={280}
            />
           </div>
            <div className="flex justify-center gap-4 mt-6">

  <button
    onClick={() => setCountry("egypt")}
    className={`px-6 py-3 rounded-2xl transition ${
      country === "egypt"
        ? "bg-yellow-500 text-black"
        : "bg-slate-900 border border-slate-700"
    }`}
  >
    🇪🇬 مصر
  </button>

  <button
    onClick={() => setCountry("yemen")}
    className={`px-6 py-3 rounded-2xl transition ${
      country === "yemen"
        ? "bg-yellow-500 text-black"
        : "bg-slate-900 border border-slate-700"
    }`}
  >
    🇾🇪 اليمن
  </button>

</div>
          <div className="flex justify-center gap-6 mt-8 text-yellow-300">
            <span>⚡ شحن سريع</span>
            <span>🛡️ آمن 100%</span>
            <span>💰 أفضل الأسعار</span>
          </div>

        </div>

      </section>

      {/* Packages */}
      <section className="max-w-7xl mx-auto px-6 pb-20">

        <h2 className="text-center text-3xl font-bold mb-10">
          اختر الباقة المناسبة
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">

          {currentPackages.map((item) => (
            <div
              key={item.coins}
              className="bg-black/40 border border-yellow-500 rounded-3xl p-5 text-center hover:scale-105 hover:shadow-[0_0_25px_gold] transition"
            >
              <div className="flex justify-center mb-4">
             <Image
             src="/images/coin.png"
             alt="coin"
             width={70}
             height={70}
              />
             </div>

              <h3 className="text-4xl font-bold text-yellow-400">
                {item.coins}
              </h3>

              <p className="text-gray-300">
                COINS
              </p>

              <div className="mt-4 text-3xl font-bold text-yellow-400">
                {item.price}
              </div>

               <div className="text-gray-400">
  {country === "egypt" ? "جنيه" : "ريال"}
</div>
            </div>
          ))}

        </div>

      </section>
       <section className="max-w-5xl mx-auto px-6 pb-20">
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