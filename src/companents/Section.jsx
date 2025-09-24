import React from "react";
import { useTranslation } from "react-i18next";
import "../locales/i18n";

const Section = () => {
  const { t } = useTranslation();

  return (
    <div className="relative min-h-screen bg-white flex flex-col items-center justify-center px-6 py-12 overflow-hidden">

      {/* Dekor rasm */}
      <img
        src="/pinset.png"
        alt="Pinset"
        className="absolute right-0 bottom-0 w-32 md:w-48 lg:w-60 opacity-90 pointer-events-none select-none"
      />

      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">
        <span className="text-[#EBBE9C]">{t("section.title_highlight")}</span>{" "}
        {t("section.title_rest")}
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 relative z-10 max-w-6xl w-full">

        {/* 1 */}
        <div className="flex flex-col items-center text-center">
          <img src="/im.png" alt="" className="w-full h-48 object-cover rounded-md shadow" />
          <h3 className="mt-4 text-lg font-medium">{t("section.card1_title")}</h3>
          <p className="text-gray-600 text-sm mt-2">{t("section.card1_text")}</p>
        </div>

        {/* 2 */}
        <div className="flex flex-col items-center text-center">
          <img src="/im2.png" alt="" className="w-full h-48 object-cover rounded-md shadow" />
          <h3 className="mt-4 text-lg font-medium">{t("section.card2_title")}</h3>
          <p className="text-gray-600 text-sm mt-2">{t("section.card2_text")}</p>
        </div>

        {/* 3 */}
        <div className="flex flex-col items-center text-center">
          <img src="/im3.png" alt="" className="w-full h-48 object-cover rounded-md shadow" />
          <h3 className="mt-4 text-lg font-medium">{t("section.card3_title")}</h3>
          <p className="text-gray-600 text-sm mt-2">{t("section.card3_text")}</p>
        </div>
      </div>

      {/* Button */}
      <button className="px-9 py-3 text-white rounded-md mt-10 bg-[#EBBE9C] relative z-10 hover:bg-[#C88C61] transition">
        {t("section.btn")}
      </button>
    </div>
  );
};

export default Section;
