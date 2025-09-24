import React from "react";

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
      <div className="h-20 bg-[#363348]"></div>
    </>
  )
}

export default Nas

