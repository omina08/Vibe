import React from "react";
import { FaUserTie, FaDoorOpen, FaWifi, FaShieldAlt } from "react-icons/fa";

const Nas = () => {
  return (
    <>
      <div className="bg-[#363348] text-white flex items-center justify-between px-40 py-20 gap-16">
        {/* Chap blok - matn */}
        <div className="max-w-xl">
          <h1 className="text-4xl font-extralight mb-6">
            О НАС <br />
            <span className="text-[#C88C61]"> BEAUTY SPACE </span>
          </h1>
          <p className="text-sm mb-6 leading-6">
            Мы создали комфортное пространство для специалистов в сфере красоты. 
            Вам больше не нужно арендовать кабинет на месяц, тратить деньги на ремонт 
            и оборудование. Мы уже обо всём позаботились.
          </p>
          <p className="text-sm mb-6 leading-6">
            У нас есть всё необходимое: уютные кабинеты, современное оборудование, 
            интернет, охрана и заботливый администратор. 
          </p>
          <h2 className="text-xl font-semibold mb-4">
            Ваша работа — наши условия.
          </h2>
          <button className="px-9 py-3 text-white rounded-md bg-[#C88C61] hover:bg-[#EBBE9C]">
            УЗНАТЬ БОЛЬШЕ
          </button>
        </div>

        {/* O‘ng blok - rasm */}
        <div className="relative">
          <img
            src="/chair.png"
            alt="О нас"
            className="rounded-2xl w-[500px] shadow-lg hover:scale-105 transition"
          />
          <div className="absolute -bottom-6 -right-6 bg-[#C88C61] text-white px-6 py-3 rounded-xl shadow-md">
            5+ лет опыта
          </div>
        </div>
      </div>

      {/* Qo‘shimcha blok - statistika */}
      <div className="bg-[#2F2C3E] text-white px-40 py-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div>
          <h3 className="text-4xl font-bold text-[#C88C61]">50+</h3>
          <p className="mt-2 text-sm">Специалистов</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold text-[#C88C61]">1000+</h3>
          <p className="mt-2 text-sm">Довольных клиентов</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold text-[#C88C61]">10</h3>
          <p className="mt-2 text-sm">Кабинетов</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold text-[#C88C61]">24/7</h3>
          <p className="mt-2 text-sm">Доступ</p>
        </div>
      </div>

      {/* Qo‘shimcha blok - afzalliklar */}
      <div className="bg-[#363348] text-white px-40 py-20 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="flex flex-col items-center text-center">
          <FaUserTie className="text-4xl text-[#C88C61] mb-4" />
          <h4 className="text-lg font-semibold mb-2">Администратор</h4>
          <p className="text-sm">Всегда готов помочь и поддержать специалистов</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <FaDoorOpen className="text-4xl text-[#C88C61] mb-4" />
          <h4 className="text-lg font-semibold mb-2">Удобные кабинеты</h4>
          <p className="text-sm">Комфортное пространство для вашей работы</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <FaWifi className="text-4xl text-[#C88C61] mb-4" />
          <h4 className="text-lg font-semibold mb-2">Wi-Fi</h4>
          <p className="text-sm">Быстрый интернет для работы и клиентов</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <FaShieldAlt className="text-4xl text-[#C88C61] mb-4" />
          <h4 className="text-lg font-semibold mb-2">Безопасность</h4>
          <p className="text-sm">Охрана и круглосуточное видеонаблюдение</p>
        </div>
      </div>

      <div className="h-20 bg-[#363348]"></div>
    </>
  )
}

export default Nas
