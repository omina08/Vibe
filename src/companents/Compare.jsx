import React from "react";
import { useTranslation } from "react-i18next";

const Compare = () => {
  const { t } = useTranslation();

  return (
    <div className="relative min-h-screen bg-white px-4 sm:px-6 md:px-12 py-12 sm:py-16 overflow-hidden">

      {/* Background rasmlar */}
      <img
        src="/lola.png"
        alt="Lola"
        className="absolute left-0 top-10 w-24 sm:w-32 md:w-56 opacity-90 pointer-events-none select-none"
      />
      <img
        src="/coffee.png"
        alt="Coffee"
        className="absolute right-0 bottom-10 w-24 sm:w-32 md:w-56 opacity-90 pointer-events-none select-none"
      />
      <img
        src="/key.png"
        alt="kalit"
        className="absolute left-0 bottom-32 w-20 sm:w-28 md:w-40 opacity-90 pointer-events-none select-none"
      />

      {/* Title */}
      <h2 className="text-2xl sm:text-4xl md:text-5xl font-light text-center relative z-10 leading-snug">
        <span className="text-[#C88C61]">
          {t("compare.title.highlight")}
        </span>{" "}
        {t("compare.title.line1")} <br />
        {t("compare.title.line2")} <br />
        {t("compare.title.line3")}
      </h2>

      {/* Content */}
      <div className="mt-10 sm:mt-12 flex flex-col items-center relative z-10">
        <img
          src="/image.png"
          alt={t("compare.altImage")}
          className="w-full max-w-md sm:max-w-2xl md:max-w-4xl rounded-md shadow"
        />

        {/* 2 column bo‘ladigan qism */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 mt-8 sm:mt-10 text-gray-700 text-sm sm:text-base">
          
          {/* Mashaniki */}
          <div className="space-y-6 text-left">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={`masha-${i}`}>
                <img className="w-6 sm:w-7" src="/icon2.png" alt="" />
                <p className="font-semibold flex items-center gap-2 ml-1 mt-2">
                  <span className="text-orange-400">0{i}</span>{" "}
                  {t(`compare.masha.${i}.title`)}
                </p>
                <p className="mt-1 ml-1">{t(`compare.masha.${i}.text`)}</p>
              </div>
            ))}
          </div>

          {/* Dashaniki */}
          <div className="space-y-6 text-left">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={`dasha-${i}`}>
                <img className="w-6 sm:w-7" src="/icon.png" alt="" />
                <p className="font-semibold flex items-center gap-2 ml-1 mt-2">
                  <span className="text-orange-400">0{i}</span>{" "}
                  {t(`compare.dasha.${i}.title`)}
                </p>
                <p className="mt-1 ml-1">{t(`compare.dasha.${i}.text`)}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Button */}
        <button className="p-2 sm:py-3 sm:px-8 px-6 text-sm sm:text-base text-white rounded-md mt-12 sm:mt-16 bg-[#C88C61] hover:bg-[#EBBE9C] relative z-10">
          {t("compare.button")}
        </button>
      </div>
    </div>
  );
};

export default Compare;
