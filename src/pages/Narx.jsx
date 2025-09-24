import React from 'react'
import SimpleParallax from "simple-parallax-js";

const Narx = () => {
  return (
    <>
      <div className="bg-[#363348] text-white flex flex-col items-center px-40 py-20">
        <h1 className="text-4xl font-extralight mb-6 text-center">
          ТАРИФЫ <br />
          <span className="text-[#C88C61]"> ПОЧАСОВОЙ АРЕНДЫ </span>
        </h1>
        <p className="text-sm mb-12 text-center max-w-2xl">
          Выбирайте удобный для вас тариф и оплачивайте только те часы, когда работаете с клиентом. 
          Никаких лишних затрат — только комфортная работа.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Tariff 1 */}
          <div className="bg-white text-gray-800 rounded-2xl shadow-lg p-8 hover:scale-105 transition">
            <h2 className="text-2xl font-semibold mb-4">Стандарт</h2>
            <p className="mb-4 text-sm text-gray-600">Аренда на 1 час</p>
            <h3 className="text-3xl font-bold mb-6 text-[#C88C61]">500 ₽</h3>
            <button className="w-full py-3 rounded-md bg-[#C88C61] text-white hover:bg-[#EBBE9C]">
              Выбрать
            </button>
          </div>

          {/* Tariff 2 */}
          <div className="bg-white text-gray-800 rounded-2xl shadow-lg p-8 hover:scale-105 transition">
            <h2 className="text-2xl font-semibold mb-4">Премиум</h2>
            <p className="mb-4 text-sm text-gray-600">Аренда на 5 часов</p>
            <h3 className="text-3xl font-bold mb-6 text-[#C88C61]">2200 ₽</h3>
            <button className="w-full py-3 rounded-md bg-[#C88C61] text-white hover:bg-[#EBBE9C]">
              Выбрать
            </button>
          </div>

          {/* Tariff 3 */}
          <div className="bg-white text-gray-800 rounded-2xl shadow-lg p-8 hover:scale-105 transition">
            <h2 className="text-2xl font-semibold mb-4">Максимум</h2>
            <p className="mb-4 text-sm text-gray-600">Аренда на день (8 часов)</p>
            <h3 className="text-3xl font-bold mb-6 text-[#C88C61]">3500 ₽</h3>
            <button className="w-full py-3 rounded-md bg-[#C88C61] text-white hover:bg-[#EBBE9C]">
              Выбрать
            </button>
          </div>
        </div>
      </div>
      <div className="h-20 bg-[#363348]"></div>
      
    </>
  )
}

export default Narx

