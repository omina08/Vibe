import React from "react";
import { useTranslation } from "react-i18next";

const ContactCard = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-gray-900 rounded-t-xl">
      <div className="relative min-h-screen bg-[url('/room.png')] bg-cover bg-center flex items-center justify-center px-6">
        {/* O‘ng tarafdagi rasm */}
        <div>
          <img
            src="/achistka.png"
            alt="doctor"
            className="w-[700px] relative left-56 bottom-6"
          />

          {/* Forma */}
          <div className="absolute top-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-xl p-8 text-center w-[350px] h-[500px] left-96 mt-14 mb-14">
            <h3 className="text-xl font-semibold mb-2">
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
                className="flex-1 p-2 outline-none bg-white"
              />
            </div>

            {/* Tugma */}
            <button className="bg-[#C88C61] hover:bg-[#EBBE9C] text-white py-6 p-14 rounded-lg transition mt-6">
              {t("contact.sendNumber")}
            </button>

            {/* Checkbox + link */}
            <div className="text-xs text-gray-400 mt-4 items-center">
              <input
                className="mr-1 text-center items-center w-5"
                type="checkbox"
              />
              {t("contact.agreement")} <br />
              <a href="#" className="underline">
                {t("contact.terms")}
              </a>
            </div>

            {/* Telefon raqam */}
            <div className="mt-6 text-lg font-semibold text-gray-700">
              📞 +7 (980) 687-98-98
              <p className="text-sm text-[#EBBE9C]">{t("contact.freeCall")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;

