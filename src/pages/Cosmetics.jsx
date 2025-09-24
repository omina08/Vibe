import React, { useState } from "react";
import { FaCcVisa, FaCcMastercard, FaCcPaypal } from "react-icons/fa";
import {  SiClickhouse } from "react-icons/si"; 

const Cosmetics = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    { id: 1, name: "L'Oréal Skin Care", price: "₽1500", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_-aHo9R1U_YwBiZzAMo8M8lkrjaq6MST_Lg&s" },
    { id: 2, name: "Dior Face Cream", price: "₽3200", img: "https://i.makeup.kz/e/ef/efk80n6qv8x2.jpg" },
    { id: 3, name: "Clinique Cleanser", price: "₽2100", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdbcW71OQnRNNWmfrVEaduvwmzLCPBQ6N8sQ&s" },
    { id: 4, name: "Chanel Hydra Beauty", price: "₽4500", img: "https://pwa-api.eva.ua/img/512/512/resize/8/0/803014_3_1701274481.jpg" },
    { id: 5, name: "Estée Lauder Serum", price: "₽5200", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToBjkaVczjaD99HrGbZD3M9mz3hQzOnzIPAQ&s" },
    { id: 6, name: "Lancôme Toner", price: "₽2700", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIV_N-J_LpRTMcC4UosDd-C9YEdxBbgmX1_Q&s" },
    { id: 7, name: "Shiseido Moisturizer", price: "₽3800", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRirgkziSZaxY1g_MtgT3zRqhhozhH-n-Z9Uw&s" },
    { id: 8, name: "Biotherm Aqua Gel", price: "₽3100", img: "https://www.easypara.com/media/catalog/product/6/3/63700.jpg" },
    { id: 9, name: "Vichy Mineral 89", price: "₽2600", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi2ulB0u9uH7Uz6YjUR4UKMFElpjcfypOzog&s" },
    { id: 10, name: "La Mer Crème", price: "₽15000", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGoCcAWiPacLwHk5WURPaE2APvuo48v7JGpw&s" },
    { id: 11, name: "Clarins Eye Cream", price: "₽3300", img: "https://www.clarins.ca/dw/image/v2/AAFS_PRD/on/demandware.static/-/Sites-clarins-master-products/default/dw25e99022/original/80081842_original_original_1.jpg" },
    { id: 12, name: "The Ordinary Niacinamide", price: "₽1200", img: "https://static.wixstatic.com/media/e08af0_ce3e0e63729f46d48acfbd0e4c33142f~mv2_d_2094_2094_s_2.jpg" },
    { id: 13, name: "Avene Thermal Spring", price: "₽1800", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-n975YZUoWhnatb_G7FhLF5mLxD-Sw-rIbQ&s" },
    { id: 14, name: "Kiehl’s Ultra Facial", price: "₽3500", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRICxMtr2MNoljlAuySIZms8Fk0AVFydvcEng&s" },
    { id: 15, name: "Garnier Micellar", price: "₽900", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNlbjKUz3lGAuyCw6ydTcWNCExwDJduEuQqw&s" },
  ];

  return (
    <div className="text-gray-700 bg-gray-900 px-10 py-16">
      <h1 className="text-3xl font-semibold text-center mb-10">
        УХОДОВЫЕ <span className="text-[#C88C61] font-light">СРЕДСТВА</span>
      </h1>

      <div className="grid grid-cols-3 gap-8 max-w-5xl mx-auto">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow p-5 text-center hover:scale-105 transition"
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-40 h-40 mx-auto mb-4 object-contain"
            />
            <h2 className="font-semibold mb-2">{item.name}</h2>
            <p className="text-[#C88C61] font-bold mb-4">{item.price}</p>
            <button
              onClick={() => setSelectedProduct(item)}
              className="bg-[#C88C61] text-white py-2 px-6 rounded-md hover:bg-[#EBBE9C]"
            >
              Купить
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-xl p-8 w-[400px] shadow-lg relative">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-2 right-3 text-gray-500 hover:text-black text-xl"
            >
              ✕
            </button>
            <h2 className="text-2xl font-semibold mb-4">Оплата товара</h2>

            <div className="flex items-center gap-4 mb-4">
              <img
                src={selectedProduct.img}
                alt={selectedProduct.name}
                className="w-20 h-20 object-contain"
              />
              <div>
                <p className="font-semibold">{selectedProduct.name}</p>
                <p className="text-[#C88C61] font-bold">{selectedProduct.price}</p>
              </div>
            </div>

            {/* Karta variantlari */}
            <div className="flex justify-center gap-4 text-4xl mb-6 text-gray-600">
              <FaCcVisa className="hover:text-blue-600 cursor-pointer" />
              <FaCcMastercard className="hover:text-red-600 cursor-pointer" />
              <FaCcPaypal className="hover:text-blue-400 cursor-pointer" />
              <SiClickhouse className="hover:text-yellow-500 cursor-pointer" />
            </div>

            <form className="space-y-3">
              <input
                type="text"
                placeholder="Имя Фамилия"
                className="w-full border rounded-md px-3 py-2"
              />
              <input
                type="text"
                placeholder="Номер карты"
                className="w-full border rounded-md px-3 py-2"
              />
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="w-1/2 border rounded-md px-3 py-2"
                />
                <input
                  type="text"
                  placeholder="CVV"
                  className="w-1/2 border rounded-md px-3 py-2"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#C88C61] text-white py-2 rounded-md hover:bg-[#EBBE9C]"
              >
                Оплатить
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cosmetics;
