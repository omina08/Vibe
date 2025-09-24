import React from "react";
import { FaUserTie, FaDoorOpen, FaWifi, FaShieldAlt } from "react-icons/fa";

const Nas = () => {
  return (
    <>
      {/* Chap va rasm blok */}
      <div className="bg-[#363348] text-white flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-10 lg:px-40 py-20 gap-10 md:gap-16">
        {/* Chap blok */}
        <div className="max-w-xl text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl font-extralight mb-6">
            О НАС <br />
            <span className="text-[#C88C61]"> BEAUTY SPACE </span>
          </h1>
          <p className="text-sm sm:text-base mb-4 leading-6">
            Мы создали комфортное пространство для специалистов в сфере красоты. 
            Вам больше не нужно арендовать кабинет на месяц, тратить деньги на ремонт 
            и оборудование. Мы уже обо всём позаботились.
          </p>
          <p className="text-sm sm:text-base mb-4 leading-6">
            У нас есть всё необходимое: уютные кабинеты, современное оборудование, 
            интернет, охрана и заботливый администратор. 
          </p>
          <h2 className="text-xl font-semibold mb-4">Ваша работа — наши условия.</h2>
          <button className="px-9 py-3 text-white rounded-md bg-[#C88C61] hover:bg-[#EBBE9C]">
            УЗНАТЬ БОЛЬШЕ
          </button>
        </div>

        {/* O‘ng blok - rasm */}
        <div className="relative">
          <img
            src="/chair.png"
            alt="О нас"
            className="rounded-2xl w-full sm:w-[500px] shadow-lg hover:scale-105 transition"
          />
          <div className="absolute -bottom-6 -right-6 bg-[#C88C61] text-white px-4 py-2 sm:px-6 sm:py-3 rounded-xl shadow-md text-sm sm:text-base">
            5+ лет опыта
          </div>
        </div>
      </div>

      {/* Statistika */}
      <div className="bg-[#2F2C3E] text-white px-4 sm:px-6 md:px-10 lg:px-40 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
        {[
          { value: "50+", label: "Специалистов" },
          { value: "1000+", label: "Довольных клиентов" },
          { value: "10", label: "Кабинетов" },
          { value: "24/7", label: "Доступ" },
        ].map((item, idx) => (
          <div key={idx}>
            <h3 className="text-3xl sm:text-4xl font-bold text-[#C88C61]">{item.value}</h3>
            <p className="mt-2 text-sm sm:text-base">{item.label}</p>
          </div>
        ))}
      </div>

      {/* Afzalliklar */}
      <div className="bg-[#363348] text-white px-4 sm:px-6 md:px-10 lg:px-40 py-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {[
          { icon: <FaUserTie className="text-4xl text-[#C88C61] mb-4" />, title: "Администратор", desc: "Всегда готов помочь и поддержать специалистов" },
          { icon: <FaDoorOpen className="text-4xl text-[#C88C61] mb-4" />, title: "Удобные кабинеты", desc: "Комфортное пространство для вашей работы" },
          { icon: <FaWifi className="text-4xl text-[#C88C61] mb-4" />, title: "Wi-Fi", desc: "Быстрый интернет для работы и клиентов" },
          { icon: <FaShieldAlt className="text-4xl text-[#C88C61] mb-4" />, title: "Безопасность", desc: "Охрана и круглосуточное видеонаблюдение" },
        ].map((item, idx) => (
          <div key={idx} className="flex flex-col items-center text-center">
            {item.icon}
            <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
            <p className="text-sm">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="h-20 bg-[#363348]"></div>
    </>
  )
}

export default Nas;
