import React from "react";
import { useTranslation } from "react-i18next";

const ContactCard = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-gray-900 rounded-t-xl">
      <div className="relative min-h-screen bg-[url('/room.png')] bg-cover bg-center flex flex-col md:flex-row items-center justify-center px-4 sm:px-6 md:px-12 py-10">
        
        {/* O‘ng tarafdagi rasm */}
        <img
          src="/achistka.png"
          alt="doctor"
          className="w-64 sm:w-96 md:w-[700px] relative md:left-10 md:bottom-6 mb-6 md:mb-0"
        />

        {/* Forma */}
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 text-center w-full max-w-sm h-auto md:h-[500px] md:ml-12">
          <h3 className="text-lg sm:text-xl font-semibold mb-2">
            {t("contact.leaveNumber")} <br /> {t("contact.orCall")}
          </h3>
          <p className="text-gray-500 text-sm mb-6">
            {t("contact.weWillCall")}
          </p>

          {/* Telefon input */}
          <div className="flex items-center border rounded-lg overflow-hidden mb-4">
            <span className="px-3 text-gray-400">📞</span>
            <input
              type="tel"
              placeholder={t("contact.phonePlaceholder")}
              className="flex-1 p-2 outline-none bg-white text-sm"
            />
          </div>

          {/* Tugma */}
          <button className="bg-[#C88C61] hover:bg-[#EBBE9C] text-white py-3 px-6 rounded-lg transition mt-4 w-full">
            {t("contact.sendNumber")}
          </button>

          {/* Checkbox + link */}
          <div className="text-xs text-gray-400 mt-4 flex flex-col items-center">
            <label className="flex items-center space-x-2">
              <input className="w-4 h-4" type="checkbox" />
              <span>{t("contact.agreement")}</span>
            </label>
            <a href="#" className="underline mt-1">
              {t("contact.terms")}
            </a>
          </div>

          {/* Telefon raqam */}
          <div className="mt-6 text-base sm:text-lg font-semibold text-gray-700">
            📞 +7 (980) 687-98-98
            <p className="text-sm text-[#EBBE9C]">{t("contact.freeCall")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
