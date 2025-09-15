import React from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="bg-white py-10 px-6 border-t border-gray-200 mt-[50px]">
      <div className=" mx-auto flex items-center  gap-72">
   
        <div className="flex flex-col items-center md:items-start text-center md:text-left ml-[320px]">

          <div className="flex items-center gap-2 mb-4">
            <img src="/svg@2x.png" alt="logo" className="w-32" />
          </div>

          <div className="flex gap-[20px]">
          <div className="flex gap-4 mb-4">
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#E9C9C2] hover:opacity-80 transition"
            >
              <FaInstagram className="text-white text-lg" />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#E9C9C2] hover:opacity-80 transition"
             >
              <FaWhatsapp className="text-white text-lg" />
            </a>
          </div>


          <div>
            <p className="text-lg font-semibold">+7 (980) 687-98-98</p>
            <p className="text-sm text-[#C88C61]">Звонок бесплатный</p>
          </div>
          </div>

        </div>

        <div className="grid grid-cols-2 gap-8 text-sm text-gray-800 font-medium">
          <div className="flex flex-col gap-2">
            <a className="hover:underline" href="#">О НАС</a>
            <a className="hover:underline" href="#">ЦЕНЫ</a>
            <a className="hover:underline" href="#">ЗАБРОНИРОВАТЬ</a>
            <a className="hover:underline" href="#">КОНТАКТЫ</a>
          </div>
          <div className="flex flex-col gap-2">
            <a className="hover:underline" href="#">СТАТЬИ</a>
            <a className="hover:underline" href="#">ФРАНШИЗА</a>
            <a className="hover:underline" href="#">ВАКАНСИИ</a>
            <a className="hover:underline" href="#">ПРАВОВАЯ ИНФОРМАЦИЯ</a>
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-gray-400 mt-10">
        Политика конфиденциальности
      </div>
    </footer>
  );
};

export default Footer;
