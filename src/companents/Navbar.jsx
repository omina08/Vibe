import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../locales/i18n";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="bg-[#363348] p-4 px-6">
      <div className="flex justify-between items-center text-white">
        {/* Chap taraf (Logo) */}
        <div className="flex items-center gap-4">
          <img src="/svg.png" alt="logo" className="w-16 h-auto" />
          <div className="h-10 w-[1px] bg-[#C88C61] hidden md:block"></div>
        </div>

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-8 text-sm">
          <Link to="/nas" className="hover:border-b-[#C88C61] hover:border-b">
            {t("navbar.about")}
          </Link>
          <Link to="/narx" className="hover:border-b-[#C88C61] hover:border-b">
            {t("navbar.prices")}
          </Link>
          <Link to="/bron" className="hover:border-b-[#C88C61] hover:border-b">
            {t("navbar.booking")}
          </Link>
          <Link to="/con" className="hover:border-b-[#C88C61] hover:border-b">
            {t("navbar.cosmetics")}
          </Link>
        </ul>

        {/* O'ng taraf */}
        <div className="hidden md:flex items-center gap-10">
          <h1>{t("navbar.phone_number")}</h1>
          <h1 className="flex gap-1 items-center">
            <img src="/phone.png" alt="phone" className="w-4 h-4" />
            <span className="text-[#C88C61] border-b border-dashed border-[#C88C61]">
              {t("navbar.callback")}
            </span>
          </h1>
          <select
            onChange={(e) => changeLanguage(e.target.value)}
            className="rounded-md p-1 px-2 bg-gray-700 h-[40px] w-[100px] "
          >
            <option value="uz">Uzbek</option>
            <option value="ru">Русский</option>
            <option value="en">English</option>
          </select>
        </div>

        {/* Hamburger (mobil) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Mobil menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-3 flex flex-col items-start text-white text-sm">
          <Link to="/nas" className="hover:text-[#C88C61] w-full">
            {t("navbar.about")}
          </Link>
          <Link to="/narx" className="hover:text-[#C88C61] w-full">
            {t("navbar.prices")}
          </Link>
          <Link to="/bron" className="hover:text-[#C88C61] w-full">
            {t("navbar.booking")}
          </Link>
          <Link to="/con" className="hover:text-[#C88C61] w-full">
            {t("navbar.cosmetics")}
          </Link>
          <h1 className="w-full">{t("navbar.phone_number")}</h1>
          <h1 className="flex gap-1 items-center w-full">
            <img src="/phone.png" alt="phone" className="w-4 h-4" />
            <span className="text-[#C88C61] border-b border-dashed border-[#C88C61]">
              {t("navbar.callback")}
            </span>
          </h1>
          <select
            onChange={(e) => changeLanguage(e.target.value)}
            className="rounded-md py-1 px-2 inline bg-gray-700"
          >
            <option value="uz">Uzbek</option>
            <option value="ru">Русский</option>
            <option value="en">English</option>
          </select>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
