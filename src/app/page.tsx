"use client";

import { useState } from "react";
import { Sun, Moon } from "lucide-react";
import { db } from "../../lib/firebase";


// Data produk
const products = [
  {
    name: "Alight Motion Premium",
    type: "Privat (1 Tahun)",
    price: "Rp 5.000",
    link: "https://wa.me/628xxxxxxx",
    category: "Editing Apps",
  },
  {
    name: "CapCut Pro",
    type: "Privat (1 Bulan)",
    price: "Rp 15.000",
    link: "https://wa.me/628xxxxxxx",
    category: "Editing Apps",
  },
  {
    name: "YouTube Premium",
    type: "Privat (1 Bulan)",
    price: "Rp 10.000",
    link: "https://wa.me/628xxxxxxx",
    category: "Streaming",
  },
  {
    name: "Nomor Kosong (Nokos)",
    type: "WhatsApp / Telegram",
    price: "Rp 5.000 - 10.000",
    link: "https://wa.me/628xxxxxxx",
    category: "Nomor Kosong",
  },
];

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.type.toLowerCase().includes(search.toLowerCase()) ||
      p.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main
      className={`${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-black"
      } min-h-screen flex flex-col`}
    >
      {/* Header */}
      <header
        className={`${
          darkMode ? "bg-gray-800" : "bg-white"
        } shadow p-4 sticky top-0 z-10 flex justify-between items-center`}
      >
        <div>
          <h1 className="text-xl font-bold">NACT Store</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Layanan Digital Premium dengan harga terjangkau
          </p>
        </div>
        <button
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Toggle Dark Mode"
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </button>
      </header>

      {/* Search */}
      <div className="p-4">
        <input
          type="text"
          placeholder="Cari produk..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-2 rounded-xl border dark:bg-gray-800 dark:border-gray-700"
        />
      </div>

      {/* Produk */}
      <section className="flex-1 p-4 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((product, i) => (
          <div
            key={i}
            className={`rounded-2xl shadow-md hover:shadow-lg transition p-4 ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {product.type}
            </p>
            <p className="mt-2 text-xl font-semibold text-green-600">
              {product.price}
            </p>
            <a
              href={product.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-3 w-full text-center bg-green-600 text-white py-2 rounded-xl hover:bg-green-700 transition"
            >
              Beli Sekarang
            </a>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer
        className={`${
          darkMode ? "bg-gray-800" : "bg-white"
        } shadow p-4 text-center text-sm text-gray-500 dark:text-gray-400`}
      >
        © {new Date().getFullYear()} NACT Store. All rights reserved.
      </footer>
    </main>
  );
}
