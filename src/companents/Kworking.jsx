import React from "react";
import { useTranslation } from "react-i18next";

const Kworking = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-gray-900">
      <div className="bg-[url('/bgimg.png')] bg-center bg-cover text-white py-10">
        <h1 className="text-3xl md:text-5xl text-center font-light">
          {t("kworking.title")}
        </h1>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10 mt-10 px-4">
          {/* Form */}
          <div className="w-full max-w-sm bg-white p-6 rounded-lg text-black shadow-lg">
            <h2 className="text-xl md:text-2xl font-medium mb-2 text-center mt-3">
              {t("kworking.subtitle")}
            </h2>
            <h3 className="text-sm md:text-md font-light mb-4 text-center">
              {t("kworking.desc")}
            </h3>

            <div className="flex items-center w-full mb-4">
              <div className="bg-[#C88C61] rounded-l-md flex items-center justify-center p-2">
                <img
                  className="w-6 h-6"
                  src="https://img.icons8.com/windows/50/FFFFFF/phone.png"
                  alt="phone"
                />
              </div>
              <input
                className="flex-1 py-3 px-4 rounded-r-md text-gray-700 bg-white border border-gray-300"
                type="text"
                placeholder={t("kworking.placeholder")}
              />
            </div>

            <button className="w-full h-14 text-white bg-[#C88C61] rounded-md transition hover:bg-[#EBBE9C] mb-4">
              {t("kworking.button")}
            </button>

            <p className="text-xs text-gray-700 text-center">
              {t("kworking.privacy")}{" "}
              <span className="text-[#C88C61]">{t("kworking.terms")}</span>
            </p>
          </div>

          {/* Right side image */}
          <div className="w-full max-w-sm">
            <img
              className="w-full object-contain"
              src="/curlygirl.png"
              alt="curly girl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kworking;
