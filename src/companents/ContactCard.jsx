import React from "react";

const ContactCard = () => {
  return (
    <div className="bg-gray-900 rounded-t-xl">
    <div className="relative min-h-screen bg-[url('/room.png')] bg-cover bg-center flex items-center justify-center px-6">
      {/* O‘ng tarafdagi rasm */}
      <div className=" ">
        <img
          src="/achistka.png"
          alt="doctor"
          className=" w-[700px] relative left-56 bottom-6 "
        />

        {/* Forma (rasm ustiga chiqib turadi) */}
        <div className="absolute  top-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-xl p-8 text-center  w-[350px] h-[500px] left-96 mt-14 mb-14">
          <h3 className="text-xl font-semibold mb-2">
            Оставьте номер <br /> или позвоните нам
          </h3>
          <p className="text-gray-500 text-sm mb-6">
            Мы свяжемся с вами в течение <br /> 5 минут и ответим на все вопросы
          </p>

          {/* Telefon input */}
          <div className="flex items-center border rounded-lg overflow-hidden mb-4">
            <span className="px-3 text-gray-400">📞</span>
            <input
              type="tel"
              placeholder="+7 (___) ___-__-__"
              className="flex-1 p-2 outline-none"
            />
          </div>

          {/* Tugma */}
          <button className=" bg-[#C88C61]  hover:bg-[#EBBE9C] text-white py-6 p-14 rounded-lg transition mt-6">
            ОТПРАВИТЬ НОМЕР
          </button>

          {/* Checkbox + link */}
          <div className="text-xs text-gray-400 mt-4 items-center">
          <input className="mr-1 text       -center items-center w-5" type="checkbox"/>
          Я согласна на обработку моих персональных  <br /> данных и ознакомлена с{" "}
            <a href="#" className="underline">
              условиями
            </a>
          </div>
          

          {/* Telefon raqam */}
          <div className="mt-6 text-lg font-semibold text-gray-700">
            📞 +7 (980) 687-98-98
            <p className="text-sm text-[#EBBE9C]">Звонок бесплатный</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ContactCard

